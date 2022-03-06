import {configure, mount} from "enzyme";
import React from "react";
import {List} from "../components/molecules/contents/list";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {QueryClient, QueryClientProvider} from "react-query";

const setup = <TOriginalProps extends {}>(WrappedComponent: React.FunctionComponent<TOriginalProps>, props: TOriginalProps) => {
    const queryClient = new QueryClient()
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
})