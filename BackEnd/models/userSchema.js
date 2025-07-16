import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minlength: 5,
      maxlength: 64,
    },
    Username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 32,
    },
    Password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 64,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", UserSchema);
export default User;
