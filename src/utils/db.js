import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.CLOUD_MONGO_DB);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
