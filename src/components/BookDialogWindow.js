import React, {useRef} from 'react';
import {Modal} from "react-bootstrap";
import MyBtn from "./UI/MyBtn";
import {useDispatch, useSelector} from "react-redux";
import {deleteBook, saveEdit} from '../store/booksSlice'
import DropDown from "./DropDown";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const BookDialogWindow = (props) => {
    let book = useSelector(state => state.books.temp)
    const dispatch = useDispatch()
    const ref = useRef()
    const notify = () => {
        toast.error('Books is in Rent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    function test() {
        dispatch(saveEdit({id: book.bookId, value: ref.current.value}))
    }

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
                <textarea className={'w-100'} rows="10" defaultValue={book.bookDescription} ref={ref}></textarea>
                <br/>
                <br/>
                <DropDown/>
                <br/>
                <MyBtn name={'Delete'} onClick={() => {
                    if(book.count > 9) {
                        dispatch(deleteBook(book.bookId))
                    } else {
                        notify()
                    }
                }}/>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#1f1f1f'}}>
                <MyBtn onClick={() => {
                    props.onHide()
                    test()
                }}
                 name={'Save'} />
            </Modal.Footer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Modal>
    );
};

export default BookDialogWindow;