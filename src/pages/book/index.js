import dummy from '../../pictures/booksImage/dummy.png'

export function getImages(item) {
    // console.log(item);
    if(item.images.length > 3) {
        let value = JSON.stringify(item.images)
        value = JSON.parse(value)
        const arr = value.slice(1, value.length ).split(',')
        // console.log(arr);
        return arr
    } return ['0342252a-006d-49ed-b6e3-35bb4e1ec62d.jpg']
}

