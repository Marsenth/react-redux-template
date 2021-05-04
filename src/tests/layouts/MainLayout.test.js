import React from 'react';
import { mount } from 'enzyme';
import { mockMatchMedia } from '../__mocks__/window';
import App from '../../App';
import MainLayout from '../../layouts/MainLayout';

describe('Testing MainLayout', () => {
  mockMatchMedia();

  const routesWrapper = mount(<App/>).find(MainLayout).first();

  it('Testing MainLayout Wrapper existance', () => {
    expect(routesWrapper.exists()).toBe(true);
  });
});
