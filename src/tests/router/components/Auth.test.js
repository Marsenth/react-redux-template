import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { initialState } from '../../../redux/reducers/auth';
import { mockReactRouterHooks, mockReactReduxHooks } from '../../__mocks__/hooks';
import Auth from '../../../router/components/Auth';

describe('Testing Auth Component', () => {
  let container = null;
  let reactReduxHooks = {};

  const selectorStateMock = {
    auth: { ...initialState },
  };

  beforeEach(() => {
    mockReactRouterHooks();
    reactReduxHooks = mockReactReduxHooks();
    reactReduxHooks.spyOnUseSelector.mockReturnValue({ ...selectorStateMock });

    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    localStorage.setItem('token', '');
  });

  const renderAuthComponentTest = () => {
    act(() => {
      render(
        <Auth>
          <div/>
        </Auth>,
        container,
      );
    });
  };

  it('Render Auth Component', () => {
    renderAuthComponentTest();
  });

  it('Render Auth with LOGIN.data', () => {
    reactReduxHooks.spyOnUseSelector.mockReturnValue({
      ...selectorStateMock, auth: { ...selectorStateMock.auth, LOGIN: { data: {} } },
    });

    renderAuthComponentTest();
  });

  it('Render Auth with token on localStorage', () => {
    localStorage.setItem('token', '123');
    renderAuthComponentTest();
  });

  it('Render Auth with AUTH.data and on out of scope route', () => {
    reactReduxHooks.spyOnUseSelector.mockReturnValue({
      ...selectorStateMock, auth: { ...selectorStateMock.auth, AUTH: { data: {} } },
    });

    renderAuthComponentTest();
  });

  it('Render Auth with AUTH.error and on out of /login route', () => {
    reactReduxHooks.spyOnUseSelector.mockReturnValue({
      ...selectorStateMock, auth: { ...selectorStateMock.auth, AUTH: { error: {} } },
    });

    renderAuthComponentTest();
  });

  it('Render Auth Component', () => {
    reactReduxHooks.spyOnUseSelector.mockReturnValue({
      ...selectorStateMock, auth: { ...selectorStateMock.auth, AUTH: { loading: true } },
    });

    renderAuthComponentTest();
  });
});
