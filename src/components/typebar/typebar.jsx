import React, { useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../../data/context'
// import { categoriesData } from '../../data/typebardata'
import '../content/content.css'
import { TypebarItem } from './typebaritem'

export const Typebar = () => {
  const {CategoriesData} = useContext(Context)
  // const [branches, setBranches] = useState([])
 if(CategoriesData !== undefined) {
  return (
    CategoriesData.map(item => (
            <TypebarItem key={item.id} item={item}/>
            )
)
)
 } return <div>a</div>
}
