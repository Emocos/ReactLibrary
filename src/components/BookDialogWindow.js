import React from 'react';
import {Modal} from "react-bootstrap";
import MyBtn from "./UI/MyBtn";
import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from '../store/booksSlice'
import MyDropDown from "./DropDown";
const BookDialogWindow = (props) => {
    let book = useSelector(state => state.books.temp)
    const dispatch = useDispatch()

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{backgroundColor: '#1f1f1f'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {book.bookName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#1f1f1f'}}>
                <h4>{book.bookAuthor}</h4>
                <textarea cols="100" rows="10">{book.bookDescription}</textarea>
                <MyDropDown/>
                <MyBtn name={'Delete'} onClick={() => {
                    dispatch(deleteBook(book.bookId))
                }}/>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#1f1f1f'}}>
                <MyBtn onClick={props.onHide} name={'Save'} />
            </Modal.Footer>
        </Modal>
    );
};

export default BookDialogWindow;