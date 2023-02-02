import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/*<!-- Masthead Heading-->*/}
        <h1 className="masthead-heading text-uppercase mb-0">
          {t("Bienvenido a Reality Near")}
        </h1>
      </div>
    </header>
  );
};

export default Hero;
