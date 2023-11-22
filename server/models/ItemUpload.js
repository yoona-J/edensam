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
    // 인기 상품은 그냥 위시 개수 많이 찍힌 만큼
    // 추천 선물은 내가 선택한 카테고리에 맞는 선물
})

// itemUploadSchema.index(
//   {
//     item_title: "text",
//     item_info: "text",
//   },
//   {
//     weights: {
//       name: 5,
//       info: 1,
//     },
//   }
// );

const ItemUpload = mongoose.model('Upload', itemUploadSchema);

module.exports = { ItemUpload }