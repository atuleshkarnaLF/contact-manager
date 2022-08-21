import http from "../api";
import { ContactResponse, CreateUser } from "../types/contact";
import config from "../config";

export async function createUser(
  payLoad: CreateUser
): Promise<ContactResponse> {
  const response = await http.post(config.endpoints.auth.signup, payLoad);

  return response?.data;
}
