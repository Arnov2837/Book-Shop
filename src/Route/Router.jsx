
import { createBrowserRouter } from "react-router";

import MainLayOut from "../LayOut/MainLayOut";
import Book from "../Pages/Book";
import Home from "../Pages/Home";


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
      }
    ],
  }
]);
