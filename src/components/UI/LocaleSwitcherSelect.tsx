//https://github.com/amannn/next-intl/blob/main/examples/example-app-router-without-i18n-routing/src/components/LocaleSwitcherSelect.tsx
"use client";

import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { LanguageSelector } from "@trussworks/react-uswds";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(locale: Locale) {
    // const locale = item.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  const langs = items.map((item) => ({
    attr: item.value,
    label: item.label,
    on_click: () => {
      onChange(item.value as Locale);
    },
  }));

  return (
    <LanguageSelector
      id="locale-select"
      langs={langs}
      className={isPending ?? "opacity-50"}
      defaultValue={defaultValue}
    />
  );
}
