/**
 * Application wide configuration.
 */
const API_VERSION = process.env.REACT_APP_API_VERSION;
const config = {
  env: process.env.NODE_ENV,
  appEnv: process.env.REACT_APP_ENV,
  basename: process.env.REACT_APP_BASE_NAME || "/",
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    auth: {
      login: `/${API_VERSION}/auth/login`,
      logout: `/${API_VERSION}/auth/logout`,
      refresh: `/${API_VERSION}/auth/refresh`,
    },
  },
};

export default config;
