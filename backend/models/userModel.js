import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
UserSchema.methods.matchPassword = async function(enterdPassword){
    
    return await bcryptjs.compare(enterdPassword,this.password);
}

UserSchema.pre('save',async function(next){
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password,salt);
    next();
});




const User = mongoose.model('User',UserSchema);
export default User;