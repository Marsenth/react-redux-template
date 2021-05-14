import * as reactRedux from 'react-redux';

export default () => {
  // Mock useSelector hook
  const spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
  spyOnUseSelector.mockReturnValue({});

  // Mock useDispatch hook
  const spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
  // Mock dispatch function returned from useDispatch
  const mockDispatch = jest.fn();
  spyOnUseDispatch.mockReturnValue(mockDispatch);

  return {
    spyOnUseSelector,
    spyOnUseDispatch,
  };
};
