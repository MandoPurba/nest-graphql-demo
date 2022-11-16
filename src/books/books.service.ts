import { Injectable } from '@nestjs/common';
import { uid } from 'uid';
import {
  CreateBookInput,
  DeleteBookInput,
  GetBookArgs,
  UpdateBookInput,
} from './dto';
import { Book } from './models';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  public add(createBookData: CreateBookInput): Book {
    const bookId = uid(16);

    const book: Book = {
      bookId,
      ...createBookData,
    };
    this.books.push(book);
    return book;
  }

  public update(updateBookData: UpdateBookInput): Book {
    const book = this.books.find(
      (book) => book.bookId === updateBookData.bookId,
    );
    Object.assign(book, updateBookData);
    return book;
  }

  public getUser(getBookArgs: GetBookArgs): Book {
    return this.books.find((book) => book.bookId === getBookArgs.bookId);
  }

  public getUsers(): Book[] {
    return this.books;
  }

  public delete(deleteBookData: DeleteBookInput): Book {
    const bookIndex = this.books.findIndex(
      (book) => book.bookId === deleteBookData.bookId,
    );
    const book = this.books[bookIndex];
    this.books.splice(bookIndex);
    return book;
  }
}
