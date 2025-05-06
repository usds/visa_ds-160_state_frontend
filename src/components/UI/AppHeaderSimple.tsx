import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Title,
} from "@trussworks/react-uswds";
import LocaleSwitcher from "./LocaleSwitcher";

function AppHeaderSimple() {
  const projectName = "DS-160 Nonimmigrant Visa Application";
  const projectLogo = "/images/dos-logo.png";

  const testItemsMenu = [
    <Link href="/" key="one" className="usa-nav__link">
      <span className="text-white">Home</span>
    </Link>,
    <Link href="/search" key="two" className="usa-nav__link">
      <span className="text-white">Search</span>
    </Link>,
  ];

  return (
    <Header
      className="usa-header usa-header--basic bg-primary-darker min-h-16"
      basic={true}
    >
      <div className="usa-nav-container bg-primary-darker">
        <div className="usa-navbar grid-row text-white">
          <div className="usa-logo flex-1 grid-col">
            <Image
              src={projectLogo}
              alt="Project Logo"
              height={60}
              width={60}
            />
          </div>
          <div style={{ paddingLeft: "1rem" }}></div>
          <Title className="flex-2 grid-col">{projectName}</Title>
          <NavMenuButton label="Menu" />
        </div>
        <PrimaryNav items={testItemsMenu}></PrimaryNav>
        <LocaleSwitcher></LocaleSwitcher>
      </div>
    </Header>
  );
}

export default AppHeaderSimple;
