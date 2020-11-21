const express = require('express');
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");


const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

const secretCode = "Dee-looks-like-a-bird";

// ----------------------------- MIDDLEWARE ----------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(
  session({
    secret: secretCode,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(secretCode));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

// ------------------------------ ROUTES ------------------------------------


app.use(routes);

