const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = mongoose.Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    mailboxId: {
      type: Schema.Types.ObjectId,
      ref: "Mailbox",
    },
    writerid: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    writer: {
      type: String,
    },
    content: {
      type: String,
    },
    envelopeImg: {
      type: String,
    },
    stickerIcon: {
      type: String,
    },
    giftAvailable: {
      type: String
    },
  },
  { timestamps: true }
);

const Mail = mongoose.model("Mail", mailSchema);

module.exports = { Mail };
