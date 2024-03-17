const express = require("express");

const { PORT } = require("./src/config/server-config");

const app = express();
const prepareAndStartServer = () => {
  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
  });
};

prepareAndStartServer();
