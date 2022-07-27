/* eslint-disable react/prop-types */
import React from 'react'

export default function HeaderSections({ titleSection, descriptionSection }) {
  return (
    <div className="bg-grey px-10porcent py-5">
      <h1 className="title text-uppercase fw-bold text-primary mb-2">
        {titleSection}
      </h1>
      <p>{descriptionSection} </p>
    </div>
  )
}
