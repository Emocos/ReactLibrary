import React from 'react';
import {Modal} from "react-bootstrap";
import MyBtn from "./UI/MyBtn";
import {useDispatch} from "react-redux";
import {returnBookFromUser} from "../store/usersSlice";
import {returnBookToLibrary} from "../store/booksSlice";

const UserDialogWindow = (props) => {
    const user = props.user
    const userId = user.userId
    const dispatch = useDispatch()

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{backgroundColor: '#1f1f1f'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {user.userName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#1f1f1f'}}>
                    <h2>Books in rent: {user.booksCount}</h2>
                    <h2>Return books:</h2>
                    {user.booksCount ?
                        user.books.map(book => <MyBtn name={book} key={book} onClick={() => {
                            dispatch(returnBookFromUser({userId, book}))
                            dispatch(returnBookToLibrary(book))
                        }}/>) : ''
                    }
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: '#1f1f1f'}}>
                    <MyBtn onClick={props.onHide} name={'Save'} />
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserDialogWindow;