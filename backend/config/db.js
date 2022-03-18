import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo db is connected: ${conn.connection.host}`.green.underline.bold);
    } catch (error) {
        console.log('mogno db is not connected!'.red.underline.bold);
    }
}

