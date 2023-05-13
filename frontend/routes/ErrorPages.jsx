import React from 'react'
import NoData from '../pages/ErrorPage/NoData'
import PageNotFound from '../pages/ErrorPage/PageNotFound'
import ServerError from '../pages/ErrorPage/ServerError'

export const ErrorPagesRoutes = [
  {
    path: '/server-error',
    element: <ServerError />,
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
  {
    path: '/no-data',
    element: <NoData />,
  },
]
