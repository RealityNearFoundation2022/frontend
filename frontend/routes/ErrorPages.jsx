import NoData from "../pages/ErrorPage/NoData";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import ServerError from "../pages/ErrorPage/ServerError";

export default ErrorPagesRoutes = [
  {
    path: '/server-error',
    element: <ServerError/>
  },
  {
    path: '/page-not-found',
    element: <PageNotFound/>
  },
  {
    path: '/no-data',
    element: <NoData/>
  }
]