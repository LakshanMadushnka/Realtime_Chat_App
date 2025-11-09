import mongoose from "mongoose";

//in this page we create "users"(like in sql table) clollection in the database 
const userSchema = new mongoose.Schema(
    {
        email: {
            type:String, 
            required: true,
            unique: true
        }, 
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        }
    },
    {timestamps:true }
)

const User = mongoose.model("User", userSchema);

export default User;