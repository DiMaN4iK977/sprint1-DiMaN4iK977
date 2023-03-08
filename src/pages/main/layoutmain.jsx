import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react'
import { Typebar } from '../../components/typebar/typebar';
import { Context } from '../../data/context';

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