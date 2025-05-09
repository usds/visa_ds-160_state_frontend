"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "../globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  Button,
  Checkbox,
  DateInput,
  DateInputGroup,
  Fieldset,
  Form,
  FormGroup,
  Label,
  RequiredMarker,
  Select,
  TextInput,
} from "@trussworks/react-uswds";
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
      {/* // TODO move this to a separate component */}
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Fieldset legend={t("header")} legendStyle="large">
          {/* // Should these be fieldset legends instead also? */}
          <h3>{t("doc-type-header")}</h3>
          <p>{t("doc-type-hint")}</p>
          <p>
            Required fields are marked with an asterisk (<RequiredMarker />
            ).
          </p>
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
          {/* // I wish these h3's were fieldset legends instead */}
          <h3>{t("book-number-header")}</h3>
          <p>{t("book-number-hint")}</p>
          <Label htmlFor="book-number" requiredMarker>
            {t("book-number-label")}
          </Label>
          <TextInput name="book-number" id="book-number" required />
          <Checkbox
            id="no-book-number-checkbox"
            name="no-book-number-checkbox"
            value="no-book-number"
            label={t("no-book-number-label")}
          />
          {/* <h3>{t("issuance-date")}</h3> */}
          {/* // TODO extract into date component */}
          <Fieldset legend={t("issuance-date")} legendStyle="large">
            {/* // we need a medium legend style thats smaller than h1 */}
            <DateInputGroup>
              <FormGroup className="usa-form-group--month usa-form-group--select">
                <Label htmlFor="input-select">{t("month")}</Label>
                <Select id="issuanceMonthInput" name="issuanceMonthInput">
                  {/* TODO localize */}
                  <option>- Select -</option>
                  <option value="1">01 - January</option>
                  <option value="2">02 - February</option>
                  <option value="3">03 - March</option>
                  <option value="4">04 - April</option>
                  <option value="5">05 - May</option>
                  <option value="6">06 - June</option>
                  <option value="7">07 - July</option>
                  <option value="8">08 - August</option>
                  <option value="9">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </Select>
              </FormGroup>
              <DateInput
                id="issuanceDayInput"
                name="issuanceDay"
                label={t("day")}
                unit="day"
                maxLength={2}
                minLength={2}
              />
              <DateInput
                id="issuanceYearInput"
                name="issuanceYear"
                label={t("year")}
                unit="year"
                maxLength={4}
                minLength={4}
              />
            </DateInputGroup>
          </Fieldset>
          <Fieldset legend={t("expiration-date")} legendStyle="large">
            <DateInputGroup>
              <FormGroup className="usa-form-group--month usa-form-group--select">
                <Label htmlFor="input-select">{t("month")}</Label>
                <Select id="expirationMonthInput" name="expirationMonthInput">
                  {/* TODO localize */}
                  <option>- Select -</option>
                  <option value="1">01 - January</option>
                  <option value="2">02 - February</option>
                  <option value="3">03 - March</option>
                  <option value="4">04 - April</option>
                  <option value="5">05 - May</option>
                  <option value="6">06 - June</option>
                  <option value="7">07 - July</option>
                  <option value="8">08 - August</option>
                  <option value="9">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </Select>
              </FormGroup>
              <DateInput
                id="expirationDayInput"
                name="expirationDay"
                label={t("day")}
                unit="day"
                maxLength={2}
                minLength={2}
              />
              <DateInput
                id="expirationYearInput"
                name="expirationYear"
                label={t("year")}
                unit="year"
                maxLength={4}
                minLength={4}
              />
            </DateInputGroup>
          </Fieldset>
        </Fieldset>

        <Button type="submit">{t("submit")}</Button>
      </Form>
    </FormProvider>
  );
}
