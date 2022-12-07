const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/user");

// Cookie Extrator Fuction
const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// Passport JWT Strategy for Authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "NIRWebApp",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

// Passport Local Strategy for Authentication
passport.use(
  new LocalStrategy(
    { usernameField: "Username", passwordField: "Password" },
    (userName, password, done) => {
      User.findOne({ userName }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        user.comparePassword(password, done);
      });
    }
  )
);

// module.exports = passport;
