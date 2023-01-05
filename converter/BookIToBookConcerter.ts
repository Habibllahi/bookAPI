import { Book } from "../entity/Book";
import { BookI } from "../types/Book";

export class BookIToBookConverter {
  public convertToBook(pojo: BookI): Book {
    const resource = new Book();
    resource.author = pojo.author;
    resource.genre = pojo.genre;
    resource.isread = pojo.read;
    resource.title = pojo.title;
    return resource;
  }

  public convertFromBook(entity: Book): BookI{
    return {
      author: entity.author != null? entity.author: "",
      genre: entity.genre !=null? entity.genre:"",
      title: entity.title !=null? entity.title:"",
      id: entity.id !=null ? entity.id : "",
    }
  }
}
