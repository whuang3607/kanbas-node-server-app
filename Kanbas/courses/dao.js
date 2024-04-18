import model from './model.js';

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const createCourse = (course) => {
  delete course._id;
  course.id = new Date().getTime().toString();
  return model.create(course);
};

export const findCourseByNumber = (courseNumber) => model.findOne({ number: courseNumber });

export const findAllCourses = () => model.find();

export const findCourseByName = (courseName) => model.findOne({ name: courseName });

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const findCourseById = (courseId) => model.findById(courseId);