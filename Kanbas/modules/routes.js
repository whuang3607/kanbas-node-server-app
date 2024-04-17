// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = req.body;
    delete module._id
    const result = await dao.createUser(module);
    res.json(result);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteUser(req.params.moduleId);
    res.json(status);
  };

  const findAllModulesForCourse = async (req, res) => {
    const { role } = req.query;
    if (role) {
        const users = await dao.findUsersByRole(role);
        res.json(users);
        return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
};

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    req.session.currentModule = await dao.findModuleById(moduleId);
    res.json(status);
  };

  app.get("/api/users", findAllModulesForCourse);

  app.post("/api/modules", createModule);

  app.put("/api/modules/:moduleId", updateModule);

  app.delete("/api/modules/:moduleId", deleteModule);

  app.get("/api/modules/:moduleId", findModuleById);



  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });    

  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });
  
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });
  
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules
  //   .filter((m) => m.course === cid);
  //   res.send(modules);
  // });
}