import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    model.create(module);
}

export const findAllModules = () => model.find();

export const findModuleById = (moduleId) => model.findById(moduleId);

export const findModuleByModuleName = (moduleName) =>  model.findOne({ name: moduleName });

export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });