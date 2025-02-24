
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";


const BooksSection = () => {

    const [books,setBooks] = useState([])


     useEffect(() =>{

        fetch('/public/BooksDAta.json')
        .then(res => res.json())
        .then(data => setBooks(data))

     },[])
    return (
        <div className="">
        <h1 className="text-green-500 text-bold   w-[300px] mx-auto text-center text-5xl py-5">BOOKS:{books.length}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 w-[1200px] mx-auto">
        {
                    books.map(bookCard => <BookCard  bookCard={bookCard} key={bookCard.bookId}></BookCard>)
                
                }
        </div>
                  
              
                    
                
        </div>
    );
};

export default BooksSection;