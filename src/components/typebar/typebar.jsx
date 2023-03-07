import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../../data/context'
// import { categoriesData } from '../../data/typebardata'
import '../content/content.css'
import { TypebarItem } from './typebaritem'
import { getCategories } from '../../http/categoriesapi'

export const Typebar = () => {
const {CategoriesData} = useContext(Context)
// useEffect(() => {
//     getCategories().then(data => setCategoriesData(data.data))
//     console.log('render');
// }, [])
// console.log(CategoriesData);
  

 if(CategoriesData !== undefined) {
  return (
    CategoriesData.map(item => (
            <TypebarItem key={item.id} item={item}/>
            )
)
)
 } return <div>a</div>
}
