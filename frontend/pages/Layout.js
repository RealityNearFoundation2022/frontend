import { Outlet, Link } from 'react-router-dom';

import { login, logout } from '../assets/js/near/utils';

const Layout = () => {
  const currentUser = window.accountId || '';

  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            Reality Near Icon
          </Link>
          <button
            class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1">
                <Link
                  class="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/marketplace"
                >
                  Marketplace
                </Link>
              </li>

              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  Nosotros
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                  Metaverso
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                  Contacto
                </a>
              </li>

              {currentUser ? (
                <button
                  href="#"
                  class="btn btn-warning btn-xl"
                  onClick={logout}
                >
                  Log out
                </button>
              ) : (
                <button href="#" class="btn btn-primary btn-xl" onClick={login}>
                  Log In
                </button>
              )}

              {/*<button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Ingreso</button>*/}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
