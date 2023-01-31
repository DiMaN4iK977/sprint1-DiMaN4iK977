import React from 'react'
import { Outlet } from 'react-router-dom';
import { Typebar } from '../../components/typebar/typebar';
import { MyFooter } from '../../components/footer/footer';
import { MyHeader } from '../../components/header/header'
import './main-page.css'

export const Layout = () => 
   (
    <div>
        <MyHeader />
        <div className='book-container'>
            <div className='menu'>
                <Typebar />
            </div>
        <Outlet/>
        </div>
        <MyFooter />
    </div>
  )