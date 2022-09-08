const { next } = require("cli")
const express = require("express")
const UserRoute = express.Router()

let UserModel = require("../models/userco")

UserRoute.route("/").get((req,res) => {
    UserModel.find((error,data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

UserRoute.route("/create").post((req, res) => {
    UserModel.create(req.body,(error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

UserRoute.route("/entry/:mailADr").post((req, res) => {
    UserModel.find({mailADr: req.params.mailADre},(error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = UserRoute