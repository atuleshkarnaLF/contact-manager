import React, { useState } from "react";

const AddUserForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >(null);

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
    if (!name || !email || !previewSource) {
      return;
    }
    const formData = {
      name,
      email,
      fileString: previewSource,
    };
    try {
      await fetch(`${process.env.REACT_APP_API_BASE_URI}/users/contact`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="column" onSubmit={handleSubmit}>
      {previewSource && (
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
