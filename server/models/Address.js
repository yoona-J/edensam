const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productFrom: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
    ,
    mailboxId: {
      type: String,
    },
    title: {
      type: String,
    },
    mailboxStyle: {
      type: String,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);

module.exports = { Address };
