import React, { use } from "react";
import { FaStar } from "react-icons/fa";

// যদি booksData.json public ফোল্ডারে থাকে
const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className="my-12">
      <h2 className="font-bold text-3xl text-center">Books</h2>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.bookId} className="card bg-base-100 shadow-sm">
            <figure className="p-6">
              <img
                className="rounded-xl h-[200px] w-full object-cover"
                src={book.image}
                alt={book.bookName}
              />
            </figure>

            <div className="card-body">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {book.tags?.map((tag, index) => (
                  <p
                    key={index}
                    className="badge bg-green-200 text-green-600 font-bold"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              {/* Book Name */}
              <h2 className="card-title">{book.bookName}</h2>

              {/* Author */}
              <p className="font-semibold text-lg">
                BY: {book.author}
              </p>

              {/* Category & Rating */}
              <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-3">
                <div className="font-semibold">
                  {book.category}
                </div>

                <div className="flex items-center gap-1">
                  {book.rating}
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;