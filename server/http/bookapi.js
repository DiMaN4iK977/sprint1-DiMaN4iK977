import { $host } from ".";

export const getBook = async() => {
    const response = await $host.post('api/book')
    return response
}