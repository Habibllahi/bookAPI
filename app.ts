import express, { Application } from "express";
import { bookRouter } from "./router/bookRouter";
import { optionsJson, optionUrlEncode } from "./option";

export const app: Application = express();
export const port: string | number = process.env.PORT != null ? process.env.PORT : 3000;

app.use(express.json(optionsJson));
app.use(express.urlencoded(optionUrlEncode));
app.use("/api/books", bookRouter);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
