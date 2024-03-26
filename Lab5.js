const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const module = {
  id: "M1",
  name: "Welcome to Web Dev",
  description: "Learn to create a web page",
  course: "CS 5610"
}

const Lab5 = (app) => {
  app.get("/a5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/a5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  app.get("/a5/module", (req, res) => {
    res.json(module);
  });

  app.get("/a5/module/name", (req, res) => {
    res.json(module.name);
  });

  app.get("/a5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

  app.get("/a5/welcome", (req, res) => {res.send("Welcome to Assignment 5");});
  
  app.get("/a5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  });
  
  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) - parseInt(b);
    res.send(sum.toString());
  });

  app.get("/a5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const multiply = parseInt(a) * parseInt(b);
    res.send(multiply.toString());
  })

  app.get("/a5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const divide = parseInt(a) / parseInt(b);
    res.send(divide.toString());
  })

};
export default Lab5;