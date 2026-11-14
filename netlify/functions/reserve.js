// Side server for the Reserve form.
// Accepts a cross-origin POST from the GitHub Pages site, then forwards it
// into this Netlify site's Netlify Forms (so it lands in the Forms dashboard
// and triggers any email notifications). No mail API key, no database.

// Origins allowed to post here. Add a custom domain if the page ever moves.
const ALLOWED_ORIGINS = [
  "https://lolo737.github.io",
  "https://remote-control-mouse.netlify.app",
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.indexOf(origin) !== -1 ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || "";
  const cors = corsHeaders(origin);

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: cors, body: "Method Not Allowed" };
  }

  // Parse the incoming body (url-encoded or JSON).
  let params;
  try {
    const ct = (event.headers["content-type"] || event.headers["Content-Type"] || "").toLowerCase();
    if (ct.indexOf("application/json") !== -1) {
      params = new URLSearchParams(JSON.parse(event.body || "{}"));
    } else {
      params = new URLSearchParams(event.body || "");
    }
  } catch (e) {
    return { statusCode: 400, headers: cors, body: "Bad request" };
  }

  // Honeypot: silently accept (don't store) if the bot field is filled.
  if ((params.get("bot-field") || "").trim() !== "") {
    return { statusCode: 200, headers: { ...cors, "Content-Type": "application/json" }, body: JSON.stringify({ ok: true }) };
  }

  params.set("form-name", "reserve");

  // Forward to this site's own Netlify Forms endpoint (same-origin server-side).
  const site = process.env.URL || ("https://" + (event.headers.host || "remote-control-mouse.netlify.app"));
  try {
    const res = await fetch(site + "/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    if (!res.ok && res.status !== 200 && res.status !== 303) {
      return { statusCode: 502, headers: cors, body: "forward failed" };
    }
  } catch (e) {
    return { statusCode: 502, headers: cors, body: "forward error" };
  }

  return {
    statusCode: 200,
    headers: { ...cors, "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }),
  };
};
