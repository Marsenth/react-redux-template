import React from 'react';
import { mount } from 'enzyme';
import { mockMatchMedia } from '../../__mocks__/window';
import App from '../../../App';
import Auth from '../../../router/components/Auth';

describe('Testing Auth Component', () => {
  mockMatchMedia();

  const authWrapper = mount(<App/>).find(Auth).first();

  it('Testing Auth Component existance', () => {
    expect(authWrapper.exists()).toBe(true);
  });
});
