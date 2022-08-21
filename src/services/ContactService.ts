import http from "../api";
import { Contact, CreateContact } from "../types/contact";
import config from "../config";

export async function fetchAllContacts(): Promise<Contact[]> {
  const response = await http.get(config.endpoints.contact.contact);
  return response?.data?.data;
}

export async function createContact(payLoad: CreateContact): Promise<any> {
  const response = await http.post(config.endpoints.contact.contact, payLoad);
  return response?.data?.data;
}
