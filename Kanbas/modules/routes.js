// import db from "../Database/index.js";
import * as dao from "./dao.js";

let globalCurrentModule = null;

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = req.body;
    delete module._id
    const result = await dao.createUser(module);
    res.json(result);
  };

  // const deleteUser = async (req, res) => {
  //   const status = await dao.deleteUser(req.params.userId);
  //   res.json(status);
  // };

  // const findAllUsers = async (req, res) => {
  //   const { role } = req.query;
  //   if (role) {
  //       const users = await dao.findUsersByRole(role);
  //       res.json(users);
  //       return;
  //   }
  //   const users = await dao.findAllUsers();
  //   res.json(users);
  // };

  // const findUserById = async (req, res) => {
  //   const user = await dao.findUserById(req.params.userId);
  //   res.json(user);
  // };

  // const updateUser = async (req, res) => {
  //   const { userId } = req.params;
  //   const status = await dao.updateUser(userId, req.body);
  //   req.session.currentUser = await dao.findUserById(userId);
  //   res.json(status);
  // };

  // const signup = async (req, res) => {
  //   const user = await dao.findUserByUsername(req.body.username);
  //   console.log(user)
  //   if (user) {
  //       res.status(400).json({ message: "Username already taken" });
  //   }
  //   const currentUser = await dao.createUser(req.body);
  //   req.session["currentUser"] = currentUser;
  //   globalCurrentUser = currentUser;
  //   res.json(currentUser);
  // };

  // const profile = async (req, res) => {
  //   let currentUser = req.session["currentUser"];
  //   currentUser = globalCurrentUser;
  //   if (!currentUser) {
  //     res.sendStatus(401);
  //     return;
  //   }
  //   res.json(currentUser);
  // };

  app.post("/api/modules", createModule);

  // app.get("/api/users", findAllUsers);

  // app.post("/api/users/profile", profile);

  // app.put("/api/users/:userId", updateUser);

  // app.delete("/api/users/:userId", deleteUser);

  // app.post("/api/users/signin", signin);

  // app.post("/api/users/signup", signup);

  // app.post("/api/users/signout", signout);

  // app.get("/api/users/:userId", findUserById);
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