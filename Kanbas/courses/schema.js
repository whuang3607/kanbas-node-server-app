import mongoose from 'mongoose';
const courseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    image: {type: String},
  },
  { collection: 'courses' }
);
export default courseSchema;