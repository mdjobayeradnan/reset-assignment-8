import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';

import Home from './components/Home/Home';
import BookDetailsPage from './components/BookDetailsPage/BookDetailsPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Inspiring from './components/Inspiring/Inspiring ';
import Review from './components/Review/Review';
import PagesToRead from './components/PageReadList/PageReadList';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetailsPage></BookDetailsPage>,
        loader:() =>fetch('/public/BooksDAta.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('/public/BooksDAta.json')
      },
      {
        path:"/pages",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'inspiring',
        element:<Inspiring></Inspiring>
      },
      {
        path:'/review',
        element:<Review></Review>
      }
     
    ]

    
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
     />
       <ToastContainer />
  </StrictMode>,
)
