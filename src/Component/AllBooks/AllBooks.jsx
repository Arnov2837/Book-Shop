import React, { use } from "react";
import BookCart from "../Sheard/ui/BookCart";



// যদি booksData.json public ফোল্ডারে থাকে
const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className="my-12">
          <h2 className="font-bold text-3xl text-center">Books</h2>
    
          <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book,ind) => {
              return <BookCart key={ind}book={book}></BookCart>
            })}
          </div>
        </div>
  );
};

export default AllBooks;