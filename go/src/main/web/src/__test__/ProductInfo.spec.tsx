import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ProductInfo } from '../components/molecules/contents/product/ProductInfo';

const setup = <TOritinalProp extends {}>(WrappedComponent: React.FunctionComponent) => {
  const wrapper = mount(<WrappedComponent />);
  return { wrapper };
};

describe('product info test', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });
  it('should match snapshot', () => {
    const component = setup(ProductInfo);
    expect(component).toMatchSnapshot();
  });
  it('should render exactly', () => {
    const { wrapper } = setup(ProductInfo);
    const userName = wrapper.find('.user_name');
    expect(userName.text()).toContain('안김안');
    const productInfoInput = wrapper.find('ProductInfoInput');
    expect(productInfoInput.length).toBe(4);
    expect(productInfoInput.at(0).props()).toHaveProperty('placeholder');
    const productInfoTitle = wrapper.find('.product_info_title');
    expect(productInfoTitle.at(0).text()).toContain('카테고리 선택');
    const selectInput = wrapper.find('SelectInput');
    expect(selectInput.length).toBe(3);
    const colorBlocks = wrapper.find('ColorBlock');
    expect(colorBlocks.length).toBe(14);
    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(3);
    const saveButtons = wrapper.find('SaveButton');
    expect(saveButtons.length).toBe(2);
  });

  it('should simulate exactly', async () => {
    const { wrapper } = setup(ProductInfo);
    let colorBlocks = wrapper.find('ColorBlock');
    expect(colorBlocks.at(0).props()).toHaveProperty('type', 'white');
    expect(colorBlocks.at(0).props()).toHaveProperty('active', false);
    // colorBlocks.at(0).simulate('click')\
    colorBlocks.at(0).simulate('click');
    colorBlocks = wrapper.find('ColorBlock'); // The issue was being caused from referring to the existing const content created at the top of the test, which became stale after the update. Changing the test suite to:
    expect(colorBlocks.at(0).props()).toHaveProperty('active', true); // https://stackoverflow.com/questions/51085691/simulating-a-click-on-react-with-enzyme-not-doing-anything
    colorBlocks.at(1).simulate('click');
    colorBlocks = wrapper.find('ColorBlock');
    expect(colorBlocks.at(0).props()).toHaveProperty('active', false);
    expect(colorBlocks.at(1).props()).toHaveProperty('active', true);

    // wrapper.find('SaveButton').at(0).simulate('change', {target: {value: 'imsi11'}})
  });
});
