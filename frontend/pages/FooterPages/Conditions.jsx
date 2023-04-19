import React from 'react'
import HeaderSections from '../HeaderSections'
import footerPages from './footerPages'
import { useParams } from 'react-router-dom'

export default function Conditions() {
  const { path } = useParams()
  const { title, body } = footerPages[path]

  return (
    <div className="">
      <HeaderSections titleSection={title} bgHeader="bg-header-terminos" />
      <section className="mx-5 p-5">{body}</section>
    </div>
  )
}
