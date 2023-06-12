import React from 'react';
import Book from "./Book";
import {useSelector} from "react-redux";

const BooksList = () => {
        const books = useSelector((state) => state.books)
        console.log(books)
    return (
        <div className={'d-flex flex-wrap gap-3'}>
                {books.map((item) =>
                    <Book
                        id={item.bookId}
                        count={item.count}
                        name={item.bookName}
                        author={item.bookAuthor}
                        description={item.bookDescription}
                    />)
                }
        </div>
    );
};

export default BooksList;