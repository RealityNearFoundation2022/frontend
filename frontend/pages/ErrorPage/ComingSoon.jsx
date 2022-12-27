import React, { useContext } from 'react'
import CoomingSoon from '../../assets/img/error-page/coming-soon.png'
import { useTranslation } from 'react-i18next'
import ThemeContext from '../../utils/useContextTheme'

export default function ComingSoon() {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <img src={CoomingSoon}></img>
      <h3 className={`my-3 ${theme.txt}`}>
        {t('Seguimos en construcción')}...
      </h3>
      <p className={`${theme.txt}`}>
        {t(
          'El contenido que buscas estará disponible próximamente. Estamos trabajando para darte la mejor experiencia.',
        )}
      </p>
    </div>
  )
}
