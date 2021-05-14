import reactRouter from 'react-router';

export default () => {
  // Mock useHistory hook
  const useHistoryMock = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  const spyOnUseHistory = jest.spyOn(reactRouter, 'useHistory');
  spyOnUseHistory.mockReturnValue(useHistoryMock);
  // Mock useHistory hook
  const useLocationMock = {
    pathname: '/',
  };

  const spyOnUseLocation = jest.spyOn(reactRouter, 'useLocation');
  spyOnUseLocation.mockReturnValue(useLocationMock);

  return {
    spyOnUseHistory,
    spyOnUseLocation,
  };
};
