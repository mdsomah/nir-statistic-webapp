require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const JwtStrategy = require("passport-jwt").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const PORT = process.env.PORT || 5010;
const app = express();
const http = require('http').Server(app);
const cors = require("cors");
// const passportConfiguration = require("./config/passport");
const dataRouter = require("./routes/datas");
const userRouter = require("./routes/users");
const roleRouter = require("./routes/roles");
const reportRouter = require("./routes/reports");
const projectRouter = require("./routes/projects");
const data = require("./models/data");
// const profileRouter = require("./routes/profiles");
// const conversationRouter = require("./routes/conversations");
// const messageRouter = require("./routes/messages");

// Initializing and Using Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*", credentials: true, optionsSuccessStatus: 200 }));
app.use(cookieParser());
app.use("/images", express.static("images"));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
  })
);
//use flash
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
app.use(passport.initialize());
app.use(passport.authenticate("session"));
app.use(passport.session());
// require("./config/passport")(passport);
app.use("/datas", dataRouter);
app.use("/users", userRouter);
app.use("/roles", roleRouter);
app.use("/reports", reportRouter);
app.use("/projects", projectRouter);
// app.use("/profiles", profileRouter);
// app.use("/conversations", conversationRouter);
// app.use("/messages", messageRouter);


// Socket.io Init
const socketIO = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});

// Users Array
let users = [];


//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  // List & Push Enrollment Post Notification
  socket.on('newEnrollmentPost', (data) => {
    socketIO.emit('enrollmentPostNotification', data);
  });

  // List & Push Project Post Notification
  socket.on('newProjectPost', (data) => {
    socketIO.emit('projectPostNotification', data);
  });

  //Listens to public messages and send the messages back to Front-end
  socket.on('publicMessage', (data) => {
    socketIO.emit('publicMessageResponse', data);
  });

  //Listens to private messages and send the messages back to Front-end
  // socket.on("private message", ({ message, to }) => {
  //   socketIO.to(to).emit("private message", {
  //     message,
  //     from: socket.id,
  //   });
  // });

  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));

  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  // Disconnect Message
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');

    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);

    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});


// Listening on Port 5000
http.listen(PORT, () => console.log(`Server Started on port ${PORT}`));


// Connecting To MongoDB Database using connection string from .env Variable
// And using Moongoose as ORM
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listing for DB Connection establishment
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () =>
  console.log("Successfully Connected to MongoDB Database!!")
);
