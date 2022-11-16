import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import {
  CreateBookInput,
  DeleteBookInput,
  GetBookArgs,
  UpdateBookInput,
} from './dto';
import { Book } from './models';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query(() => Book, { name: 'book', nullable: true })
  getBook(@Args() getBookArgs: GetBookArgs): Book {
    return this.bookService.getUser(getBookArgs);
  }

  @Query(() => [Book], { name: 'books', nullable: 'items' })
  getBooks(): Book[] {
    return this.bookService.getUsers();
  }

  @Mutation(() => Book)
  addBook(@Args('addBookData') createBookData: CreateBookInput): Book {
    return this.bookService.add(createBookData);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookData') updateBookData: UpdateBookInput): Book {
    return this.bookService.update(updateBookData);
  }

  @Mutation(() => Book)
  deleteBook(@Args('deleteBookData') deleteBookData: DeleteBookInput): Book {
    return this.bookService.delete(deleteBookData);
  }
}
