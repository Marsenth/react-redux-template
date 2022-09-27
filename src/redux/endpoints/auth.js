const baseURL = process.env.REACT_APP_API_SERVER;

export default {
  AUTH: `${baseURL}/auth/me`,
  LOGIN: `${baseURL}/auth/login`
};
