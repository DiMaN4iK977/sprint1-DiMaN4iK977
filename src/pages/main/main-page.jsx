import { useState, useMemo, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Content } from '../../components/content/content';
import { Root } from '../../components/root/root';
import { BookPage } from '../book/book-page';
import { Contract } from '../../components/contract/contract';
import { Layout } from './layout';
import './main-page.css'
import { Context } from '../../data/context';
import { getBook } from '../../http/bookapi';
import { getCategories } from '../../http/categoriesapi';
import { LayoutMain } from './layoutmain';
import { fetchBranch } from '../../http/branchapi';

export const MainPage = () => {
const [list, setList] = useState(true)
// for burger-menu
const [opened, setOpened] = useState(true)
// for many-categories
// const [open, setOpen] = useState(false)

const [BooksData, setBooksData] = useState([])
const [activeCategory, setActiveCategory] = useState()
const [CategoriesData, setCategoriesData] = useState([])
const [branches, setBranches] = useState([])
const [selectedItem, setSelectedItem] = useState('Сортировать по...')

// const [item, setItem] = useState

useEffect(() => {
    getBook(activeCategory).then(data => {setBooksData(data.data.rows)})
    getCategories().then(data => setCategoriesData(data.data))
    fetchBranch().then(data => {setBranches(data.data)})
    // console.log('render');
}, [activeCategory])

const main = useMemo(() => ({
    BooksData, activeCategory, setActiveCategory, opened, setOpened, CategoriesData, branches, setSelectedItem, selectedItem 
}), [BooksData,  activeCategory, setActiveCategory, opened, setOpened, CategoriesData, branches, setSelectedItem, selectedItem])



return (
    <Context.Provider value={main}>
    <div className='container'>
        <Routes>
                <Route element={<Layout/>}>
                    <Route element={<LayoutMain/>}>
                        <Route path='/' element={<Navigate to='/books/all'/>}/>
                        <Route path='/books/:category' element={<Content list={list} setList={setList}/>}/>
                        <Route path='/root' element={<Root/>}/>
                        <Route path='/contract' element={<Contract/>}/>
                        <Route path='*'  element={<Navigate to='books/all'/>} />
                    </Route>
                    <Route path='/books/:categories/:id' element={<BookPage />}/>  
                </Route>
        </Routes>
    </div>
    </Context.Provider>

)
}