const mongoose = require("mongoose");
const validator = require("validator");





const rent_a_car = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalide email")
            }
        }
    },

    Carname: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    },


    price: {
        type: String,
        required: true,
    },


    number: {
        type: String,
        required: true,
    },

   

    image: {
        type: String,
        required: true,
    }


});



const carlist = new mongoose.model('carlist', rent_a_car)
module.exports = carlist;