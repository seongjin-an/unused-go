import { configure, mount, render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { Header } from '../components/organisms/header/Header';

describe('header test~', () => {
  beforeEach(() => {
    console.log('=====moking test=====');

    configure({ adapter: new Adapter() });
  });
  afterEach(() => {
    console.log('=====done!=====');
  });
  it('should match snapshot Header', () => {
    const component = mount(<Header />);
    expect(component).toMatchSnapshot();
  });
});
