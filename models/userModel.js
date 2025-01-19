import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        require: true
    },



}, { timestamps: true })



export default mongoose.model('users', userSchema)