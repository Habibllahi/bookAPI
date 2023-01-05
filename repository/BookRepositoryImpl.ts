import { appDataSource } from "../DataSourceConfig";
import { Book } from "../entity/Book";
import { BookRepositoryI } from "./BookRepositoryI";

export class BookRepositoryImpl implements BookRepositoryI {
  public  async saveBook(book: Book): Promise<Book> {
    return  await appDataSource.manager.save(Book, book);
  }

  public async findBookById(id: string): Promise<Book | null> {
    return await appDataSource.manager.findOne(Book, { where: { id } });
  }
}
