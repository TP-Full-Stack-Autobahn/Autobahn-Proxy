import express from "express";
import bodyParser from "body-parser";

const cors = require('cors');
const server = express();
const port = 8000;

import userController from "./controllers/userController";
import verifyToken from "./middlewares/verifyToken";

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

server.use(cors());
server.use(verifyToken);

server.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

userController(server)