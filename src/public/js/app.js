const socket = new WebSocket(`ws://${window.location.host}`);
socket.addEventListener("open", ()=> {
    console.log("Connected to server");
});

socket.addEventListener("message", (message)=> {
    console.log("Just got this: ", message, "from the server");
});

socket.addEventListener("close", ()=> {
    console.log("Closed");
})

setTimeout(()=> {
    socket.send("hello from the broswer");
}, 10000);
