const { User } = require('../models/User');

let auth = (req, res, next) => {

  console.log('reqrwqq', req.cookies)

  let token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;

    // console.log('userrrr', user)

    if (user == undefined)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
