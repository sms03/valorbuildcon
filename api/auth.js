import crypto from "node:crypto";

const getOrigin = (req) => {
  const envOrigin = process.env.CMS_AUTH_ORIGIN || process.env.PROXY_ORIGIN;
  if (envOrigin) {
    return envOrigin.replace(/\/$/, "");
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
};

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return;
  }

  const providerQuery = req.query?.provider;
  const provider = Array.isArray(providerQuery) ? providerQuery[0] : providerQuery;
  if (provider && provider !== "github") {
    res.statusCode = 400;
    res.end("Invalid provider");
    return;
  }

  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) {
    res.statusCode = 500;
    res.end("Missing GITHUB_OAUTH_ID");
    return;
  }

  const repoPrivate = process.env.CMS_REPO_PRIVATE === "1";
  const scope = repoPrivate ? "repo,user" : "public_repo,user";
  const state = crypto.randomBytes(8).toString("hex");
  const origin = getOrigin(req);
  const redirectUri = `${origin}/api/callback?provider=github`;

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", scope);
  url.searchParams.set("state", state);

  res.statusCode = 302;
  res.setHeader("Location", url.toString());
  res.end();
}
