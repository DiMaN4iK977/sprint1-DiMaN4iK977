import { useContext } from 'react'
// import React from 'react'
import { BookItem } from './bookitem'
import { Context } from '../../data/context'
// import { BookData } from '../../data/bookdata'

export const BookCard = () => {
    const {BooksData} = useContext(Context)
    // const {pictures} = useContext(Context)
    // const books = BooksData.rows
    return (
    BooksData.map(item => (
        <BookItem key={item.id} item={item} />
        )
    )
)
}
