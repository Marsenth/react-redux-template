import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { mockReactReduxHooks } from '../__mocks__/hooks';
import MainLayout from '../../layouts/MainLayout';

describe('MainLAyout Container tests', () => {
  let container;

  beforeEach(() => {
    mockReactReduxHooks();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('MainLayout container render', () => {
    act(() => {
      render(<MainLayout/>, container);
    });
  });

  it('MainLayout menu item click', () => {
    const { getByRole } = render(<MainLayout/>, container);
    const menuItem = getByRole('menuitem');

    fireEvent.click(menuItem);
  });

  it('MainLayout header toggle click', () => {
    const { getByLabelText } = render(<MainLayout/>, container);
    const menuToggle = getByLabelText('menu-fold');

    fireEvent.click(menuToggle);
  });
});
