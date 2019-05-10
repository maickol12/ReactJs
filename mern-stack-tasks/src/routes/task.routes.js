const express = require('express');
const router  = express.Router();

const Task = require('../models/task');

router.get("/",async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks)
});

router.post("/",async (req,res)=>{
    var {titulo,descripcion} = req.body;
    const task = new Task({
        titulo,
        descripcion
    });
    await task.save();
    res.json({status:200});

});

router.put("/:id", async (req,res) => {
    const { titulo,descripcion } = req.body;
    const newTask = {titulo,descripcion };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json(
        {"code":200,
        "message":"Tarea actualizada"
    });
});

router.delete("/:id",async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json(
        {
            "code":200,
            "message":"Tarea eliminada con éxito"
        }
    );
});

router.get("/:id",async (req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});
module.exports = router;