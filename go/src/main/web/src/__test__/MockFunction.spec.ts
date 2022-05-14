// import axios from "axios";
import Users from './util/user';

const axios = require('axios');

jest.mock('axios');
export {};
function forEach(items: any[], callback: Function) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe('mock test', () => {
  it('should use a mock function', function () {
    // To test this function, we can use a mock function,
    // and inspect the mock's state to ensure the callback is invoked as expected.
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The return value of the second call to the function was 43
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  it('should mock property', () => {
    const myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances); // > [ <a>, <b> ]

    const someMockFunction = jest.fn((x: string, y: string): string => `arg1: ${x} / arg2: ${y}`);
    someMockFunction('first arg', 'second arg');
    // someMockFunction('1st arg', '2nd arg')

    // The function was called exactly once
    expect(someMockFunction.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

    // The return value of the first call to the function was 'return value'
    //         expect(someMockFunction.mock.results[0].value).toBe('return value');
    expect(someMockFunction.mock.results[0].value).toBe('arg1: first arg / arg2: second arg');

    // This function was instantiated exactly twice
    expect(someMockFunction.mock.instances.length).toBe(1);

    const MockConstructor = jest.fn();
    const a2 = new MockConstructor();
    const b2 = new MockConstructor();
    expect(MockConstructor.mock.instances).toHaveLength(2);
    expect(MockConstructor.mock.instances[0]).toBe(a2);
    expect(MockConstructor.mock.instances[1]).toBe(b2);

    const SomeMockFunction2 = jest.fn((_name: string): { name2: string } => ({
      name2: _name,
    }));
    const a3 = new SomeMockFunction2('a3');
    const b3 = new SomeMockFunction2('b3');
    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    // expect(someMockFunction.mock.instances[0].name).toEqual('test');
    expect(SomeMockFunction2.mock.results[0].value).toBe(a3);
    expect(SomeMockFunction2.mock.results[1].value).toBe(b3);

    // The first argument of the last call to the function was 'test'
    // expect(someMockFunction.mock.lastCall[0]).toBe('test');
  });

  it('should mock return value', () => {
    const myMock = jest.fn();

    console.log(myMock());
    // > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true

    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls[0][0]); // 11
    console.log(filterTestFn.mock.calls[1][0]); // 12
  });

  it('should mock modules', () => {
    // jest.mock('axios', () => {
    //     return {
    //         create: jest.fn(() => ({
    //             get: jest.fn().mockResolvedValue({ data: {} }),
    //             interceptors: {
    //                 request: { use: jest.fn(), eject: jest.fn() },
    //                 response: { use: jest.fn(), eject: jest.fn() },
    //             },
    //         })),
    //     };
    // });
    // axios.get.mockResolvedValue({ data: 'mock data' });
    axios.get.mockResolvedValue(1);
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    // axios.get = jest.fn().mockResolvedValue('')

    const mock = jest.spyOn(axios, 'get');
    mock.mockImplementation(() => Promise.resolve({ data: 1 }));
    const result = axios.get('/json');
    // result.then(i => console.log(i.data))

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
  });
});
