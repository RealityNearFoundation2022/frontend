import Hero from "../components/Hero";

const Contact = () => {
    return (
        <>
     <Hero />


  {/*<!-- Section-->*/}
  <section class="page-section bg-secondary near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <h2 class="page-section-heading text-center text-white text-uppercase text-secondary mb-5">Conoce los eventos del
        momento</h2>
      {/*<!--  Slider Items-->*/}
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/*<!--  Grid Items-->*/}
            <div class="row justify-content-center">
              {/*<!--  Item 1-->*/}
              <div class="col-md-4 col-lg-3 mb-5">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal1">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/cabin.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 2-->*/}
              <div class="col-md-4 col-lg-3 mb-5">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal2">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/cake.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 3-->*/}
              <div class="col-md-4 col-lg-3 mb-5">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal3">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/circus.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 3-->*/}
              <div class="col-md-4 col-lg-3 mb-5">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal3">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/circus.png" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/*<!--  Grid Items-->*/}
            <div class="row justify-content-center">
              {/*<!--  Item 4-->*/}
              <div class="col-md-4 col-lg-3 mb-5 mb-lg-0">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal4">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/game.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 5-->*/}
              <div class="col-md-4 col-lg-3 mb-5 mb-md-0">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal5">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/safe.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 6-->*/}
              <div class="col-md-4 col-lg-3 mb-5 mb-md-0">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal6">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/submarine.png" alt="..." />
                </div>
              </div>
              {/*<!--  Item 5-->*/}
              <div class="col-md-4 col-lg-3 mb-5 mb-md-0">
                <div class="near-item mx-auto" data-bs-toggle="modal" data-bs-target="#nearModal5">
                  <div class="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="near-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="assets/img/random/safe.png" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>


  {/*<!--  Section-->*/}
  <section class="page-section bg-dark bg-gradient text-white mb-0" id="about">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <h2 class="h1 page-section-heading text-start text-uppercase text-white mb-5">Realitytoken</h2>
      {/*<!--  Section Content-->*/}
      <div class="row justify-content-center">
        <div class="col-lg-4 ms-auto">
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
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
          <button class="btn btn-primary btn-xl rounded" id="submitButton" type="submit">ADQUIRIR REALITIES</button>
        </div>
        <div class="p-4 d-flex flex-column align-items-center">
          <p class="lead">¿No tienes una wallet?</p>
          <button class="btn btn-secondary btn-xl rounded" id="submitButton" type="submit">CREA TU WALLET
            NEAR</button>
        </div>
      </div>
    </div>
  </section>


  <section class="page-section bg-image near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <div class="d-flex flex-wrap align-items-end justify-content-center">
        <h2 class="page-section-heading text-center text-white text-uppercase text-secondary mx-5">Vive la experiencia
          REALITY</h2>
        <button class="btn btn-primary btn-xl rounded" id="submitButton" type="submit">Ingresar</button>
      </div>
    </div>
  </section>


  <footer class="page-section bg-dark near text-white text-center">
    <h1>FOOTER</h1>
  </footer>
        </>
    )
  };
  
  export default Contact;
  