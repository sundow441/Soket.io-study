const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const socket = require("socket.io");
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")} 번 포트에서 대기 중`);
});
