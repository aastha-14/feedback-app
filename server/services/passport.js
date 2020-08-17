const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStartegy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

//adding id to cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({ googleId: profile.id }).save();
      done(null, newUser);
      //model instance
    }
  )
);

passport.use(
  new FacebookStartegy(
    {
      clientID: keys.facebookID,
      clientSecret: keys.facebookSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = await new User({ facebookId: profile.id }).save();
      done(null, newUser);
    }
  )
);
