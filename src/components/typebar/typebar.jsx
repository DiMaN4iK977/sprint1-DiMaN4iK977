import React from 'react'
import { NavLink } from 'react-router-dom'
import { categoriesData } from '../../data/typebardata'
import '../content/content.css'
import { TypebarItem } from './typebaritem'

export const Typebar = ({open, setOpen}) => 
  // console.log(open);
  (
            categoriesData.map(item => (
                    <TypebarItem open={open} setOpen={setOpen} key={item.id} item={item} />
                    )
  )
)
