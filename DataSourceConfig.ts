import { DataSource } from "typeorm";
import "reflect-metadata";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "book_api",
  schema: "library",
  entities: ["./entity/*.ts"],
  synchronize: true,
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("Error during DB connection: ", err);
  });
