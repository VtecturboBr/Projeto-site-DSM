const dotenv = require("dotenv");
dotenv.config({quiet:true});

const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT;

console.log("Porta", PORT);

app.listen(PORT, function(){
   console.log(`Rodando em http://localhost:${PORT}`); 
});

const publicPath = path.join(__dirname,"public");
const pagesPath = path.join(publicPath,"pages");

app.use("/assets", express.static(path.join(publicPath, "assets")));

app.get("/", function(rec, res){
   res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/login", function(rec, res){
   res.sendFile(path.join(pagesPath, "login.html"));
});

app.get("/cadastro", function(rec, res){
   res.sendFile(path.join(pagesPath, "cadastro.html"));
});

app.use(function(rec, res){
   res.status(404).sendFile(path.join(pagesPath, "404.html"));
});