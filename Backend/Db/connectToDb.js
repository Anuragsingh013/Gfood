import mongoose from "mongoose";
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('mongodb connected sucessfully')
  } catch (error) {
     console.error('Error connecting to MongoDB:', error);
  }
}
export default connectToDb
