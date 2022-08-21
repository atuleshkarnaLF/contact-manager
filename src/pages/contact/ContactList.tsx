import React from "react";
import AddUserForm from "./AddUserForm";

const ContactList = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="column-wrap">
            <AddUserForm />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>List of all the users</h1>
          <div className="columns-wrap">
            <div className="column">Placeholder Text</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
