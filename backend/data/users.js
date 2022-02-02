import bcryptJs from 'bcryptjs';

const users = [{
    name:'Admin User',
    email:"admin@example.com",
    password:bcryptJs.hashSync('1234',10),
    isAdmin:true
},{
    name:'John Doe',
    email:"doe@gmail.com",
    password:bcryptJs.hashSync('1234',10)
},{
    name:'Jane Doe',
    email:'jane@gmail.com',
    password:bcryptJs.hashSync('1234',10)
}];

export default users;