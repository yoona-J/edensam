const express = require("express");
const router = express.Router();
const multer = require("multer");
// const multerS3 = require('multer-s3');
// const AWS = require('aws-sdk');
// const dotenv = require('dotenv')
const { ItemUpload } = require("../models/ItemUpload");

//=================================
//           ItemUpload
//=================================

//++++++++++++++++++++
// AWS 업로더
//++++++++++++++++++++

// dotenv.config();
// console.log('REACT_APP_S3_ACCESS_KEY_ID', process.env.REACT_APP_S3_ACCESS_KEY_ID)
// console.log('REACT_APP_S3_SECRET_ACCESS_KEY', process.env.REACT_APP_S3_SECRET_ACCESS_KEY)

// AWS.config.update({
//   accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
//   region: "ap-northeast-2",
// })

// const upload = multer({
//   storage: multerS3({
//     s3: new AWS.S3(),
//     bucket: "artudent",
//     key(req, file, cb) {
//       const fileName = file.originalname;
//       cb(null, `${fileName}`);
//     },
//   }),
// }).single("file")

//++++++++++++++++++++++
//storage 업로더
//++++++++++++++++++++++

const storage = multer.diskStorage({
  //어디에 파일이 저장이 되는지 - uploads 파일 안 이미지
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  //가져온 이미지를 저장한다.
  upload(req, res, (err) => {
    // console.log('image res: ', res)
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      fileName: res.req.file.filename,
      filePath: res.req.file.path,
    });
  });
});

//uploadProductPage.js의 api가 index.js의 api와 같기 때문에 '/'
router.post("/", (req, res) => {
  //받아온 정보들을 DB에 넣어준다
  console.log(req.body);
  const upload = new ItemUpload(req.body);
  upload.save((err) => {
    // console.log('err', err)
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//여서부터 작성 중
//ItemListPage.js db에서 아이템 정보 가져옴

router.get("/product", (req, res) => {
  ItemUpload.find().exec((err, upload) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, upload });
  });
});

//detail page 작업중

//  axios.get(`/api/admin/upload/product/products_by_id?id=${productId}&type=single`);

router.get("/products_by_id", (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    productIds = ids.map((item) => {
      return item;
    });
  }

  ItemUpload.find({ _id: { $in: productIds } }).exec((err, upload) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, upload });
  });
});

router.post("/history_by_id", (req, res) => {
  // console.log("req", req.body);
  const giftAvailables = req.body.giftAvailable;
  const GiftAvailable = giftAvailables.map((gift) => {
    return gift.giftAvailable;
  });

  // console.log(GiftAvailable)
  ItemUpload.find({ _id: GiftAvailable }).exec((err, item) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(item);
  });
});

router.post("/wishItem", (req, res) => {
  console.log(req.body.item);
  const items = req.body.item;

  const Items = items.map((item) => {
    return item.id;
  });

  console.log(Items);

  ItemUpload.find({ _id: Items }).exec((err, upload) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, upload });
  });
});

// router.post("/history", (req, res) => {
//   console.log(req.body.item);
//   const items = req.body.item;

//   const Items = items.map((item) => {
//     return item.id;
//   });
//   ItemUpload.find({ _id: Items }).exec((err, upload) => {
//     if (err) return res.status(400).send(err);
//     return res.status(200).json({ success: true, upload });
//   });
// });
router.post("/mail_gift", (req, res) => {
  // console.log("req", req.body);
  const giftAvailables = req.body.giftAvailable;
  const GiftAvailable = giftAvailables.map((gift) => {
    return gift.giftAvailable;
  });

  // console.log(GiftAvailable)
  ItemUpload.find({ _id: GiftAvailable }).exec((err, item) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(item);
  });
});
module.exports = router;
