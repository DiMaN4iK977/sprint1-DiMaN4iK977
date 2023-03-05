import React, { useState, useEffect } from 'react'
import { getBook } from '../../http/bookapi'

export const Subsection = ({child}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        getBook(child.id).then(data => {
            setCount(data.data.count)
        })
    }, [child.id]) 
  if(child.id !== 1) {
  return (
    <div>
        <span className='category-name'>{child.name}</span>
        <span className='count'>{count}</span>
    </div>
  )
  }
  return  <span className='category-name'>{child.name}</span>

}
