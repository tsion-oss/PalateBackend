const { Schema } = require('mongoose')

const dataSchema = new Schema(
    {
        id: { type: Number, required: true},
        name: {type: String, required: true},
        image: {type: String, required: false},
        new_price: {type: Number, required: true},
        old_price: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)

module.exports = dataSchema