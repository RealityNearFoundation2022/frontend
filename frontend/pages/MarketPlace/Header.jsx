import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <div className="bg-header-marketplace px-7-5porcent py-5">
      <h1 className="title text-uppercase fw-bold text-white mb-2">
        {t('MarketPlace')}
      </h1>
      <p className="fw-bold text-white fs-5">
        {t('Encuentra y adquiere patchas, realands y NFTs en un solo lugar.')}
      </p>
    </div>
  )
}
