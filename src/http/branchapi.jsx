import { $host } from "."

export const fetchBranch = async(id) => {
    const response = await $host.get(`api/branch?categoryId=${id}`)
    return response
}