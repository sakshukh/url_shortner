import express from "express";
import dotenv from "dotenv";
// import connectDb from "./config/database";
// console.log("sdbjhfjksd");
import t from "./test";
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDb = require("./config/database");
console.log(t);
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use("/hello", (req, res) => {
  res.send("jsdfjksdksj");
});
app.use("/", (req, res) => {
  res.send("Hello World!!");
});
connectDb();
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
