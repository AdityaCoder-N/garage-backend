const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    rating:{
        type:Number
    },
    message:{
        type:String,
    },
    month:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
