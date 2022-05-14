import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { TopSearch } from '../components/molecules/header';

describe('TopSearch test~', () => {
  beforeEach(() => {
    console.log('=====moking test=====');
    configure({ adapter: new Adapter() });
  });
  afterEach(() => {
    console.log('=====done!=====');
  });
  it('should match snapshot Logo', () => {
    const handleCloseButton = jest.fn();
    const component = mount(<TopSearch isSearchShow handleCloseSearch={handleCloseButton} />);
    expect(component).toMatchSnapshot();
  });
  it('should render recent items', () => {
    const handleCloseButton = jest.fn();
    const component = mount(<TopSearch isSearchShow handleCloseSearch={handleCloseButton} />);
    const recentItems = component.find('RecentItem');
    expect(recentItems.length).toBe(5);
    const searchInput = component.find('SearchInput');
    const searchButton = component.find('SearchButton');
    searchInput.simulate('change', { target: { value: 'ansj' } });
    searchButton.simulate('click');
  });
});
