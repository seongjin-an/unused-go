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
    it('should render exactly', () => {
        const {wrapper} = setup(ProductInfo)
        const userName = wrapper.find('.user_name')
        expect(userName.text()).toContain("안김안")
        const productInfoInput = wrapper.find('ProductInfoInput')
        expect(productInfoInput.at(0).props()).toHaveProperty('placeholder')
        const productInfoTitle = wrapper.find('.product_info_title')
        expect(productInfoTitle.at(0).text()).toContain('카테고리 선택')

    })
})