import { DeleteResult } from "typeorm";
import { appDataSource } from "../DataSourceConfig";
import { Book } from "../entity/Book";
import { BookRepositoryI } from "./BookRepositoryI";

export class BookRepositoryImpl implements BookRepositoryI {
  public async saveBook(book: Book): Promise<Book> {
    return await appDataSource.manager.save(Book, book);
  }

  public async findBookById(id: string): Promise<Book | null> {
    return await appDataSource.manager.findOne(Book, { where: { id } });
  }

  public async deleteBookById(id: String): Promise<DeleteResult> {
    return await appDataSource.manager
      .createQueryBuilder()
      .delete()
      .from(Book)
      .where("id = :id", { id })
      .execute();
  }
}
