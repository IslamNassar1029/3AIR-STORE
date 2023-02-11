const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true, minLength: 3},
    lastName:{type: String, required: true, minLength: 3},
    email: {type: String, unique: true, match:/^\w+\@\w+\.\w+/},
    password: {type: String, required: true, minLength: 4},
    role: {type: String,default:"user"},
    token: { type: String },
})

const UserModel = mongoose.model("user", userSchema)


module.exports = UserModel 