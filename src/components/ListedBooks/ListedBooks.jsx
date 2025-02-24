

import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadInfo, getStoredWishlist } from '../../JS/ADDToLocal';
import BookCard from '../BookCard/BookCard';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const listBook = useLoaderData();


    useEffect(() => {

        const StoreReadInfo = getStoreReadInfo();
        const StoreReadInfoInt = StoreReadInfo.map(id => parseInt(id));
        const readListBook = listBook.filter(book => 
            StoreReadInfoInt.includes(book.bookId)
        );
        setReadList(readListBook);

    
        const storedWishlist = getStoredWishlist();
        const wishlistInt = storedWishlist.map(id => parseInt(id));
        const wishListBook = listBook.filter(book => 
            wishlistInt.includes(book.bookId)
        );
        setWishList(wishListBook);
    }, [listBook]);  

    return (

        
     <Link to="/listedBooks">
        <div className="p-4">
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-xl font-bold mb-4">Read List ({readList.length})</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            readList.map(bookCard => (
                                <BookCard key={bookCard.bookId} bookCard={bookCard} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-xl font-bold mb-4">Wish List ({wishList.length})</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            wishList.map(bookCard => (
                                <BookCard key={bookCard.bookId} bookCard={bookCard} />
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div></Link>
    );
};

export default ListedBooks;
