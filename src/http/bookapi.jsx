import { $host } from "."

export const getBook = async(id,item) => {
    const response = await $host.get(`api/book?branchId=${id}`)
    return response
}

export const getOne = async(id) => {
    const response = await $host.get(`api/book/${id}`)
    return response
}