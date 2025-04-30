require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const { json } = require("body-parser");

const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(json());
app.use(cookieParser());

app.use("/files", require("./src/routes/fileRoutes"));

/**
 * Request example from FE to BE
 */
app.get("/testApi", async (req, res) => {
  const token = req.headers["x-access-token"];
  jwt.verify(token, process.env.AUTH_SECRET, (err, decodedToken) => {
    if (err) {
      return res.send({ message: "JWT verification failed" });
    } else {
      console.log("Decoded JWT token:", decodedToken);
      // You can access decoded token data here
    }
  });
  res.send({ message: "Hello from the API side" });
});

app.get("/test", (req, res) => {
  res.send("API is working!");
});

module.exports = app;
