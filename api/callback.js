const getOrigin = (req) => {
  const envOrigin = process.env.CMS_AUTH_ORIGIN || process.env.PROXY_ORIGIN;
  if (envOrigin) {
    return envOrigin.replace(/\/$/, "");
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
};

const buildCallbackHtml = (origin, status, payload) => {
  const payloadString = JSON.stringify(payload);
  const payloadLiteral = JSON.stringify(payloadString);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Decap CMS Auth</title>
  </head>
  <body>
    <p>Authorizing Decap CMS...</p>
    <script>
      (function () {
        function receiveMessage() {
          window.opener.postMessage(
            "authorization:github:${status}:" + ${payloadLiteral},
            "${origin}"
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "${origin}");
      })();
    </script>
  </body>
</html>`;
};

export default async function handler(req, res) {
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

  const codeQuery = req.query?.code;
  const code = Array.isArray(codeQuery) ? codeQuery[0] : codeQuery;
  if (!code) {
    res.statusCode = 400;
    res.end("Missing code");
    return;
  }

  const clientId = process.env.GITHUB_OAUTH_ID;
  const clientSecret = process.env.GITHUB_OAUTH_SECRET;
  if (!clientId || !clientSecret) {
    res.statusCode = 500;
    res.end("Missing OAuth credentials");
    return;
  }

  const origin = getOrigin(req);
  const redirectUri = `${origin}/api/callback?provider=github`;

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const json = await tokenResponse.json();
    const success = Boolean(json.access_token);
    const payload = success ? { token: json.access_token } : json;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(buildCallbackHtml(origin, success ? "success" : "error", payload));
  } catch (error) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(buildCallbackHtml(origin, "error", {
      error: "oauth_error",
      error_description: error instanceof Error ? error.message : "Unknown error",
    }));
  }
}
