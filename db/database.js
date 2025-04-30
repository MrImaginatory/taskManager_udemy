import mongoose from 'mongoose';
const mongoURI = process.env.MONGO_URI;
const databaseName = process.env.DATABASE_NAME;


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${mongoURI}/${databaseName}`)

        console.log('✅ Database Connected Successfully!');
    } catch (error) {
        console.error('❌ Error Connecting Database:', error.message);
        throw error;
    }
};

export default connectDB;
