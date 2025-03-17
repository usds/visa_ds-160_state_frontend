import React, { useState } from "react";
import { Alert, Button, Form, Label, TextInput } from "@trussworks/react-uswds";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
    };

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
        setErrorMessage(null); // Clear any previous errors
        console.log("User added successfully!");
      } else {
        // Handle error
        const errorData = await response.json();
        setErrorMessage(
          "There was an error submitting the form. Please try again.",
        );
        setSuccessMessage(null); // Clear any previous success messages
        console.error("Error adding user.", errorData);
      }
    } catch (error) {
      setErrorMessage(
        "There was an error submitting the form. Please try again.",
      );
      setSuccessMessage(null); // Clear any previous success messages
      console.error("Error adding user.", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errorMessage && (
        <Alert headingLevel="h3" type="error">
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert headingLevel="h3" type="success">
          {successMessage}
        </Alert>
      )}

      <Label htmlFor="first-name">First Name</Label>
      <TextInput
        id="first-name"
        name="first-name"
        value={firstName}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setFirstName(e.target.value)
        }
        required
      />
      <Label htmlFor="last-name">Last Name</Label>
      <TextInput
        id="last-name"
        name="last-name"
        value={lastName}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setLastName(e.target.value)
        }
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UserForm;
