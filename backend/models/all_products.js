const { Schema } = require('mongoose')

const all_productSchema = new Schema(
    {
        id: { type: Number, required: true},
        name: {type: String, required: true},
        category: {type: String, required: true},
        image: {type: String, required: false},
        new_price: {type: Number, required: true},
        old_price: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)

module.exports = all_productSchema