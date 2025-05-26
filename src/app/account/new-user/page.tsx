"use client";

import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Fieldset,
  Form,
  Label,
  TextInput,
} from "@trussworks/react-uswds";

export default function NewUserPage() {
  type UserFormInput = {
    email: string;
  };

  const formMethods = useForm<UserFormInput>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const onSubmit: SubmitHandler<UserFormInput> = async (userData) => {
    console.log(userData);
  };

  return (
    <FormProvider {...formMethods}>
      {errors.root &&
        Object.keys(errors.root).map((errorName) => (
          <Alert key={errorName} headingLevel="h3" type="error">
            {errors.root[errorName].message}
          </Alert>
        ))}
      <h2>Create a new account</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset legend={"You'll be asked to verify your email address."}>
          <Label htmlFor="email" requiredMarker>
            {"Email"}
          </Label>
          <TextInput id="email" required={true} {...register("email")} />
        </Fieldset>
        <Button type="submit">{"Submit"}</Button>
      </Form>
    </FormProvider>
  );
}
