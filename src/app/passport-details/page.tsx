"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "../globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { Button, Fieldset, Form, Label, Select } from "@trussworks/react-uswds";
import { useTranslations } from "next-intl";

export default function PassportDetailsPage() {
  const t = useTranslations("PassportDetails");
  type detailsFormInput = {
    surname: string;
    givenName: string;
    nativeAlphabetName: string;
    nativeAlphabetDoesNotApply: boolean;
  };
  const formMethods = useForm<detailsFormInput>();

  const onSubmit: SubmitHandler<detailsFormInput> = async (nameData) => {
    console.log(nameData);
  };

  return (
    <FormProvider {...formMethods}>
      <h2>{t("header")}</h2>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <h3>{t("doc-type-header")}</h3>
        <Fieldset legend={t("doc-type-hint")}>
          {/* Passport Type */}
          <Label htmlFor="doc-type-select" requiredMarker>
            {t("doc-type-select-label")}
          </Label>
          <Select id="doc-type-select" name="doc-type-select">
            <option value="tourist">{t("regular-passport")}</option>
          </Select>
          <h3>{t("issuer-header")}</h3>
          <Label htmlFor="issuer-select" requiredMarker>
            {t("issuer-select-label")}
          </Label>
          <Select id="issuer-select" name="issuer-select">
            <option>{t("issuer-select-option")}</option>
          </Select>
        </Fieldset>
        <Button type="submit">{t("submit")}</Button>
      </Form>
    </FormProvider>
  );
}
