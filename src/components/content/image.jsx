import React from 'react'
import { setStars } from '../../pages/book'

export const Image = ({rate}) => (
    setStars(rate).map(item => (
        <img key={item.id} src={`${item.image}`} alt=''/>
    ))
  )

