const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productsInWarehouse: {
        type: Number,
        required: true
    },
    productsOnShelf: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    placeAnOrder: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("inventory", inventorySchema);