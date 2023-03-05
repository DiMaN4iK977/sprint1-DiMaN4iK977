import { useState, useMemo, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Content } from '../../components/content/content';
import { Root } from '../../components/root/root';
import { BookPage } from '../book/book-page';
import { Contract } from '../../components/contract/contract';
import { Layout } from './layout';
import './main-page.css'
import { LayoutMain } from './layoutmain';
import { Context } from '../../data/context';
import { getBook } from '../../http/bookapi';
import { getCategories } from '../../http/categoriesapi';

export const MainPage = () => {
const [list, setList] = useState(true)
// for burger-menu
const [opened, setOpened] = useState(true)
// for many-categories
const [open, setOpen] = useState(false)

const [BooksData, setBooksData] = useState([])
const [CategoriesData, setCategoriesData] = useState([])
const [activeCategory, setActiveCategory] = useState(1)

useEffect(() => {
    getBook(activeCategory).then(data => {
        setBooksData(data.data.rows)
    })
    getCategories().then(data => setCategoriesData(data.data))
}, [activeCategory])


const main = useMemo(() => ({
    BooksData, CategoriesData, activeCategory, setActiveCategory, 
}), [BooksData, CategoriesData, activeCategory, setActiveCategory])


return (
    <Context.Provider value={main}>
    <div className='container'>
        <Routes>
            <Route element={<Layout open={open} setOpen={setOpen} opened={opened} setOpened={setOpened}/>}>
                <Route element={<LayoutMain  open={open} setOpen={setOpen} opened={opened}/>}>
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
    </Context.Provider>

)
}