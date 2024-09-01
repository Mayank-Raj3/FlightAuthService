const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./src/config/server-config");
const apiRoutes = require("./src/routes/index");

const app = express();
const db = require("./src/models/index");
const { User, Role } = require("./src/models/index");
const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    //  For inserting in the user_roles model that keeps tracks of role
    // const u1 = await User.findByPk(2);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
  });
};

prepareAndStartServer();
