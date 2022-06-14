import React from 'react'

import { circus, cabin, cake, game, safe, submarine } from '../assets/img/random/index'

import getConfig from '../assets/js/near/config'
import Hero from '../components/Hero';

const Home = () => {



    return (<main>
              {/*<!-- Masthead-->*/}
<Hero />
  {/*<!-- Section-->*/}
  <section class="page-section bg-secondary near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <h2 class="page-section-heading text-center text-white text-uppercase text-secondary mb-0">Conoce los eventos del
        momento</h2>
      {/*<!--  Grid Items-->*/}
      <div class="row justify-content-center">
        {/*<!--  Item 1-->*/}
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal1">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={cabin} alt="..." />
          </div>
        </div>
        {/*<!--  Item 2-->*/}
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal2">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={cake} alt="..." />
          </div>
        </div>
        {/*<!--  Item 3-->*/}
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal3">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={circus} alt="..." />
          </div>
        </div>
        {/*<!--  Item 4-->*/}
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal4">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={game} alt="..." />
          </div>
        </div>
        {/*<!--  Item 5-->*/}
        <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal5">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={safe} alt="..." />
          </div>
        </div>
        {/*<!--  Item 6-->*/}
        <div class="col-md-6 col-lg-4">
          <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal6">
            <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={submarine} alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*<!--  Section-->*/}
  <section class="page-section bg-dark text-white mb-0" id="about">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <h2 class="page-section-heading text-center text-uppercase text-white">Realitytoken</h2>
      {/*<!-- Icon Divider-->*/}
      {/*<!-- <div class="divider-custom divider-light">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                  <div class="divider-custom-line"></div>
              </div> -->*/}
      {/*<!--  Section Content-->*/}

      <div class="row justify-content-center">
        <div class="col-lg-4 ms-auto">
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead">Image</p>
        </div>
      </div>
      {/*<!--  Section Button-->*/}

      <div class="d-flex flex-wrap align-items-end justify-content-center">
        <div class="p-4">
          <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">ADQUIRIR REALITIES</button>
        </div>
        <div class="p-4 d-flex flex-column align-items-center">
          <p class="lead">¿No tienes una wallet?</p>
          <button class="btn btn-secondary btn-xl disabled" id="submitButton" type="submit">CREA TU WALLET NEAR</button>
        </div>
      </div>


    </div>
  </section>

  <section class="page-section bg-secondary near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <div class="d-flex flex-wrap align-items-end justify-content-center">
        <h2 class="page-section-heading text-center text-white text-uppercase text-secondary mb-0">Vive la experiencia
          REALITY</h2>
        <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Ingresar</button>
      </div>
    </div>
  </section>

  </main>)


 

  };

  
  // this component gets rendered by App after the form is submitted
function Notification() {
    const { networkId } = getConfig(process.env.NODE_ENV || 'development')
    const urlPrefix = `https://explorer.${networkId}.near.org/accounts`
  
    return (
      <aside>
        <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
          {window.accountId}
        </a>
        {' '/* React trims whitespace around tags; insert literal space character when needed */}
        called method: 'set_greeting' in contract:
        {' '}
        <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
          {window.contract.contractId}
        </a>
        <footer>
          <div>✔ Succeeded</div>
          <div>Just now</div>
        </footer>
      </aside>
    )
  }

  
  export default Home;
  