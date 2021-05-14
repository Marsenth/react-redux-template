import React, { Fragment } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import CreateRoutes from '../../../router/components/CreateRoutes';

describe('Testing CreateRoutes', () => {
  const history = createMemoryHistory();
  const fakeRoutes = [
    {
      exact: true, path: '/route-one', component: Fragment,
    },
    {
      exact: true, path: '/route-two', component: Fragment, isPublic: true,
    },
  ];

  let container = null;

  beforeEach(() => {
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

  const renderTest = () => {
    act(() => {
      render(
        (
          <Router history={history}>
            <CreateRoutes routes={fakeRoutes} />
          </Router>
        ),
        container,
      );
    });
  };

  it('Render CreateRouter', () => {
    renderTest();
  });

  it('Matching with /test-one', () => {
    history.push('/test-one');
    renderTest();
  });

  it('Matching with /test-two', () => {
    history.push('/test-two');
    renderTest();
  });
});
