
// // const express = require("express");
// // const cors = require("cors");
// // const mongoose = require("mongoose");

// // const postsRouter = require("./routes/posts");
// // const pinsRouter = require("./routes/pins");

// // const app = express(); 
// const PORT = process.env.PORT || 3000; 

// // // Middleware
// // app.use(cors()); 
// // app.use(express.json());

// // // Routes
// // app.get("/", (req, res) => {
// //   res.send(`<h1 style="color:blue;">Welcome to My Node.js App 🚀</h1>`);   
// //  });
// // app.use("/api/posts", postsRouter);
// // app.use("/api/pins", pinsRouter);

// // // Connect to MongoDB and start server
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log("✅ Connected to MongoDB"); 
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running on port ${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB connection error:", err.message);
// //   }); 


// require("dotenv").config(); 
// const express = require("express");
// const mongoose = require("mongoose"); 
// const cors = require("cors");

// const postsRouter = require("./routes/posts"); 
// const pinsRouter = require("./routes/pins");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running 🚀");
// });

// app.use("/api/posts", postsRouter);
// app.use("/api/pins", pinsRouter);      

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })  
//   .then(() => {
//     console.log("✅ MongoDB connected")
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`); 
//     }); 
//   })
//   .catch(err => {
//     console.error("❌ MongoDB connection error:", err.message); 
//   });

// // Vercel needs this line:
// module.exports = app;
 

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postsRouter = require("./routes/posts");
const pinsRouter = require("./routes/pins");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1 style="color:blue;">Welcome to My Node.js App 🚀</h1>`);
});
app.use("/api/posts", postsRouter);
app.use("/api/pins", pinsRouter); 

// MongoDB Connection (no deprecated options)
mongoose
  .connect('mongodb+srv://hiramonnahareva:nqmHXN42TCDYlwHt@cluster0.evtcesq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Export for Vercel (Serverless support)
module.exports = app; 
