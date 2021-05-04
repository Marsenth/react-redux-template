import React from 'react';
import { mount } from 'enzyme';
import { mockMatchMedia } from '../../__mocks__/window';
import App from '../../../App';
import CreateRoutes from '../../../router/components/CreateRoutes';

describe('Testing CreateRoutes', () => {
  mockMatchMedia();

  const routesWrapper = mount(<App/>).find(CreateRoutes).first();

  it('Testing Routes Wrapper existance', () => {
    expect(routesWrapper.exists()).toBe(true);
  });
});
