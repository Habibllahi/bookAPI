import { Book } from "../entity/Book";
import { BookI, PatchBookI } from "../types/Book";
import { BookResponse } from "../types/BookResponse";

export interface BookServiceI {
  save: (data: Book) => Promise<BookResponse>;
  findById: (id: string) => Promise<BookResponse>;
  updateBook: (book: BookI, id: string) => Promise<BookResponse>;
  patchBook: (book: PatchBookI, id: string) => Promise<BookResponse>;
}
