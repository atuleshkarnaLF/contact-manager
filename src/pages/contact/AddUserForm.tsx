import React, { FC, useState } from "react";
import {
  createContact,
  updateContactById,
} from "../../services/ContactService";
import toastr from "toastr";
import { Contact } from "../../types/contact";
interface Props {
  id?: string;
  updateName?: string;
  updateEmail?: string;
  updatePhone?: string;
  updatePhotograph?: string;
  isUpdate?: boolean;
}
const AddUserForm: FC<Props> = ({
  id,
  updateName = "",
  updateEmail = "",
  updatePhone = "",
  updatePhotograph = "",
  isUpdate,
}) => {
  const [name, setName] = useState<string>(updateName || "");
  const [email, setEmail] = useState<string>(updateEmail || "");
  const [phone, setPhone] = useState<string>(updatePhone || "");
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >(updatePhotograph || "");

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // data url base64 encoding
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phone || !previewSource) {
      return;
    }
    const formData = {
      name,
      email,
      phone,
      photograph: previewSource,
    };

    try {
      {
        !isUpdate && formData
          ? await createContact(formData as any)
          : await updateContactById(id!, formData as any);
      }
      toastr.success("User contact created successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="column" onSubmit={handleSubmit}>
      {previewSource && !isUpdate && (
        <div className="display-img">
          <img src={previewSource as string} alt="Selected" />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          onChange={handleInputFileChange}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
