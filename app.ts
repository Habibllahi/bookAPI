import express, { Application } from "express";
import { bookRouter } from "./router/bookRouter";
import { options } from "./option";

export const app: Application = express();
export const port: string | number = process.env.PORT != null ? process.env.PORT : 3000;

app.use(express.json(options));
app.use("/api/books", bookRouter);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
