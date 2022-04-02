import {getCity, getPerson, ICity} from "./util/functionsUtil";
import * as api from './util/functionsUtil'
const axios = require('axios')

jest.mock('axios')


describe('mock module test', () => {
    let mockFunction
    let spyFunction
    beforeEach(() => {

    })
    it('should mock module', async () => {
        const person = {data: {name: 'ansj', age: 11}}
        axios.get.mockResolvedValue(person)
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
    it('should call api', async () => {
        jest.clearAllMocks()
        const mock = jest.spyOn(api, 'getCity')
        const city = {data: {name: 'pangyo', place: 'seongnam'}}
        mock.mockImplementation(() => new Promise<ICity>((resolve) => resolve({name: 'pangyo', place: 'seongnam'}) ))
        await getCity()
        expect(mock).toBeCalled()
        expect(mock).toBeCalledTimes(1)
        expect(mock).toBeCalledWith(2)
    })
})