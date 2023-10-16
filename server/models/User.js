const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    ID: {
        type: String,
        //띄어쓰기 없애주는 trim
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minlength: 4
    },
    birth: {
        type: String,
        minlength: 6
    },
    number : {
        type: String,
        minlength: 11
    },
    favorite: {
        type: Array,
        default: []
    },
    token : {
        type: String
    },
    tokenExp :{
        type: Number
    }
})

//유저 정보를 저장하기 전에 함수를 연결함
userSchema.pre('save', function(next){
    //const userschema = mongoose.Schema를 가르킴
    var user = this;

    //유저의 정보를 변경할 때마다 비밀번호를 암호화하지 않기 위해
    //비밀번호를 변경할 때만 암호화를 해줘야 한다.
    //따라서
    //user스키마에서 password의 정보만이 변경될 때에만 암호화해주는 조건식 추가
    if (user.isModified('password')) {

        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)
            //유저가 입력한 순수한 비밀번호를
            //myPlaintextPassword(user.password)에 넣어준다
            //hash -> 암호화된 비밀번호
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next (err)
                //오류가 안나면 hash로 변경
                user.password = hash
                next()
            });
        });
    } else {
        //password 이외의 내용이라면 index의 /register로 넘겨준다.
        next()
    }
})

//입력된 비밀번호 (plainPassword)와 암호화 된 비밀번호가 맞는 지 확인
userSchema.methods.comparePassword = function (plainPassword, cb) {
    console.log('plainPassword', plainPassword)
    console.log('Password', this.password)
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

//jwt token 생성
userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secret')
    console.log(':::::', token)
    var oneHour = moment().add(1, 'hour').valueOf();
    console.log('user._id=', user._id)
    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token,'secret',function(err, decode){
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

userSchema.index (
    {
        number: "text"
    }
)

const User = mongoose.model('User', userSchema);

module.exports = { User }