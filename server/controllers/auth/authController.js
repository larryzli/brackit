const { AUTH_DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;
const Auth0Strategy = require("passport-auth0");

module.exports = new Auth0Strategy(
  {
    domain: AUTH_DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scope: "openid profile email",
    callbackURL: "http://localhost:3001/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
);
