import {configure, mount} from "enzyme";
import React from "react";
import {List} from "../components/molecules/contents/list";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {QueryClient, QueryClientProvider} from "react-query";
import {createFakeProducts2} from "../mocks/createFakes";
import {BrowserRouter, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {ModalContextProvider} from "../contexts/modalContext";

const setup = <TOriginalProps extends {}>(WrappedComponent: React.FunctionComponent<TOriginalProps>, props?: TOriginalProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: false,
                placeholderData: createFakeProducts2()
            },
        },
    })
    const wrapper = mount(
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props!} />
        </QueryClientProvider>
    )
    return {
        wrapper
    }
}

interface IListProps {
    listType: 'product' | 'community'
}

describe("list test", () => {

    beforeEach(() => {
        configure({adapter: new Adapter()})
    })

    it("should match snapshot", () => {
        const component = setup<IListProps>(List, {listType: "product"})
        expect(component).toMatchSnapshot()
    })

    it('should render exactly', () => {
        const {wrapper} = setup<IListProps>(List, {listType: 'product'})
        console.log('wrapper:', wrapper)
        expect(wrapper.find('ListItem')).toHaveLength(10)
        const listItems = wrapper.find('ListItem')
        listItems.forEach((item, index) => {
            // expect(item.text().includes('아령')).toBe(true)
            expect(item.text()).toContain('아령')
            expect(item.text()).toContain('10,000원')
        })
        expect(listItems.get(0)).toHaveProperty('key', "0")
        expect(listItems.get(1)).toHaveProperty('key', '1')
        expect(listItems.get(1).props).toHaveProperty('listType', 'product')

        expect(wrapper.find('ListItem').length).toBe(10)
        expect(wrapper.find('ListItem').at(0).find("div").length).toBe(5)
        expect(wrapper.find('ListItem').at(0).find('div').get(0).props).toHaveProperty('children')//get, at, childAt 구별이 까다로움
        expect(wrapper.find('ListItem').at(0).find('div').at(0).childAt(0).props()).toHaveProperty('active')
        expect(wrapper.find('ListItem').at(0).find('div').at(0).childAt(1).props()).toHaveProperty('children', '아령')
        //get은 element를 반환함, at은 wrapper를 반환함..
    })
})