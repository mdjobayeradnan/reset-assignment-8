import { Link } from "react-router-dom";

const BookCard = ({ bookCard }) => {
    const {bookId,image,bookName,author,category,rating,tags} = bookCard
    return (
      <Link to ={`books/${bookId}`}>
        <div className="card bg-base-100 h-[500px] w-82 shadow-md">
            <figure>
                <img
                    src={bookCard.image}
                    alt={bookCard.bookName}
                    className="h-[580px] w-full object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg">
                    {bookCard.bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-sm text-gray-600">Author: {bookCard.author}</p>
                <p className="text-sm text-gray-600">Category: {bookCard.category}</p>
                <p className="text-yellow-500 text-sm">Rating: {bookCard.rating} ⭐</p>
                <div className="card-actions justify-center mt-2 flex-wrap gap-1">
                    {bookCard.tags.map((tag, index) => (
                        <div 
                            key={index} 
                            className="badge badge-outline badge-primary text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div></Link>
    );
};



export default BookCard;
