import React, { useContext } from 'react'
// import { BookData } from '../../data/bookdata'
import { Context } from '../../data/context'
import { BookListItem } from './booklistitem'

export const Booklist = () => {
    const bookData = useContext(Context)
    return (
    bookData.map(item => (
        <BookListItem key={item.id} item={item} />
        )
    )
)
}
