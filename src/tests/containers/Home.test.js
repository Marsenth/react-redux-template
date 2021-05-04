import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../containers/Home';

describe('Testing Home Component', () => {
  it('Testing Home is rendering', () => {
    shallow(<Home/>);
  });
});
