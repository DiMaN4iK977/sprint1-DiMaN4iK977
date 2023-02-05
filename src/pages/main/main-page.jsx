import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Content } from '../../components/content/content';
import { Root } from '../../components/root/root';
import { BookPage } from '../book';
import { Contract } from '../../components/contract/contract';
import { Layout } from './layout';
import './main-page.css'
import { LayoutMain } from './layoutmain';


export const MainPage = () => {
const [list, setList] = useState(true)
// for burger-menu
const [opened, setOpened] = useState(true)
// for many-categories
const [open, setOpen] = useState(false)
// console.log(open);
// const location = '/books/all'
// const [location, setLocation] = useState('books/all')


return (
    <div className='container'>
        <Routes>
            <Route element={<Layout open={open} setOpen={setOpen} opened={opened} setOpened={setOpened}/>}>
                <Route element={<LayoutMain open={open} setOpen={setOpen} opened={opened}/>}>
                    <Route path='/' element={<Navigate to='/books/all'/>}/>
                    <Route path='/books/:category' element={<Content list={list} setList={setList}/>}/>
                    <Route path='/root' element={<Root/>}/>
                    <Route path='/contract' element={<Contract/>}/>
                    <Route path='*'  element={<Navigate to='books/all'/>} />
                </Route>
                <Route path='/books/:categories/:id' element={<BookPage open={open} setOpen={setOpen} opened={opened}/>}/>  
            </Route>
        </Routes>
    </div>
)
}