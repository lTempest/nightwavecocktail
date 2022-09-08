const { Number } = require("core-js")
const mongoose = require("mongoose")
const {Schema} = mongoose

let UserSchema = new Schema({
    mailAdre: {
        type: String
    },
    password: {
        type: String
    },
    Birthday: {
        type: String
    }
}, {
    collection: "user"
}, {
    versionKey: "_somethingElse"
})

module.exports = mongoose.model("user",UserSchema)