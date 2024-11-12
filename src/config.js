export function getConfigFromEnv(env) {
  return {
    clientId: env.KINDE_CLIENT_ID,
    clientSecret: env.KINDE_CLIENT_SECRET,
    issuerUrl: env.KINDE_ISSUER_URL,
    siteUrl: env.KINDE_SITE_URL,
    postLogoutRedirectUrl: env.KINDE_POST_LOGOUT_REDIRECT_URL,
    postLoginRedirectUrl: env.KINDE_POST_LOGIN_REDIRECT_URL,
    audience: env.KINDE_AUDIENCE,
    cookieMaxAge: env.KINDE_COOKIE_MAX_AGE,
    sessionSecret: env.SESSION_SECRET,
    isDebugMode: env.IS_DEBUG_MODE === "true",
  };
}
