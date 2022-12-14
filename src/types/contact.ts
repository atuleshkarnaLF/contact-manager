export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  photograph: string;
}
export type CreateContact = Omit<Contact, "id">;

export interface ContactResponse {
  data: any;
  statusCode: number;
  message: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export type CreateUser = Omit<User, "id">;
