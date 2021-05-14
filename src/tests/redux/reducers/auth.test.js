import reducer, { initialState } from '../../../redux/reducers/auth';
import ReducerTester from '../../utils/index';

describe('Auth reducer', () => {
  const reducerTester = new ReducerTester({ reducer, initialState });

  it('Auth reducer initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Auth LOGIN dispatcher', () => {
    reducerTester.testRequest({ type: 'LOGIN', scope: 'LOGIN' });
  });

  it('Auth LOGIN_SUCCESS dispatcher', () => {
    reducerTester.testSuccess({ type: 'LOGIN_SUCCESS', scope: 'LOGIN' });
  });

  it('Auth LOGIN_ERROR dispatcher', () => {
    reducerTester.testError({ type: 'LOGIN_ERROR', scope: 'LOGIN' });
  });

  it('Auth AUTH dispatcher', () => {
    reducerTester.testRequest({ type: 'AUTH', scope: 'AUTH' });
  });

  it('Auth AUTH_SUCCESS dispatcher', () => {
    reducerTester.testSuccess({ type: 'AUTH_SUCCESS', scope: 'AUTH' });
  });

  it('Auth AUTH_ERROR dispatcher', () => {
    reducerTester.testError({ type: 'AUTH_ERROR', scope: 'AUTH' });
  });

  it('Auth LOGOUT dispatcher', () => {
    expect(
      reducer(initialState, {
        type: 'LOGOUT',
      }),
    ).toEqual({
      ...initialState,
    });
  });
});
