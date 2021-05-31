const ap = require("express")();
const http = require("http").Server(ap);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3001/",
  },
});
const cors = require("cors");

ap.use(cors);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send", (message) => {
    console.log(message);
    io.emit("recieve", message);
  });
});

http.listen(4000);
