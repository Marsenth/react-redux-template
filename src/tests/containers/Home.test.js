import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../../containers/Home';
import { GET_HOME_DATA } from '../../graphql/queries/home';

describe('Testing Home Component', () => {
  let container;
  let apolloClientMock;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    apolloClientMock = {
      request: {
        query: GET_HOME_DATA,
      },
    };
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Testing Home is render', () => {
    render(
      (
        <MockedProvider client={[apolloClientMock]}>
          <Home/>
        </MockedProvider>
      ),
      apolloClientMock,
    );
  });

  it('Testing Home with successfull apollo query', async () => {
    const expectedText = "Bienvenido a Mario's app!";

    await act(async () => {
      const successMock = {
        ...apolloClientMock,
        result: { data: { home: expectedText } },
      };

      render(
        (
          <MockedProvider client={[successMock]} addTypename={false}>
            <Home/>
          </MockedProvider>
        ),
        apolloClientMock,
      );

      await new Promise((resolve) => setTimeout(resolve, 0));

      const p = screen.getByText(expectedText);
      expect(p.textContent).toEqual(expectedText);
    });
  });

  // it('Testing Home with error apollo query', async () => {
  //   const expectedText = 'Ha ocurrido un error inesperado.';

  //   await act(async () => {
  //     const errorMock = {
  //       ...apolloClientMock,
  //       error: new Error(expectedText),
  //     };

  //     render(
  //       (
  //         <MockedProvider client={[errorMock]}>
  //           <Home/>
  //         </MockedProvider>
  //       ),
  //       apolloClientMock,
  //     );

  //     await new Promise((resolve) => setTimeout(resolve, 0));

  //     const p = screen.getByText(expectedText);
  //     expect(p.textContent).toEqual(expectedText);
  //   });
  // });
});
