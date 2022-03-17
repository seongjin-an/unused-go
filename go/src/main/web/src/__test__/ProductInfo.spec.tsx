import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {ProductInfo} from "../components/molecules/contents/product/ProductInfo";

const setup = <TOritinalProp extends {}>(WrappedComponent: React.FunctionComponent) => {
    const wrapper = mount(
        <WrappedComponent/>
    )
    return {wrapper}
}

describe('product info test', () => {
    beforeEach(() => {
        configure({adapter: new Adapter()})
    })
    it('should match snapshot', () => {
        const component = setup(ProductInfo)
        expect(component).toMatchSnapshot()
    })
    // it('should render exactly', () => {
    //     const {wrapper} = setup(ProductInfo)
    // })
})