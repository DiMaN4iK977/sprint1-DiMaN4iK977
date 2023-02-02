import React from 'react'
import { NavLink } from 'react-router-dom'
import { categoriesData } from '../../data/typebardata'
import '../content/content.css'
import { TypebarItem } from './typebaritem'

export const Typebar = () => (
            categoriesData.map(item => (
                    <TypebarItem key={item.id} item={item} />
                    )
        
  )
)
