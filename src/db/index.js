import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://anoop:anoop1234@database.sjmay8w.mongodb.net/databases?retryWrites=true&w=majority&appName=database"
    );
    console.log(`mongodb connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongoose", error);
    process.exit(1);
  }
};

export { connectDB };
