import React, { useContext } from 'react'
import twitterIcon from '../assets/img/social-network/twitter.png'
import igIcon from '../assets/img/social-network/instagramIcon.png'
import TelegramIcon from '../assets/img/social-network/TelegramIcon.png'
import fbIcon from '../assets/img/social-network/facebook.png'
import PropTypes from 'prop-types'
import ThemeContext from '../utils/useContextTheme'
import { useTranslation } from 'react-i18next'

export default function FollowInfo({ isBackground }) {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const socialNetworks = [
    {
      icon: TelegramIcon,
      link: 'https://t.me/realitynearXR',
    },
    {
      icon: twitterIcon,
      link: 'https://twitter.com/RealityNearOrg',
    },
    {
      icon: fbIcon,
      link: 'https://www.facebook.com/FundacionRealityNear',
    },

    {
      icon: igIcon,
      link: 'https://www.instagram.com/realitynear/',
    },
  ]
  return (
    <div
      className={`p-5 bg-img-size-cover w-100 ${
        isBackground && 'bg-img-realExperience text-white'
      }`}
    >
      <h1
        className={`d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7 ${theme.txt}`}
      >
        {t('SIGUENOS')}
      </h1>
      <div className="d-flex justify-content-center m-0 h-50 align-items-center w-100 py-5">
        {socialNetworks.map(({ link, icon }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer">
            <img src={icon} alt="" className="px-2 icon" />
          </a>
        ))}
      </div>
    </div>
  )
}
FollowInfo.propTypes = {
  isBackground: PropTypes.bool.isRequired,
}
