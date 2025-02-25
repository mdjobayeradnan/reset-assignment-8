import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToStoredInfo, addToWishlist } from "../../JS/ADDToLocal";

const BookDetailsPage = () => {
  
  const { bookId } = useParams();
  const data = useLoaderData();

  
  const book = data.find(item => item.bookId === parseInt(bookId));

  
  const handleMarkAsRead = () => {
    addToStoredInfo(bookId); 
    toast("Added to Read List! ✅");
  };


  const handleAddToWishlist = () => {
    addToWishlist(bookId); 
    toast("Added to Wishlist! "); 
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={book?.image}
            alt={book?.bookName}
            className="w-80 h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{book?.bookName}</h2>
          <p className="text-gray-600">by {book?.author}</p>
          <p><span className="font-semibold">Category:</span> {book?.category}</p>
          <p><span className="font-semibold">Review:</span> {book?.review}</p>
          <p><span className="font-semibold">Tags:</span> {book?.tags.join(", ")}</p>
          <p><span className="font-semibold">Total Pages:</span> {book?.totalPages}</p>
          <p><span className="font-semibold">Publisher:</span> {book?.publisher}</p>
          <p><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
          <p><span className="font-semibold">Rating:</span> ⭐ {book?.rating}</p>
          <div className="card-actions justify-end mt-4">
            <button onClick={handleMarkAsRead} className="btn btn-primary">
              Read
            </button>
            <button onClick={handleAddToWishlist} className="btn btn-secondary">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetailsPage;
