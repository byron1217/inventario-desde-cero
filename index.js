//trae express para usarlo
const express = require("express");

//me crea una variable para usar express
const app = express();

//definimos el puerto
PORT = 3000;

//configuramos el puerto
app.set("port", PORT);

//definimos una ruta y un verbo http, (req,res) creamos una funcion que tiene como parametros req: request y res: response el request es lo que 
app.get("/hola",(req,res)=>{
    res.send("hola mundo")
})

app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
})