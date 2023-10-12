import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submit, setSubmit] = useState(false);

  const getFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const showFullName = () => {
    setSubmit(true);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <label>First Name : </label>
      <input
        id="first-name"
        type="text"
        placeholder="Enter Your First Name"
        onChange={getFirstName}
      />
      <br />
      <label>Last Name : </label>
      <input
        id="last-name"
        type="text"
        placeholder="Enter Your Last Name"
        onChange={getLastName}
      />
      <br />
      {firstName === "" || lastName === "" ? (
        <button disabled>Submit</button>
      ) : (
        <button onClick={showFullName}>Submit</button>
      )}
      {firstName !== "" && lastName !== "" && submit === true ? (
        <p>{`Full Name : ${firstName} ${lastName}`}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
