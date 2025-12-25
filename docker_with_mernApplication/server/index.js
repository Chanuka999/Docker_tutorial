import express from "express";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/users", UserRoutes);

app.listen(5000, () => {
  console.log("server starting on 5000");
});
