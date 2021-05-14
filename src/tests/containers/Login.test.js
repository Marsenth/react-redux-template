import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import { mockMatchMedia } from '../__mocks__/window';
import { mockReactReduxHooks } from '../__mocks__/hooks';
import { initialState } from '../../redux/reducers/auth';
import Login from '../../containers/Login';

describe('Login Container tests', () => {
  const authStateMock = { auth: { ...initialState } };
  let reduxHooksMock;
  let container;

  beforeEach(() => {
    mockMatchMedia();
    reduxHooksMock = mockReactReduxHooks();
    reduxHooksMock.spyOnUseSelector.mockReturnValue({ ...authStateMock });
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Login container render', () => {
    act(() => {
      render(<Login/>, container);
    });
  });

  it('Login error with title and content', () => {
    reduxHooksMock.spyOnUseSelector.mockReturnValue({
      ...authStateMock,
      auth: {
        ...authStateMock.auth,
        LOGIN: {
          ...authStateMock.auth.LOGIN,
          error: { name: 'Error', message: 'Error content' },
        },
      },
    });

    act(() => {
      render(<Login/>, container);
    });
  });

  it('Login error without content', () => {
    reduxHooksMock.spyOnUseSelector.mockReturnValue({
      ...authStateMock,
      auth: {
        ...authStateMock.auth,
        LOGIN: {
          ...authStateMock.auth.LOGIN,
          error: { name: 'Error' },
        },
      },
    });

    act(() => {
      render(<Login/>, container);
    });
  });

  it('Login error by default', () => {
    reduxHooksMock.spyOnUseSelector.mockReturnValue({
      ...authStateMock,
      auth: {
        ...authStateMock.auth,
        LOGIN: {
          ...authStateMock.auth.LOGIN,
          error: {},
        },
      },
    });

    act(() => {
      render(<Login/>, container);
    });
  });

  it('Login submit with data', () => {
    const { getByText } = render(<Login/>, container);
    fireEvent.click(getByText('Submit'));
  });

  it('Login submit without data', () => {
    const { getByTestId, getByText } = render(<Login/>, container);
    const usernameInput = getByTestId('login_username_input');
    const passwordInput = getByTestId('login_password_input');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'mario' } });
    fireEvent.change(passwordInput, { target: { value: 'mario123' } });
    fireEvent.click(submitButton);
  });
});
