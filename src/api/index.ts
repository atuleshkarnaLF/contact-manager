import axios from "axios";

import config from "../config";

const accessToken = localStorage.getItem("accessToken");

const header: any = {
  "Content-Type": "application/json",
};
if (accessToken) {
  header["Authorization"] = `Bearer ${accessToken}`;
}
const http = axios.create({
  baseURL: config.baseURI,
  headers: header,
});

export default http;
