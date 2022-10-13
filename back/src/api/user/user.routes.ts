import { Router } from "express";
import { searchUsersByName } from "./controllers/UserByName";

const userRouter = Router();

userRouter.get("/search", searchUsersByName);

export { userRouter };
