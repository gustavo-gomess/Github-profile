import { Router } from "express";
import { reposSeach } from "./controllers/UserByControllers";

const reposRouter = Router();

reposRouter.get("/search", reposSeach);

export { reposRouter };
