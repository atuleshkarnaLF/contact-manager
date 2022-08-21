export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  photograph: string;
}
export type CreateContact = Omit<Contact, "id">;
