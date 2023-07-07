import instance from "./instance";

export const getAll = async () => {
    const res = await instance.get('/products');
    return res.data
}