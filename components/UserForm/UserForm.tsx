import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Button, Form, Label, TextInput } from "@trussworks/react-uswds";

type UserFormInput = {
  firstName: string;
  lastName: string;
};

type UserFormProps = {
  successMessage: string;
  setSuccessMessage: (event: string) => void;
};

const UserForm = (props: UserFormProps) => {
  const { successMessage, setSuccessMessage } = props;
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<UserFormInput>();

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
        clearErrors(); // Clear any previous errors
        console.log("User added successfully!");
      } else {
        // Handle error
        const errorData = await response.json();
        setError("root.serverError", {
          type: response.statusText,
          message:
            "There was a server error submitting the form. Please try again.",
        });
        setSuccessMessage(null); // Clear any previous success messages
        console.error("Error adding user.", errorData);
      }
    } catch (error) {
      setError("root.unknownError", {
        type: "unknown",
        message:
          "There was an unknown error submitting the form. Please try again.",
      });
      setSuccessMessage(null); // Clear any previous success messages
      console.error("Error adding user.", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errors.root &&
        Object.keys(errors.root).map((errorName) => (
          <Alert key={errorName} headingLevel="h3" type="error">
            {errors.root[errorName].message}
          </Alert>
        ))}
      {successMessage && (
        <Alert headingLevel="h3" type="success">
          {successMessage}
        </Alert>
      )}

      <Label htmlFor="first-name">First Name</Label>
      <TextInput {...register("firstName")} required />
      <Label htmlFor="last-name">Last Name</Label>
      <TextInput {...register("lastName")} required />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UserForm;
