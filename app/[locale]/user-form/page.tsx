"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "../globals.css";
import UserForm, { UserFormInput } from "@/components/UserForm/UserForm";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

export default function UserFormPage() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formMethods = useForm<UserFormInput>();

  const onSubmit: SubmitHandler<UserFormInput> = async (userData) => {
    try {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle success
        setSuccessMessage("Form submitted successfully!");
        formMethods.clearErrors(); // Clear any previous errors
        console.log("User added successfully!");
      } else {
        // Handle error
        const errorData = await response.json();
        formMethods.setError("root.serverError", {
          type: response.statusText,
          message:
            "There was a server error submitting the form. Please try again.",
        });
        setSuccessMessage(null); // Clear any previous success messages
        console.error("Error adding user.", errorData);
      }
    } catch (error) {
      formMethods.setError("root.unknownError", {
        type: "unknown",
        message:
          "There was an unknown error submitting the form. Please try again.",
      });
      setSuccessMessage(null); // Clear any previous success messages
      console.error("Error adding user.", error);
    }
  };

  const userFormProps = {
    successMessage,
    onSubmit,
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
        <FormProvider {...formMethods}>
          <UserForm {...userFormProps} />
        </FormProvider>
      </div>
    </div>
  );
}
