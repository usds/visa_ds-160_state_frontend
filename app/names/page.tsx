"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "../globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  Alert,
  Checkbox,
  Fieldset,
  Form,
  InputGroup,
  Label,
  TextInput,
} from "@trussworks/react-uswds";

export default function NamePage() {
  type nameFormInput = {
    surname: string;
    givenName: string;
    nativeAlphabetName: string;
    nativeAlphabetDoesNotApply: boolean;
  };
  const formMethods = useForm<nameFormInput>();

  const onSubmit: SubmitHandler<nameFormInput> = async (nameData) => {
    console.log(nameData);
  };

  return (
    <FormProvider {...formMethods}>
      <Alert
        type="info"
        heading="Answers to these questions should match what is written in your passport"
        headingLevel="h4"
      ></Alert>
      <h2>Names</h2>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Fieldset legend="Name on your current passport">
          {/* Surnames */}
          <InputGroup>
            <Label htmlFor="surnames">
              Surnames (Last Names)
              <abbr title="required" className="usa-label--required">
                *
              </abbr>
            </Label>
            <span className="usa-hint">
              Enter all surnames (last names) as listed in your passport.
            </span>
            <TextInput id="surnames" required={true} />
          </InputGroup>

          {/* Given names */}
          <InputGroup>
            <Label htmlFor="givenNames">
              Given (First) Names
              <abbr title="required" className="usa-label--required">
                *
              </abbr>
            </Label>
            <span className="usa-hint">
              Enter your first names as listed in your passport.
            </span>
            <TextInput id="givenNames" required={true} />
          </InputGroup>

          {/* Native Alphabet */}
          <InputGroup>
            <Label htmlFor="nativeAlphabetName">
              Full Name in Native Alphabet
              <abbr title="required" className="usa-label--required">
                *
              </abbr>
            </Label>
            <TextInput id="nativeAlphabetName" required={true} />
            <Checkbox
              id="nativeAlphabetDoesNotApply"
              name="nativeAlphabetDoesNotApply"
              label="Does not apply"
            />
          </InputGroup>
        </Fieldset>
      </Form>
    </FormProvider>
  );
}
