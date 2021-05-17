import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client/react';
import store from './redux/store';
import apolloClient from './graphql';
import AppRouter from './router';
import './static/styles/app.sass';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <div className="app">
          <AppRouter />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
