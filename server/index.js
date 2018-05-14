// ENV SETUP
require("dotenv").config();
// ENV VARIABLES
const {
  PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  REACT_APP_LOGIN
} = process.env;
// SERVER DEPENDENCIES
const express = require("express");
// MIDDLEWARE DEPENDENCIES
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
// DATABASE DEPENDENCIES
const massive = require("massive");
// AUTHENTICATION DEPENDENCIES
const passport = require("passport");
const strategy = require(`${__dirname}/controllers/auth/authController`);
// IMPORT API ROUTES
const masterRouter = require(`${__dirname}/masterRouter`);

// INITIALIZE APP
const app = express();

// DATABASE CONNECTION
massive(CONNECTION_STRING)
  .then(db => {
    // console.log(db);
    app.set("db", db);
  })
  .catch(console.log);

// SERVE FRONT END IN PRODUCTION
// app.use(express.static(`${__dirname}/../build`));

// USE MIDDLEWARES
app.use(json());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

// SETUP PASSPORT STRATEGY
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
passport.serializeUser((user, done) => {
  app
    .get("db")
    .get_user_by_authid([user.id])
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .create_user_by_authid([
            user.id,
            user._json.name,
            user._json.nickname,
            user._json.email,
            user._json.picture
          ])
          .then(created => {
            return done(null, created[0]);
          })
          .catch(console.log);
      } else {
        return done(null, response[0]);
      }
    })
    .catch(console.log);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// AUTH API
app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/discover",
    failureRedirect: REACT_APP_LOGIN
  })
);
app.get("/api/me", (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    return res.status(403).send("Login Please");
  }
});

// API ROUTES
masterRouter(app);

// ROUTES IN PRODUCTION
// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

// APP LISTEN
const port = PORT || 3001;
app.listen(port, () => console.log("Listening on port: " + port));
