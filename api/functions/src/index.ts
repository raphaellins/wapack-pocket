import * as functions from "firebase-functions";
import * as cors from "cors";
import * as app from "express";
import authorization from "./config/Authorization";

import {
  createOperation,
  deleteOperation,
  updateOperation,
  getOperation,
  findOperation,
} from "./controllers/WalletController";

import { loginUser } from "./controllers/UserController";

const application = app();

application.use(cors({ origin: true }));

application.post("/signin", loginUser);

application.post("/wallet-operation", authorization, createOperation);
application.get("/wallet-operation/:operation-id", authorization, getOperation);
application.get("/wallet-operation", authorization, findOperation);
application.delete("/wallet-operation", authorization, deleteOperation);
application.put("/wallet-operation", authorization, updateOperation);

exports.api = functions.https.onRequest(application);
