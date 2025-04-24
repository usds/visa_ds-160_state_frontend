import React from "react";
import {
  FieldErrors,
  RegisterOptions,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Alert, Button, Form, Label, TextInput } from "@trussworks/react-uswds";

export type UserFormInput = {
  firstName: string;
  lastName: string;
};

type UserFormProps = {
  successMessage: string;
  register: (
    name: string,
    options?: RegisterOptions,
  ) => { ref; name; onChange; onBlur };
  handleSubmit: UseFormHandleSubmit<UserFormInput, UserFormInput>;
  onSubmit: SubmitHandler<UserFormInput>;
  errors: FieldErrors<UserFormInput>;
};

const UserForm = (props: UserFormProps) => {
  const { successMessage, register, handleSubmit, onSubmit, errors } = props;

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
