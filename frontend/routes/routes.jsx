import React from 'react'

// import Marketplace from './pages/MarketPlace/IndexMarketplace'
import Home from '../pages/Landing/IndexLanding'
// import NoPage from './pages/NoPage'
import NftMe from '../components/nft/Me'
import NftSell from '../components/nft/Sell'
import About from '../pages/About/IndexAbout'
import Contact from '../pages/Contact/Contact'
import Metaverso from '../pages/Metaverse/Metaverse'
import { DashboardMarketPlace } from './DashboardMarketPlace'
import { CardSection } from '../pages/MarketPlace/CardSection'
import DashboardNotice from './DashboardNotice'
import Nuruk from '../pages/Nuruk/IndexNuruk'
import Conditions from '../pages/Conditions'
import Realities from '../pages/Realities/IndexRealities'
import Maps from '../pages/Maps/IndexMaps'
import ResetPassword from '../pages/ResetPassword/ResetPasswordIndex'
import ResetPasswordCompleted from '../pages/ResetPassword/ResetPasswordCompleted'
import Error500 from '../pages/ErrorPage/Error500'
import PlotNuruk from '../pages/Nuruk/PlotNuruk'
import { ErrorPagesRoutes } from './ErrorPages'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/patchas',
    element: <Maps />,
  },
  {
    path: '/marketplace/*',
    element: <DashboardMarketPlace />,
  },
  {
    path: '/marketplace/me',
    element: <NftMe />,
  },
  {
    path: '/marketplace/sell',
    element: <NftSell />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/nuruk',
    element: <Nuruk />,
  },
  {
    path: '/nuruk/:posX/:posY',
    element: <PlotNuruk />,
  },
  {
    path: '/metaverso',
    element: <Metaverso />,
  },
  {
    path: '/marketplace/detail/:category/:idCard',
    element: <CardSection />,
  },
  {
    path: '/notices/*',
    element: <DashboardNotice />,
  },
  {
    path: '/realities',
    element: <Realities />,
  },
  {
    path: '/terminos-condiciones',
    element: <Conditions />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/reset-password/completed',
    element: <ResetPasswordCompleted />,
  },
  {
    path: '/500',
    element: <Error500 />,
  },
  ...ErrorPagesRoutes,
]
