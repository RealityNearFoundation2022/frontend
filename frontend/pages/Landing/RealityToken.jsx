import React from 'react';

export default function RealityToken() {
  return (
    <section className="page-section bg-dark text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          Realitytoken
        </h2>

        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4 ms-auto">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            aliquam culpa architecto quidem impedit cum saepe nobis, earum eaque
            rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.
          </p>
        </div>
        <div className="col-lg-4 me-auto">
          <p className="lead">Image</p>
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-end justify-content-center">
        <div className="p-4">
          <button
            className="btn btn-primary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            ADQUIRIR REALITIES
          </button>
        </div>
        <div className="p-4 d-flex flex-column align-items-center">
          <p className="lead">¿No tienes una wallet?</p>
          <button
            className="btn btn-secondary btn-xl disabled"
            id="submitButton"
            type="submit"
          >
            CREA TU WALLET NEAR
          </button>
        </div>
      </div>
    </section>
  );
}
