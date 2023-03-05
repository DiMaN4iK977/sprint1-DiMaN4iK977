import { $host } from "."

export const getCategories = async() => {
    const response = await $host.get('api/categories')
    return response
}

// export const getOne = async(id) => {
//     const response = await $host.get(`api/book/${id}`)
//     return response
// }