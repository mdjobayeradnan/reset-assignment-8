// src/components/ListedBooks/ListedBooks.jsx

import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadInfo } from '../../JS/ADDToLocal';
import BookCard from '../BookCard/BookCard';



const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const listBook = useLoaderData();

    useEffect(() => {
        const StoreReadInfo = getStoreReadInfo();
        const StoreReadInfoInt = StoreReadInfo.map(id => parseInt(id));
        const readListBook = listBook.filter(book => 
            StoreReadInfoInt.includes(book.bookId)
        );
        setReadList(readListBook);
    }, []); 

    return (
        <div className="p-4">
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-xl font-bold mb-4">Read List{readList.length}
                        {
                            readList.map(bookCard => <BookCard key={bookCard.id} bookCard={bookCard}></BookCard>)
                        }
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-xl font-bold mb-4">Wish List</h2>
                    <p>Any content 2</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
