import React from 'react';
import Book from "./Book";
import {useDispatch, useSelector} from "react-redux";
import {editBook} from "../store/booksSlice";

const BooksList = () => {
    const books = useSelector((state) => state.books.books)
    const dispatch = useDispatch()
    return (
        <div className={'d-flex flex-wrap gap-3'}>
            {books.map((item) =>
                <Book
                    id={item.bookId}
                    count={item.count}
                    name={item.bookName}
                    author={item.bookAuthor}
                    description={item.bookDescription}
                    key={item.bookId}
                    allData = {item}
                    editBook={() => dispatch(editBook(item))}
                />)
            }
        </div>
    );
};

export default BooksList;