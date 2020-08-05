const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

require("./models/User");
//as nothing is exported from passport.js so no var required
require("./services/passport");
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //cookieKey random string for encrytion
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
// as the function is exportes from authRoutes so in 2nd parameter it is directly invoked
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up porduction assets
  //like main.js file or main.css files
  app.use(express.static("client/build"));
  // Express will serve up index.html files
  // if it doesnt recognizes the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
mongoose.connect(keys.mongoURI);

app.listen(process.env.PORT || 5000);
