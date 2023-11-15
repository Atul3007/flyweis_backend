const express = require("express");
const {
  getbannerController,
  createBanner,
  getBookByid,
  updateBanner,
  deleteBanner,
} = require("../controller/bannerController");

const bannerrouter = express.Router();

bannerrouter.get("/all-banner", getbannerController);
bannerrouter.post("/create-banner", createBanner);
bannerrouter.get("/book-id/:id", getBookByid);
bannerrouter.put("/update-banner/:id", updateBanner);
bannerrouter.delete("/delete/:id", deleteBanner);

module.exports = {
  bannerrouter,
};
