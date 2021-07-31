const mongoose = require("mongoose");
const validator = require("validator");





const rent_a_car = new mongoose.Schema({
    name: {
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

    messege: {
        type: String,
        required: true,
    }
   


});



const Messege = new mongoose.model('Messege', rent_a_car)
module.exports = Messege;