import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Database URI is not defined in environment variables inside .env.<development/production>.local"
  );
}

const connectToDataBase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to MongoDB database at in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};
export default connectToDataBase;
