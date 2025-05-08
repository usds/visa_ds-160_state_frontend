//https://github.com/amannn/next-intl/blob/main/examples/example-app-router-without-i18n-routing/src/components/LocaleSwitcherSelect.tsx
"use client";

import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Select } from "@trussworks/react-uswds";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    console.log("onChange", value);
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      {/* <Label htmlFor="locale-select">Select Language</Label> */}
      <Select
        defaultValue={defaultValue}
        id="locale-select"
        onChange={onChange}
        aria-label={label}
        className={isPending && "opacity-60"}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
