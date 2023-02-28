import { useContext } from 'react'
// import React from 'react'
import { BookItem } from './bookitem'
import { Context } from '../../data/context'
// import { BookData } from '../../data/bookdata'

export const BookCard = () => {
    const bookData = useContext(Context)
    // console.log(bookData);
    return (
    bookData.map(item => (
        <BookItem key={item.id} item={item} />
        )
    )
)
}
