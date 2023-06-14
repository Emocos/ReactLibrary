import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useDispatch, useSelector} from "react-redux";
import {provideBook} from "../store/usersSlice";
import {provideToUser} from "../store/booksSlice";

function BasicButtonExample() {
    const users = useSelector(state => state.users.users)
    const book = useSelector(state => state.books.temp)
    const {bookName, bookId, count} = book
    const dispatch = useDispatch()

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className={'btn btn-outline-light w-100 '}>
                Choose to provide book
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className={'btn btn-outline-light w-100 bg-dark'}>
                {users.map(user =>
                    <Dropdown.Item
                        onClick={() => {
                            let userId = user.userId
                            dispatch(provideBook({userId, bookName}))
                            dispatch(provideToUser({bookId, count}))
                        }}
                        key={user.userId}
                    >
                        {user.userName}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicButtonExample;