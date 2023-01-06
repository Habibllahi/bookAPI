import express, { Router, Request, Response } from "express";
import { BookIToBookConverter } from "../converter/BookIToBookConcerter";
import { Book } from "../entity/Book";
import { BookRepositoryImpl } from "../repository/BookRepositoryImpl";
import { BookServiceImpl } from "../service/BookServiceImpl";
import { BookI } from "../types/Book";
import { BookResponse } from "../types/BookResponse";

export const bookRouter: Router = express.Router();

bookRouter.get("/:id", (req: Request, res: Response) => {
  const converter = new BookIToBookConverter();
  const service = new BookServiceImpl(new BookRepositoryImpl(), converter);
  service
    .findById(req.params.id)
    .then((serviceData: BookResponse) => {
      serviceData.error === undefined ? res.status(200) : res.status(400);
      res.json(serviceData);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
      res.json({ error: err });
    });
});

bookRouter.post("/", (req: Request, res: Response) => {
  const requestBody: BookI = req.body;
  console.log(requestBody);

  const converter = new BookIToBookConverter();
  const service = new BookServiceImpl(new BookRepositoryImpl(), converter);
  const book: Book = converter.convertToBook(requestBody);
  service
    .save(book)
    .then((serviceData: BookResponse) => {
      serviceData.error === undefined ? res.status(201) : res.status(400);
      res.json(serviceData);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
      res.json({ error: err });
    });
});

bookRouter.put("/:id", (req: Request, res: Response) => {
  const requestBody: BookI = req.body;
  console.log(requestBody);
  const converter = new BookIToBookConverter();
  const service = new BookServiceImpl(new BookRepositoryImpl(), converter);
  service
    .updateBook(requestBody, req.params.id)
    .then((serviceData: BookResponse) => {
      serviceData.error === undefined ? res.status(201) : res.status(400);
      res.json(serviceData);
    })
    .catch((err: Error) => {
      res.status(500);
      console.log(err);
      res.json({ error: err });
    });
});
