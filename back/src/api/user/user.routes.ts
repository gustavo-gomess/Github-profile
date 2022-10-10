import { Router } from "express";
import { searchUsersByName } from "./controllers/user.searchUsersByName";

const userRouter = Router();

userRouter.get("/search", searchUsersByName);

export { userRouter };
