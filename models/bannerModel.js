const mongoose=require("mongoose");

const bannerSchema=mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    },
    bannerInfo: {
        type: String,
        lowercase: true
    },
    date: {
        type: Date
    }
})

const bannerModel=mongoose.model("banner",bannerSchema);

module.exports={bannerModel}

