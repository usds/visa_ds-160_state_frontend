"use client";
import React, { useState } from "react";
import "../globals.css";
import UserForm from "../../components/UserForm/UserForm";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

export default function UserFormPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const userFormProps = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage,
    successMessage: successMessage,
    setSuccessMessage: setSuccessMessage,
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>User Registration</h1>
        <UserForm {...userFormProps} />
      </div>
    </div>
  );
}
