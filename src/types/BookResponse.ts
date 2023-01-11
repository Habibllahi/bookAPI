import { BookI } from "./Book";

export interface BookResponse {
  result?: BookI;
  results?: BookI[];
  error?: Error;
}
