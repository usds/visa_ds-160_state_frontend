"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "../globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  Alert,
  Button,
  Checkbox,
  Fieldset,
  Form,
  Label,
  Radio,
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

          {/* Given names */}
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

          {/* Native Alphabet */}
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
        </Fieldset>
        <Fieldset legend="Previous names">
          {/* Previous names yes/no */}
          <Label htmlFor="previous-names">
            Have you ever used any other names?
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <span className="usa-hint">
            i.e. maiden name, religious, alias, etc
          </span>
          <div className="usa-radio">
            <Radio id="previousNames-yes" name="previousNames" label="yes" />
            <Radio id="previousNames-no" name="previousNames" label="no" />
          </div>

          {/* Previous names textboxes*/}
          <Label htmlFor="previous-name-1">
            Name 1
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <TextInput id="previous-name-1" required={true} />
          <Button type="button" outline>
            + Add another name
          </Button>

          {/* Telecode yes/no */}
          <Label htmlFor="telecode">
            Do you have a telecode that represents your name?
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <span className="usa-hint">
            A telecode is a 4 digit code that represents characters in some
            non-Roman alphabet names
          </span>
          <div className="usa-radio">
            <Radio id="telecode-yes" name="telecode" label="yes" />
            <Radio id="telecode-no" name="telecode" label="no" />
          </div>
        </Fieldset>
        <Button type="submit">Next</Button>
      </Form>
    </FormProvider>
  );
}
