import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Testing App Component', () => {
  it('Testing App is rendering', () => {
    shallow(<App/>);
  });
});
