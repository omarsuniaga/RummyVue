//npm start
const path = require(path)
const express = require('express');
const app =  express();

//setting
app.set('port', process.env.PORT || 6627);

//iniciar la carpeta public

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')))


//iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log("servidor en el puerto ",app.get('port'));

});