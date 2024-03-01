import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    videoLink: {
      type: String,
    },
    points: {
      type: Number,
    },
    published: {
      type: Number,
      enum: [0, 1, 2], // 0: is refused, 1: is approved, 2: pending
      defaultValue: 2,
    },
  },
  { timestamps: true }
);

// If the User collection does not exist, create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
