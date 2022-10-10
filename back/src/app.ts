import cors from "cors";
import express from "express";

import { api } from "./api";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", api);

app.use(notFound);
app.use(errorHandler);

export { app };
