import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const useReactHookForm = (Story) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};
