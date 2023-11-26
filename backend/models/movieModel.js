const mongoose = require("mongoose")
const {Decimal128} = require("mongodb")
const values = new mongoose.Schema({value: String})
const movieSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required: true
    },
    genres:{
       /*  type:[values],
        default: undefined */
        body: String
    },
    keyword:{
        type:[values],
        default: undefined
    },
    title:{
        type: String,
        required: true
    },
    release_date:{
        type: Date,
        required: true
    },
    vote_average:{
        type: Decimal128,
        required: true
    },
    vote_count:{
        type:Number,
        required: true
    }
})

const movie = mongoose.model("movie", movieSchema)
module.exports = movie