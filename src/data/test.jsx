import { useEffect, useState } from 'react';
import { getBook } from '../http/bookapi';

export function BookDatas() {
    const [datas, setData] = useState([])
    useEffect(() => {
        getBook().then(data => setData(data));
    }, [])
    
    return datas.data
}