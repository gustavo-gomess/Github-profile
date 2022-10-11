import { Router } from "express";
import { searchUsersByName } from "./controllers/UserByname";

const userRouter = Router();

userRouter.get("/search", searchUsersByName);

export { userRouter };
