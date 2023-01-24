const { Router } = require("express");
const jobModel = require("../Models/Job.model");
const app = Router();

app.get("/", async (req, res) => {
  try {
    let jobdata = await jobModel.find();
    res.send({ message: "signups", data: jobdata });
  } catch (e) {
    console.log(e);
  }
});
app.post("/", async (req, res) => {
  try {
    let jobdata = await jobModel.create(req.body);
    res.send({ message: "signups", data: jobdata });
  } catch (e) {
    console.log(e);
  }
});

// delete
app.delete("/:id", async (req, res) => {
    try {
      const user = await jobModel.findByIdAndDelete(req.params.id);
      res.send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  //patch
  app.patch("/:id", async (req, res) => {
    try {
      const user = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports=app
