// ENV SETUP
require("dotenv").config();
// ENV VARIABLES
const {
  AUTH_DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
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
// DATABASE DEPENDENCIES
const massive = require("massive");
// AUTHENTICATION DEPENDENCIES
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
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

// USE MIDDLEWARES
app.use(json());
app.use(cors());

// API ROUTES
masterRouter(app);

// APP LISTEN
const port = PORT || 3001;
app.listen(port, () => console.log("Listening on port: " + port));
