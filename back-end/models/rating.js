const { Number } = require("core-js")
const mongoose = require("mongoose")
const {Schema} = mongoose

let RatingSchema = new Schema({
    idDrink: {
        type: Number
    },
    rate: {
        type: Number
    },
}, {
    collection: "rating"
}, {
    versionKey: "_somethingElse"
})

module.exports = mongoose.model("rating",RatingSchema)