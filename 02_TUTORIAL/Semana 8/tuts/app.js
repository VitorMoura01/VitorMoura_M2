const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //pega o dados do banco e divide eles em coluna e linhas
const urlencoderParser = bodyParser.urlencoded({extended: false}) //codifica o url para torna-los escondidos
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbUser.db'

const hostname = '127.0.0.1';
const port = 3071;

app.get('/', (req,res) =>{
    res.send("Comi o cu de quem ta lendo");
});

app.listen(port, hostname, () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}`);
})