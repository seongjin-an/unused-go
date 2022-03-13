import {configure, mount} from "enzyme";
import React from "react";
import {List} from "../components/molecules/contents/list";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {QueryClient, QueryClientProvider} from "react-query";
import {createFakeProducts2} from "../mocks/createFakes";

const setup = <TOriginalProps extends {}>(WrappedComponent: React.FunctionComponent<TOriginalProps>, props: TOriginalProps) => {
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
            <WrappedComponent {...props} />
        </QueryClientProvider>
    )
    return {
        wrapper
    }
}
interface IListProps{
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

    it('should render exactly', async () => {
        const {wrapper} = setup<IListProps>(List, {listType: 'product'})
        expect(wrapper.find('ListItem')).toHaveLength(10)
        const listItems = wrapper.find('ListItem')
        listItems.forEach((item, index) => {
            // expect(item.text().includes('아령')).toBe(true)
            expect(item.text()).toContain('아령')
        })
        expect(listItems.get(0)).toHaveProperty('key', "0")
    })
})