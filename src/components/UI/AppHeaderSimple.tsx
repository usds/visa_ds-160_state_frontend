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
        menuId="myAccountDropdown"
        isOpen={isOpen[0]}
        label="My Account"
      />
      <Menu
        key="myAccount"
        items={myAccountMenuItems}
        isOpen={isOpen[0]}
        id="myAccountDropdown"
      />
    </>,
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(1);
        }}
        menuId="myApplicationMenu"
        isOpen={isOpen[1]}
        label="Application"
        // TODO: state management for this
        isCurrent={true}
      />
      <Menu
        key="myApplication"
        items={myApplicationMenuItems}
        isOpen={isOpen[1]}
        id="myApplicationMenu"
      />
    </>,
    <Link href="#two" key="two" className="usa-nav__link">
      <span>Resources</span>
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
