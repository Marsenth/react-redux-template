import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
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
});
