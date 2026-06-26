// const express = require("express");
// const app = express();
// const cors = require("cors");

// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// require('dotenv').config()

// // middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173', 'https://book-app-frontend-tau.vercel.app'],
//     credentials: true
// }))

// // routes
// const bookRoutes = require('./src/books/book.route');
// const orderRoutes = require("./src/orders/order.route")
// const userRoutes =  require("./src/users/user.route")
// const adminRoutes = require("./src/stats/admin.stats")

// app.use("/api/resources", bookRoutes)
// app.use("/api/orders", orderRoutes)
// app.use("/api/auth", userRoutes)
// app.use("/api/admin", adminRoutes)

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   app.use("/", (req, res) => {
//     res.send("Resources Store Server is running!");
//   });
// }

// main().then(() => console.log("Mongodb connected successfully!")).catch(err => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

// routes
const bookRoutes  = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes  = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/resources", bookRoutes);
app.use("/api/orders",    orderRoutes);
app.use("/api/auth",      userRoutes);
app.use("/api/admin",     adminRoutes);

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// connect DB then start server
async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main()
  .then(() => {
    console.log("MongoDB connected successfully!");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => console.log(err));