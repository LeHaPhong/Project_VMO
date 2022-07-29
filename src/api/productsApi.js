import axiosClient from './axiosClient'

export const getListProduct = (id) => {
    const url = '/products'
    return axiosClient.get(url)
}

export const getProductDetail = (id) => {
  const url = `/products/${id}`
  return axiosClient.get(url)
}
