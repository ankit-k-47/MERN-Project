import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema= new Schema({
    username: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true,
        index :true
    },
    email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true,
    },
    fullname: {
        type: String,
        required:true,
        trim: true,
        index :true
    },
    avatar: {
        type:String,
        required : true
    },
    coverImage: {
        type:String,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    refreshToken:{
        type: Sting
    }
},{
    timestamps:true
})
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password=bcrypt.hash(this.password,8)
    next()  
})

userSchema.methods.isPc=async (password)=>{
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.genAcct= function(){
    return jwt.sign(
        {
            _id:this._id,
            email: this.email,
            username:this.username
        },
        process.env.Acc_token_Sec,
        {
            expiresIn:Acc_token_exp
        }
    )
}
userSchema.methods.genReft= function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.Ref_token_Sec,
        {
            expiresIn:Ref_token_exp
        }
    )
}
export const User = mongoose.model("User",userSchema);