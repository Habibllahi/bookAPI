/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { BookIToBookConverter } from "../converter/BookIToBookConcerter";
import { Book } from "../entity/Book";
import { BookRepositoryI } from "../repository/BookRepositoryI";
import { BookI } from "../types/Book";
import { BookResponse } from "../types/BookResponse";
import { BookServiceI } from "./BookServiceI";

export class BookServiceImpl implements BookServiceI {
  private readonly bookRepository: BookRepositoryI;
  private readonly converter: BookIToBookConverter;

  constructor(
    bookRepository: BookRepositoryI,
    converter: BookIToBookConverter
  ) {
    this.bookRepository = bookRepository;
    this.converter = converter;
  }

  public async findById(id: string): Promise<BookResponse> {
    try{
      const existingBook: Book | null = await this.bookRepository.findBookById(id);
      return {result: existingBook != null ? this.converter.convertFromBook(existingBook) : {}} as BookResponse;
    }catch(err: unknown){
      console.log("Error saving Book", err);
      return { error: err } as BookResponse;
    }
  }

  public async save(data: Book): Promise<BookResponse> {
    try{
      const savedBook: Book = await this.bookRepository.saveBook(data)
      return { result: this.converter.convertFromBook(savedBook) } as BookResponse;
    }catch(err:unknown){
      console.log("Error saving Book", err);
      return { error: err } as BookResponse;
    }
  }

  public async updateBook(book: BookI, id:string): Promise<BookResponse>{
    try{
      const found = await this.findById(id);
      if(found.error === undefined && found.result !== undefined){
        const existingBook: Book = this.converter.convertToBook(found.result);
        existingBook.author = book.author;
        existingBook.genre = book.genre;
        existingBook.isread = book.read;
        existingBook.title = book.title;
        existingBook.id = id;
        return await this.save(existingBook);
      }else{
        return {error:{message:"Book with specified ID not found"}} as BookResponse;
      }
  
    }catch(err:unknown){
      return {error:err} as BookResponse;
    }
  }
}
