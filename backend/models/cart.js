const { Schema } = require('mongoose')

const cartSchema = new Schema(
    {
        image: { type: String, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
        total_price: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)

module.exports = cartSchema