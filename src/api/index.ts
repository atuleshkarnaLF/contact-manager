import axios from "axios";

import config from "../config";

/**
 * Http axios instance with bearer_token inject interceptor
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
