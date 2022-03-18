import dotevn from 'dotenv';
import colors from 'colors';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import { connectDB } from './config/db.js';
import users from './data/users.js';
import products from './data/products.js';


dotevn.config();
connectDB();
const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();

        const createUsers = await User.create(users);
        const admin = createUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {
                ...product,
                user:admin
            }
        });

        await Product.insertMany(sampleProducts);
        console.log('Data Imported!'.green.inverse);



    } catch (error) {
        console.log('Data not Imported'.red.inverse);
    }
};

importData();