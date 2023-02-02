import React from 'react'
import { BookData } from '../../data/bookdata'
import { BookListItem } from './booklistitem'

export const Booklist = () => (
    BookData.map(item => (
        <BookListItem key={item.id} item={item} />
        )
    )
)
