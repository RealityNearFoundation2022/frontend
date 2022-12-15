import React, { useContext } from 'react'
import twitterIcon from '../assets/img/social-network/twitter.png'
import githubIconWhite from '../assets/img/social-network/github-icon-white.png'
import githubIcon from '../assets/img/social-network/githubIcon.png'
import discordIcon from '../assets/img/social-network/discordIcon.png'
import fbIcon from '../assets/img/social-network/facebook.png'
import PropTypes from 'prop-types'
<<<<<<< Updated upstream
import { useTranslation } from 'react-i18next'

export default function FollowInfo({ isBackground }) {
  const { t } = useTranslation()

=======
import ThemeContext from '../utils/useContextTheme'

export default function FollowInfo({ isBackground }) {
  const { theme } = useContext(ThemeContext)
>>>>>>> Stashed changes
  const socialNetworks = [
    {
      icon: discordIcon,
      link: 'https://discord.gg/jWBXDjU6',
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
      icon: theme.bg === 'bg-light' ? githubIcon : githubIconWhite,
      link: 'https://github.com/RealityNearFoundation2022/',
      linkIconWhite: githubIconWhite
    },
  ]
  return (
    <div
      className={`p-5 bg-img-size-cover w-100 ${
        isBackground && 'bg-img-realExperience text-white'
      }`}
    >
<<<<<<< Updated upstream
      <h1 className="d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7">
        { t('SIGUENOS') }
=======
      <h1 className={`d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7 ${theme.txt}`}>
        ¡SÍGUENOS!
>>>>>>> Stashed changes
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
