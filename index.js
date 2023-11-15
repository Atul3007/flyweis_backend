const express = require("express");
const { connection } = require("./config/db");
const {bannerrouter} = require("./routes/bannerRoute") 
const app=express();
const cors = require("cors"); 

app.use(
  cors()
);

app.use(express.json());

app.use("/api/", bannerrouter);

app.get("/",(req, res) => {
  try {
    res.send("Welcome");
  } catch (error) {
    console.log("Error");
  }
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("Error occurred");
  }
  console.log(`Running on 8000`);
});
