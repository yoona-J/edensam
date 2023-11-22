const express = require("express");
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
    favorite: req.user.favorite,
    wishList: req.user.wishList,
    history: req.user.history,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ ID: req.body.ID }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, ID is not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  // User.findOneAndUpdate(
  //   { _id: req.user._id },
  //   { token: "", tokenExp: "" },
  //   (err, doc) => {
  //     if (err) return res.json({ success: false, err });
  //     return res.status(200).send({
  //       success: true,
  //     });
  //   }
  // );
});

router.post('/exit', (req, res) => {
  console.log(req.body)
  const userId = req.body.userId
  User.findOneAndDelete({ '_id': userId })
    .exec((err, user) => {
        if(err) return res.status(400).send(err)
        return res.status(200).send(user)
    })
})

router.post("/changeFavorite", (req, res) => {
  console.log(req.body)
  // const userId = req.body.ID
  // const Favorite = req.body.favorite
  User.findOneAndUpdate(
    { _id: req.body.ID },
    { $set: { favorite: req.body.favorite } },
    { new: true }
  )
    .exec((err, user) => {
      console.log('user', user)
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, user });
      });
})

router.post("/search", (req, res) => {
  let term = req.body.searchTerm;

  if (term) {
    User.find()
      .find({ number: { $regex: term } })
      .exec((err, user) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, user });
      });
  } else {
    User.find().exec((err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, user });
    });
  }
});

router.post("/addToCart", auth, (req, res) => {
  //유저 정보 가져오기
  // console.log(req.user._id)
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;
    userInfo.wishList.forEach((item) => {
      if (item.id === req.body.productId) {
        duplicate = true;
      }
    });
    //상품이미 존재
    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "wishList.id": req.body.productId },
        { $inc: { "wishList.$.quantity": 0 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.wishList);
        }
      );
    }
    //상품 존재x
    else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            wishList: {
              id: req.body.productId,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.wishList);
        }
      );
    }
  });
});

router.get("/userCartInfo", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let wish = userInfo.wishList;
    let array = wishList.map((item) => {
      return item.id;
    });

    Upload.find({ _id: { $in: array } })
      // .populate("writer")
      .exec((err, wishListtDetail) => {
        if (err) return res.status(400).send(err);
        return res
          .status(200)
          .json({ success: true, wishListDetail, wishList });
      });
  });
});

router.post("/successBuy", auth, (req, res) => {
  //1. User Collection 안에  History 필드 안에  간단한 결제 정보 넣어주기
  let history = [];
  let transactionData = {};

  req.body.cartDetail.forEach((item) => {
    history.push({
      dateOfPurchase: Date.now(),
      name: item.title,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
    });
  });
});

//히스토리 저장
router.post("/addToHistory", auth, (req, res) => {
  //유저 정보 가져오기
  // console.log(req.user._id)
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;
    userInfo.history.forEach((item) => {
      if (item.id === req.body.productId) {
        duplicate = true;
      }
    });
    //저장
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          history: {
            id: req.body.productId,
            friendId:req.body.friendId,
            date: Date.now(),
          },
        },
      },
      { new: true },
      (err, userInfo) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json(userInfo.history);
      }
    );
    console.log(req.body);
  });
});

module.exports = router;
