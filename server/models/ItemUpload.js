const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemUploadSchema = mongoose.Schema({
    _itemId: mongoose.Schema.Types.ObjectId,
    item_maker: {
        type: String,
    },
    item_title: {
        type: String,
    },
    item_image: {
        type: Array,
        default: [],
    },
    item_info: {
        type: Array,
        default: [],
    },
    how_much: {
        type: String
    },
    item_category: {
        type: String
    },
})

const ItemUpload = mongoose.model('Upload', itemUploadSchema);

module.exports = { ItemUpload }