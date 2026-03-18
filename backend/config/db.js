import mongoose from 'mongoose';

//const MONGO_URI = process.env.MONGODB_URI;


 

export const connectDB = async () => {
  try {   

  

    await mongoose.connect(`mongodb+srv://qvbsinth_db_user:${process.env.DB_PASSWORD}@cluster0.x3y6fdt.mongodb.net/aistudionotes?appName=Cluster0`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
