import React, { useEffect, useState } from "react";
import useMountEffect from "../../hooks/useMountEffect";
import { fetchAllContacts } from "../../services/ContactService";
import { Contact } from "../../types/contact";
import AddUserForm from "./AddUserForm";

const ContactList = () => {
  const [contactList, setContactList] = useState<Contact[]>();

  useMountEffect(() => {
    handleFetchContacts();
  });
  const handleFetchContacts = async () => {
    try {
      const response = await fetchAllContacts();
      setContactList(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-4" style={{ borderRight: "1px solid #212529" }}>
          <div className="container">
            <div className="column-wrap">
              <AddUserForm />
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="container">
            <h1>List of all the users</h1>
            <div className="columns-wrap">
              {contactList?.map((item, index) => {
                return (
                  <div className="column row" key={index}>
                    <div className="col-4">
                      <img
                        src={item.photograph}
                        alt="profile"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                    </div>
                    <div className="col-8">
                      <h6>{item.name}</h6>
                      <span className="d-block">{item.email}</span>
                      <span className="d-block">{item.phone}</span>
                    </div>
                    <div>
                      <button className="btn btn-info">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
