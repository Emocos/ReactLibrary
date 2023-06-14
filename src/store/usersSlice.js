import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            {
                userId: 1,
                userName: 'User1',
                booksCount: 0,
                books: []
            },
            {
                userId: 2,
                userName: 'User2',
                booksCount: 0,
                books: []
            },
            {
                userId: 3,
                userName: 'User3',
                booksCount: 0,
                books: []
            },
        ]
    },
    reducers: {
        editUser(state, action) {
            let user = state.users.find(user => user.userId === action.payload.userId)
            // user = action.payload
            console.log(user)
        },
        provideBook(state, action) {
            let user = state.users.find(user => user.userId === action.payload.userId)
            user.books.push(action.payload.bookName)
            user.booksCount++
            console.log(action.payload)
        }
    }
})

export const {editUser, provideBook} = usersSlice.actions
export default usersSlice.reducer