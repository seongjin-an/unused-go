import axios from 'axios'
import {getCity, getPerson, ICity} from "./util/functionsUtil";
import * as api from "./util/functionsUtil";

jest.mock('axios')

describe('mock module test', () => {
    it('should mock module', async () => {
        const resp = {data: {name: 'ansj', age: 11}}
        axios.get = jest.fn().mockResolvedValue(resp)
        const axiosResponse = await getPerson()
        expect(axiosResponse).toEqual({name: 'ansj', age: 11})
    })
    it('should mock only one module', async () => {
        const mock = jest.spyOn(api, 'getCity')
        const city = {data: {name: 'pangyo', place: 'seongnam'}}
        mock.mockImplementation(() => new Promise<ICity>((resolve) => resolve({name: 'pangyo', place: 'seongnam'}) ))
        const axiosResponse = await getCity()
        expect(axiosResponse).toEqual({name: 'pangyo', place: 'seongnam'})
    })
})