import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
export default function HeaderSections({
  titleSection,
  descriptionSection,
  bgHeader,
}) {
  const { t } = useTranslation();
  return (
    <div className={`${bgHeader} px-7-5porcent py-5`}>
      <h1 className="title text-uppercase fw-bold text-white mb-2">
        {t(titleSection)}
      </h1>
      <p className="fw-bold text-white fs-5">{t(descriptionSection)} </p>
    </div>
  );
}

HeaderSections.propTypes = {
  titleSection: PropTypes.string.isRequired,
  descriptionSection: PropTypes.string.isRequired,
  bgHeader: PropTypes.string.isRequired,
};
