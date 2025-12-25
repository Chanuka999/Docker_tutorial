import express from "express";
import { CreateUser, getUser } from "../controllers/UserController.js";

const UserRoutes = express.Router();

UserRoutes.post("/", CreateUser);
UserRoutes.get("/", getUser);

export default UserRoutes;
