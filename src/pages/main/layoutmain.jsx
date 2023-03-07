import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Context } from '../../data/context'
import { Typebar } from '../../components/typebar/typebar'

export const LayoutMain = () => {
  const {opened} = useContext(Context)
  
  return (
    <div className='book-container'>
        <div className={opened ? 'menu' : 'menu opened'}>
                <Typebar/>
                <div className='menu-for-divices'> 
                    <div className='profile'>Профиль</div>
                    <div className='in-out'>Выход</div>
                </div>
        </div>
        <Outlet />
    </div>
  )
}
