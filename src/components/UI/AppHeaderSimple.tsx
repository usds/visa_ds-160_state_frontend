"use client";

import React, { useState } from "react";
import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Link,
  Title,
  NavDropDownButton,
  Menu,
} from "@trussworks/react-uswds";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

function AppHeaderSimple() {
  const t = useTranslations("AppHeader");

  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);

  const [isOpen, setIsOpen] = useState([false, false]);
  const onToggle = (idx): void => {
    const newIsOpen = [...isOpen];
    newIsOpen[idx] = !isOpen[idx];
    setIsOpen(newIsOpen);
  };

  const myAccountMenuItems = [
    <Link href="#linkOne" key="one">
      Profile
    </Link>,
    <Link href="#linkTwo" key="two">
      Logout
    </Link>,
  ];

  const myApplicationMenuItems = [
    <Link href="#linkOne" key="one">
      Nav??
    </Link>,
  ];

  const testItemsMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(0);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="My Account"
        isCurrent={true}
      />
      <Menu
        key="myAccount"
        items={myAccountMenuItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(1);
        }}
        menuId="testDropDownTwo"
        isOpen={isOpen[1]}
        label="Application"
      />
      <Menu
        key="myApplication"
        items={myApplicationMenuItems}
        isOpen={isOpen[1]}
        id="testDropDownTwo"
      />
    </>,
    <Link href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </Link>,
    <LocaleSwitcher key="locale"></LocaleSwitcher>,
  ];

  return (
    <Header basic={true}>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <Title>{t("project-name")}</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <PrimaryNav
          items={testItemsMenu}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
        ></PrimaryNav>
      </div>
    </Header>
  );
}

export default AppHeaderSimple;
