import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetailes = () => {
  const {id} = useParams()
const Books=useLoaderData();
//  console.log('parci',Books)
 const expetBook = Books.find(Book=>Book.bookId== id);
//  console.log("expetBook",expetBook);
 const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expetBook;
 



  return (
   <div className="container mx-auto my-12 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-100 shadow-xl rounded-2xl p-8">

    {/* Left Side Image */}
    <div className="bg-gray-100 rounded-xl flex justify-center items-center p-6">
      <img
        src={image}
        alt={bookName}
        className="w-64 h-96 object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Right Side Details */}
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">{bookName}</h2>

      <p className="text-lg text-gray-600 font-medium">
        By : {author}
      </p>

      <hr />

      <p>
        <span className="font-semibold">Category :</span> {category}
      </p>

      <p className="leading-7 text-gray-600">
        <span className="font-semibold text-black">Review :</span> {review}
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="font-semibold">Tags :</span>

        {expetBook.tags?.map((tag, index) => (
          <span
            key={index}
            className="badge badge-success badge-outline"
          >
            #{tag}
          </span>
        ))}
      </div>

      <hr />

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Pages</span>
          <span className="font-bold">{totalPages}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Publisher</span>
          <span className="font-bold">{publisher}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Published</span>
          <span className="font-bold">{yearOfPublishing}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Rating</span>
          <span className="font-bold">⭐ {rating}</span>
        </div>
      </div>

      <div className="pt-5 flex gap-4">
        <button className="btn btn-outline">
          Wishlist
        </button>

        <button className="btn btn-success">
          Read
        </button>
      </div>
    </div>

  </div>
</div>
  );
};

export default BookDetailes;