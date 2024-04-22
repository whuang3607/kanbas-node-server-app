import model from "./model.js";

export const createUser = (user) => {
    // console.log(user)
    delete user._id
    // console.log("I made it past here")
    return model.create(user);
}

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>  model.findOne({ username: username });

export const findUserByCredentials = (username, password) => model.findOne({ username: `${username}`, password: `${password}` });

export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const findUsersByRole = (role) => model.find({ role: role });