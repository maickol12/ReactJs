const express    = require('express');
const morgan     = require("morgan");
const path       = require('path');
const {mongoose} = require("./database") 
const app        = express();


// Settings
app.set('port',process.env.PORT || 3000);
// MiddleWare
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.use('/api/tasks/',require('./routes/task.routes'));
// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Iniciando el servidor

app.listen(app.get("port"), ()=>{
    console.log("Server run success "+app.get("port"));
});

