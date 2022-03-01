import axios, {AxiosError, AxiosResponse} from "axios"
import {useQuery, UseQueryResult} from "react-query";
import {IProduct} from "../types/types";
import {createFakeProducts, createFakeProducts2} from "../mocks/createFakes";

const getProducts = () => axios.get('/products')

const getProducts2 = async () => {
    const {data} = await axios.get('/products')
    return data
}

export const useProducts = ():UseQueryResult<IProduct[], AxiosError> => {
    return useQuery({
        queryKey: ['getProducts'],
        queryFn: getProducts2,
        // placeholderData: createFakeProducts2(),
        suspense: true
    })
}