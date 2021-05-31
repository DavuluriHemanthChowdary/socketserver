const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

const cors = require("cors");

app.use(cors);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send", (message) => {
    console.log(message);
    io.emit("recieve", message);
  });
});

app.get("/", (request, response) => {
  return response.send("hey");
});

http.listen("4000", () => {
  console.log("server running");
});
