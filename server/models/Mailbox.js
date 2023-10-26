const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailboxSchema = mongoose.Schema({
    maker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    mailboxStyle: {
        type: String
    },
    calendar: {
        type: Array
    }
}, {timestamps : true})

const Mailbox = mongoose.model('Mailbox', mailboxSchema);

module.exports = { Mailbox }