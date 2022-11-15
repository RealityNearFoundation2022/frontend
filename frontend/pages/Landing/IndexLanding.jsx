/* eslint-disable camelcase */
import React from 'react'
// import getConfig from '../../assets/js/near/config'
import '../../assets/css/components/events.css'

import Moments from './Moments'
import RealityToken from './RealityToken'
import RealityExperience from './RealityExperience'
import realityNear from '../../assets/img/random/LOGO REALITY NEAR.png'

function Home() {
  // // use React Hooks to store greeting in component state
  // const [greeting, setGreeting] = React.useState()

  // // when the user has not yet interacted with the form, disable the button
  // const [buttonDisabled, setButtonDisabled] = React.useState(true)

  // // after submitting the form, we want to show Notification
  // const [showNotification, setShowNotification] = React.useState(false)

  // React.useEffect(
  //  () => {
  // get_greeting is in near/utils.js
  // get_greeting()
  //  .then(greetingFromContract => {
  //    setGreeting(greetingFromContract)
  //  })
  // },

  // The second argument to useEffect tells React when to re-run the effect
  // Use an empty array to specify "only run on first render"
  // This works because signing into NEAR Wallet reloads the page
  // []
  // )

  return (
    <main>
      <header className="bg-image bg-img-size-cover text-white text-center page-section">
        <div className="container d-flex align-items-center flex-column h-100 justify-content-center">
          <h1 className="masthead-heading text-uppercase mb-0">Bienvenido a</h1>
          <img src={realityNear} alt="realityNear" width="50%" />
        </div>
      </header>
      <Moments />
      <RealityToken />
      <RealityExperience />
    </main>
  )
}

// this component gets rendered by App after the form is submitted
// function Notification() {
//   const { networkId } = getConfig(process.env.NODE_ENV || 'development')
//   const urlPrefix = `https://explorer.${networkId}.near.org/accounts`

//   return (
//     <aside>
//       <a
//         target="_blank"
//         rel="noreferrer"
//         href={`${urlPrefix}/${window.accountId}`}
//       >
//         {window.accountId}
//       </a>
//       called method: set_greeting in contract:{' '}
//       <a
//         target="_blank"
//         rel="noreferrer"
//         href={`${urlPrefix}/${window.contract.contractId}`}
//       >
//         {window.contract.contractId}
//       </a>
//       <footer>
//         <div>✔ Succeeded</div>
//         <div>Just now</div>
//       </footer>
//     </aside>
//   )
// }

export default Home
