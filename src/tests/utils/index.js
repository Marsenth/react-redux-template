// Standar test functions
class ReducerTester {
  constructor ({ reducer, initialState }) {
    this.reducer = reducer;
    this.initialState = initialState;
  }

  testRequest ({ scope, type }) {
    expect(
      this.reducer(this.initialState, {
        type,
        data: {},
      }),
    ).toEqual({
      ...this.initialState,
      [scope]: {
        loading: true,
        error: null,
        data: null,
      },
    });
  }

  testSuccess ({ scope, type }) {
    expect(
      this.reducer(this.initialState, {
        type,
        data: {},
      }),
    ).toEqual({
      ...this.initialState,
      [scope]: {
        loading: false,
        error: null,
        data: {},
      },
    });
  }

  testError ({ scope, type }) {
    expect(
      this.reducer(this.initialState, {
        type,
        data: {},
      }),
    ).toEqual({
      ...this.initialState,
      [scope]: {
        loading: false,
        error: {},
        data: null,
      },
    });
  }
}

export default ReducerTester;
