// .github/scripts/notify-subscribers.js
import fs from "fs/promises";
import { execSync } from "child_process";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const SITE_URL = process.env.SITE_URL || "https://your-site.example";

if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !ADMIN_EMAIL) {
  console.error("Missing required env vars.");
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function readCurrentThoughts() {
  const raw = await fs.readFile("src/data/thoughts.json", "utf8");  // ✅ updated path
  return JSON.parse(raw);
}

function readPreviousThoughts() {
  try {
    const prev = execSync("git show HEAD^:src/data/thoughts.json", { encoding: "utf8" });
    return JSON.parse(prev);
  } catch (err) {
    return [];
  }
}

async function getSubscribers() {
  const { data, error } = await supabase.from("subscribers").select("email,name");
  if (error) throw error;
  return data;
}

function findNewThoughts(current, previous) {
  const prevIds = new Set(previous.map(t => t.id));
  return current.filter(t => !prevIds.has(t.id));
}

async function sendEmailTo(subscriber, thought) {
  const html = `
    <h2>${thought.title}</h2>
    <p>${thought.body}</p>
    <p><a href="${SITE_URL}">Read on site</a></p>
  `;
  const resp = await resend.emails.send({
    from: ADMIN_EMAIL,
    to: [subscriber.email],
    subject: `New thought: ${thought.title}`,
    html,
  });
  return resp;
}

async function main(){
  const current = await readCurrentThoughts();
  const previous = readPreviousThoughts();
  const newThoughts = findNewThoughts(current, previous);
  if (!newThoughts.length) {
    console.log("No new thoughts found.");
    return;
  }
  console.log("New thoughts:", newThoughts.map(t => t.id));

  const subscribers = await getSubscribers();
  if (!subscribers.length) {
    console.log("No subscribers to notify.");
    return;
  }

  for (const thought of newThoughts) {
    console.log(`Sending emails for thought ${thought.id} to ${subscribers.length} subscribers`);
    for (const s of subscribers) {
      try {
        await sendEmailTo(s, thought);
      } catch (err) {
        console.error("Failed to send to", s.email, err);
      }
    }
    // optionally: record that this thought has been announced (e.g., a 'announcements' table)
  }

  // Optional: trigger Netlify build (POST build hook)
  if (process.env.NETLIFY_BUILD_HOOK) {
    try {
      const https = await import("node:https");
      const url = new URL(process.env.NETLIFY_BUILD_HOOK);
      const req = https.request(url, { method: "POST" }, res => {
        console.log("Triggered Netlify build, status:", res.statusCode);
      });
      req.on("error", e => console.error(e));
      req.end();
    } catch (e) { console.error("Netlify hook failed:", e); }
  }
}

main().catch(err => { console.error(err); process.exit(1); });