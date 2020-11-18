import * as functions from "firebase-functions";
import * as cors from "cors";
import * as app from "express";
// import authorization from "./config/Authorization";

import {
  createOperation,
  deleteOperation,
  updateOperation,
  getOperation,
  findOperation,
} from "./controllers/WalletController";

import { loginUser, signUpUser } from "./controllers/UserController";

const application = app();

application.use(cors({ origin: true }));

application.post("/signin", loginUser);
application.post("/signup", signUpUser);

application.post("/wallet-operation", createOperation);
application.get("/wallet-operation/:operation-id", getOperation);
application.get("/wallet-operation", findOperation);
application.delete("/wallet-operation", deleteOperation);
application.put("/wallet-operation", updateOperation);

exports.api = functions.https.onRequest(application);
