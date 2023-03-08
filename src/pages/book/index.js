import dummy from '../../pictures/booksImage/dummy.png'
import iconStar from '../../pictures/Star 1 (2).png'
import Star from '../../pictures/Star 1.png'

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

export function setStars(rate) {
    const rating = []
    let index =1
    for(let i = 0; i < rate; i++) {
        rating.push({id: index, image: iconStar})
        index +=1
    }
    for(let i = 0; i < 5 - rate; i++) {
        rating.push({id: index, image: Star})
        index +=1
    }
    return rating
}