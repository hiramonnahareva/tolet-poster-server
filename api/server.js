// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const postsRouter = require("./routes/posts");
// const pinsRouter = require("./routes/pins");

// const app = express();
// const PORT = process.env.PORT || 3000; 

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//   res.send(`<h1 style="color:blue;">Welcome to My Node.js App 🚀</h1>`);   
//  });
// app.use("/api/posts", postsRouter);
// app.use("/api/pins", pinsRouter);

// // Connect to MongoDB and start server
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ Connected to MongoDB"); 
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err.message);
//   });



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const postsRouter = require("./routes/posts");
const pinsRouter = require("./routes/pins");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1 style="color:blue;">Welcome to My Node.js App 🚀</h1>`);
});
app.use("/api/posts", postsRouter);   
app.use("/api/pins", pinsRouter);  

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

module.exports = app; // ✅ Important for Vercel

