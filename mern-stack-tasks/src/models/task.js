const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    titulo:{ type: String, required:true },
    descripcion:{type: String, required:true}
});

module.exports = mongoose.model("Task",taskSchema);

