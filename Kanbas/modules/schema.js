import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: {type: String},
  description: {type: String},
  module: {type: String}
});

const userSchema = new mongoose.Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String},
  description: {type: String},
  course: {type: String},
  lessons: {type: [[lessonSchema]]},
},
{ collection: "modules" }
);
export default userSchema;