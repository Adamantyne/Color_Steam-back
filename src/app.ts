import cors from "cors";
import express from "express";
import "express-async-errors";
import handleError from "./middlewares/handleError.js";
import routers from "./routers/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routers);
app.use(handleError);

export default app;
