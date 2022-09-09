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

UserRoute.route("/login/:user").get((req, res) => {
    const ConnectUser = req.params.UserV;
    try {
        UserModel.find({user: ConnectUser},(error, data) => {
        if(error){
            console.log(err)
        } else {
            res.json(data)
        }
    })
    } catch {
        console.log("Error")
    }
    
})

module.exports = UserRoute