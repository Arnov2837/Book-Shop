
import { createBrowserRouter } from "react-router";

import MainLayOut from "../LayOut/MainLayOut";
import Book from "../Pages/Book";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import BookDetailes from "../Pages/BookDetailes";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/Book",
        element:<Book></Book>
      },
      {
        path:"/BookDetailes/:id",
        element:<BookDetailes></BookDetailes>,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement:<ErrorPage></ErrorPage>,
  }
]);
