/* eslint-disable react/prop-types */
import React from 'react'

export default function HeaderSections({
  titleSection,
  descriptionSection,
  bgHeader,
}) {
  return (
    <div className={`${bgHeader} px-7-5porcent py-5`}>
      <h1 className="title text-uppercase fw-bold text-white mb-2">
        {titleSection}
      </h1>
      <p className="fw-bold text-white fs-5">{descriptionSection} </p>
    </div>
  )
}
