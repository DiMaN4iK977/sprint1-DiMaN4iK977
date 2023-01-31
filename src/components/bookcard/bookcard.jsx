import React from 'react'
import { BookItem } from './bookitem'
import { BookData } from '../../data/bookdata'

export const BookCard = () => (
    BookData.map(item => (
        <BookItem key={item.id} item={item} />
        )
    )
)
