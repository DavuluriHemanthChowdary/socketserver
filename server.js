const io = require("socket.io")(4000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send", (message) => {
    console.log(message);
    io.emit("recieve", message);
  });
});
