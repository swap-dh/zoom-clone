import express from 'express';
import http from 'http';
import WebSocket from 'ws';
const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

const PORT = 3001;

app.get('/', (req, res)=> {
    res.render("home");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on("connection", (socket)=> {
  console.log("Connected to Browser");
  socket.on("close", ()=> console.log("DisConnedted"));
  socket.on("message", (message)=> {
    console.log(message);    
  });
  socket.send("Hello");
})

server.listen(PORT, ()=>{
  console.log("Runned");
})