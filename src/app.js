const express = require("express");
const app = express();

app.get("/",(_, res)=>{
  res.status(200).send("HOME")
})

app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello world")
})
module.exports = app;