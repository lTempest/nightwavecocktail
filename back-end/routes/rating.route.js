const { next } = require("cli")
const express = require("express")
const ratingRoute = express.Router()

let RatingModel = require("../models/rating")

ratingRoute.route("/").get((req,res) => {
    RatingModel.find((error,data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

ratingRoute.route("/insert").post((req, res) => {
    RatingModel.create(req.body,(error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

ratingRoute.route("/idDrink/:id").get((req, res) => {
    RatingModel.find({idDrink: req.params.id},(error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = ratingRoute