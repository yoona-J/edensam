const express = require("express");
const router = express.Router();
const { Mail } = require("../models/Mail");
const { ItemUpload } = require("../models/ItemUpload");
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

//=================================
//             Mails
//=================================

router.post("/", (req, res) => {
  console.log(req.body);
  const mail = new Mail(req.body);
  mail.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//내 우체통 내 편지 정보 가져오기
router.post("/getMails", (req, res) => {
  const mailboxId = req.body.params.mailboxId;
  Mail.find({ mailboxId: mailboxId })
    .populate("mailboxId")
    .exec((err, mail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(mail);
    });
});

router.post("/getMail", (req, res) => {
  const mailId = req.body.params.mailId;
  Mail.find({ _id: mailId })
    .exec((err, mail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(mail);
    });
});

router.post("/getMailHistory", (req, res) => {
  const userId = req.body.params.userId;
  Mail.find({ writerid: userId })
    .populate("writerid")
    .exec((err, mail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(mail);
    });
});

router.post("/getFriendId", (req, res) => {
  const friendId = req.body.friendId;
  User.find({ _id: friendId }).exec((err, user) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(user);
  });
});

router.post("/getGiftInfo", (req, res) => {
  const userId = req.body.params.userId._id;
  Mail.find({ writerid: userId })
    .populate("writerid")
    .exec((err, mail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(mail);
    });
});

router.post("/getMyGift", (req, res) => {
  const userId = req.body.params.userId._id;
  Mail.find({ friendId: userId })
    .populate("friendId")
    .exec((err, mail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(mail);
    });
});

module.exports = router;
