/**
 * Application wide configuration.
 */
const config = {
  env: process.env.NODE_ENV,
  appEnv: process.env.REACT_APP_ENV,
  basename: process.env.REACT_APP_BASE_NAME || "/",
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    auth: {
      login: `/auth/login`,
      logout: `/auth/logout`,
    },
    contact: {
      contact: `/contacts`,
    },
  },
};

export default config;
