const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        ID: req.user.ID,
        password: req.user.password,
        birth: req.user.birth,
        name: req.user.name,
        number: req.user.number,
        favorite: req.user.favorite
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ ID: req.body.ID }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, ID is not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

router.post('/search', (req, res) => {

    let term = req.body.searchTerm
    
    if (term) {
        User.find()
            .find({ "number": { '$regex': term } })
            .exec((err, user) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({ success: true, user })
            });
    } else {
        User.find()
            .exec((err, user) => {
                if (err) return res.status(400).json({ success: false, err })
                return res.status(200).json({ success: true, user })
            });
    }
})
module.exports = router;