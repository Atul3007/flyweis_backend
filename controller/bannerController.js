const { bannerModel } = require("../models/bannerModel");

// --------get all books-------

const getbannerController = async (req, res) => {
  try {
    const bannerbooks = await bannerModel.find({});
    res.status(200).send({
      success: true,
      bannerbooks,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in getting product",
    });
  }
};

// --------create book-------

const createBanner = async (req, res) => {
  try {
    const { title, imageUrl, linkUrl, bannerInfo,date } = req.body;

    const book =await new bannerModel({ ...req.body });
    await book.save();

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      book,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in creating banner",
    });
  }
};

//   ----------search by id -------------

const getBookByid = async (req, res) => {
  try {
    const id = req.params.id;
   // console.log(id);
    const book = await bannerModel.findById(id);
    if (book) {
      return res.status(201).send({
        success: true,
        book
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in getting banner",
    });
  }
};

// -----------update book-----------

const updateBanner = async (req, res) => {
  try {
    const id = req.params.id;
   // console.log(req.body)
    const {title, imageUrl, linkUrl, bannerInfo,data } = req.body;

    const book = await bannerModel.findByIdAndUpdate(id, {
      ...req.body,
    });
    await book.save();

    const updatedList =await bannerModel.find({});

    res.status(201).json({
      success: true,
      message: "Banner updated successfully",
      updatedList
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in updating banner",
    });
  }
};

// ---------delete book---------
const deleteBanner = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteBanner = await bannerModel
        .findByIdAndDelete(id);
      res.status(200).send({ 
        success: true,
        message: "Banner deleted successfully",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        error: error.message,
        message: "Error in deleting ",
      });
    }
  };
  

module.exports = {
  getbannerController,
  createBanner,
  getBookByid,
  updateBanner,
  deleteBanner
};
