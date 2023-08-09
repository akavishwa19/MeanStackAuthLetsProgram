import mongoose, {Schema} from "mongoose";

const UserSchema=mongoose.Schema(
    {
        firstName:
            {
            type :String,
            required:true
            },
        lastName:
            {
            type:String,
            required: true
            },
        userName:{
            type:String,
            required:true,
            unique:true
            },
        email:{
            type:String,
            required:true,
            unique: true
            },
        password:{
            type:String,
            required:true,
            },
        profileImage:{
            type:String,
            required:false,
            default:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1691478188~exp=1691478788~hmac=51a140ac4ea1f128bda3759191213185c339ffe5893b7da5a232ab96841be90b"
            },
        isAdmin:{
            type:Boolean,
            default:false
        },
        roles:{
            type:[Schema.Types.ObjectId],
            required:true,
            ref:"Role"
        }
        },
    {
        timestamps:true
    }
);

export default mongoose.model("User",UserSchema);