import React, { useContext } from 'react'
// import { BookData } from '../../data/bookdata'
import { Context } from '../../data/context'
import { BookListItem } from './booklistitem'

export const Booklist = () => {
    const {BooksData} = useContext(Context)
    
    return (
    BooksData.map(item => (
        <BookListItem key={item.id} item={item} />
        )
    )
)
}
