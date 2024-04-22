import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: {type: String, default: ""},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    dob: {type: Date, default: new Date()},
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",},
  },
  { collection: "users" }
);
export default userSchema;