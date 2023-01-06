import { Book } from "../entity/Book";
import { BookI } from "../types/Book";
import { BookResponse } from "../types/BookResponse";

export interface BookServiceI {
  save: (data: Book) => Promise<BookResponse>;
  findById: (id: string) => Promise<BookResponse>;
  updateBook: (book: BookI, id: string) => Promise<BookResponse>;
}
