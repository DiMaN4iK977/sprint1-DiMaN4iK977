import { App } from "./imageblock"
import { BookData } from "../../data/bookdata"

export function noImage(id) {
let image = ''
if(BookData[id].image === undefined || BookData[id].image[0] === '/') {
     image =''
} 
return ''  
}