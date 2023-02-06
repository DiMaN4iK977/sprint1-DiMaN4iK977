import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { categoriesData } from '../../data/typebardata'
import '../content/content.css'
import { TypebarItem } from './typebaritem'

export const Typebar = ({open, setOpen}) => {
  const param =useParams()
  
 return (
            categoriesData.map(item => (
                    <TypebarItem param={param} open={open} setOpen={setOpen} key={item.id} item={item} />
                    )
  )
)
            }
