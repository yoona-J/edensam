const express = require('express');
const router = express.Router();
const { Mailbox } = require('../models/Mailbox')

//=================================
//           Mailbox
//=================================

router.post('/', (req, res) => {
    console.log(req.body)
    const mailbox = new Mailbox(req.body)
    mailbox.save((err) => {
        // console.log('err', err)
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
   
})

//내 우체통 정보 가져오기
router.post('/getMailbox', (req, res) => {
    // console.log(req.body)
    const userId = req.body.params.userId._id
    Mailbox.find({ 'maker': userId})
        .populate("maker")
        .exec((err, mailbox) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(mailbox)
        })
})

//내 우체통 삭제하기
router.post('/deleteMailbox', (req, res) => {
    console.log(req.body)
    const mailboxId = req.body.mailboxId
    Mailbox.findOneAndDelete({ '_id': mailboxId })
        .exec((err, mailbox) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(mailbox)
        })
})

router.post('/friend/getMailbox', (req, res) => {
    // console.log(req.body)
    
    //친구 우체통
    const friendId = req.body.params.FriendId
    Mailbox.find({ 'maker': friendId})
        .populate("maker")
        .exec((err, mailbox) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(mailbox)
        })
   
})

module.exports = router;