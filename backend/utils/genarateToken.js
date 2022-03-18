import jwt from 'jsonwebtoken';
export const genarateToken = (user) => {
    return jwt.sign({id:user._id},process.env.SECRET_KEY,{
        expiresIn:'30d'
    })
}


