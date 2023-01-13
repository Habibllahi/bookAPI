import { DeleteResult } from "typeorm";
import { Book } from "../entity/Book";

export interface BookRepositoryI {
  saveBook: (book: Book) => Promise<Book>;
  findBookById: (id: string) => Promise<Book | null>;
  deleteBookById: (id: String) => Promise<DeleteResult>;
}
