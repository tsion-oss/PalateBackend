const { Schema } = require('mongoose');

const cartSchema = new Schema(
    {
   
        id: { type: Number, required: true },
        image:{type: String, required: true},
        name: {type:String, required: true},
        old_price: {type: Number, required: true},
        new_price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    },
  
    {
        timestamps: true,
    }
);

module.exports = cartSchema;
