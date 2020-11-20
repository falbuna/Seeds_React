const express = require('express');
// const session = require("express-session");
// const passport = require("./config/passport");


const routes = require("./routes");
// const isAuthenticated = require("./config/middleware/isAuthenticated");

const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(session({ secret: "keyboard-cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(isAuthenticated);

app.use(routes);


// require('./controllers/view-routes')(app);
// require('./controllers/api-routes')(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
