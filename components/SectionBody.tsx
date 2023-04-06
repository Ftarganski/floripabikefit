import React from "react";
import Services from "./body/services";
import About from "./body/about";
import Clients from "./body/clients";
import Partners from "./body/partners";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Services />
      <About />
      <Clients />
      {/* <Partners /> */}
    </>
  );
};

export default Body;
