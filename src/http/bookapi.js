import { $host } from "."

export const getBook = async() => {
    const response = await $host.get('api/book')
    return response
}