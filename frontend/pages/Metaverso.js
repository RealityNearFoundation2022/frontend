const Metaverso = () => {
    return (
        <>
         {/*<!-- Masthead-->*/}
  <header class="masthead bg-primary text-white text-center bg-image min-vh-80">
    <div class="container d-flex align-items-center flex-column">
      {/*<!-- Masthead Heading-->*/}
      <h1 class="masthead-heading text-uppercase mb-0">Lorem</h1>
    </div>
  </header>
  {/*<!--  Section-->*/}
  <section class="page-section bg-dark bg-gradient text-white mb-0" id="about">
    <div class="container pt-5">
      {/*<!--  Section Content-->*/}
      <div class="row justify-content-center">
        <div class="col-lg-4 ms-auto">
          <h2 class="text-primary">NURUK: CIUDAD DE REALIDADES</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa
            architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa
            architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <img height="400px" src="./assets/img/background/bg-image-mobile.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
  {/*<!-- Section-->*/}
  <section class="page-section bg-gradient near" id="near">
    <div class="container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*<!--  Section-->*/}
  <section class="page-section bg-dark bg-gradient text-white mb-0" id="about">
    <div class="container pt-5">
      {/*<!--  Section Content-->*/}
      <div class="row justify-content-center">
        <div class="col-lg-4 ms-auto">
          <img height="400px" src="./assets/img/background/bg-image-mobile.jpg" alt="" srcset="" />
        </div>
        <div class="col-lg-4 me-auto">
          <h2 class="text-primary">REALITY APP</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa
            architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa
            architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.</p>
        </div>
      </div>
    </div>
  </section>
  <footer class="page-section bg-dark near text-white text-center">
    <h1>FOOTER</h1>
  </footer>        
        </>
    )
  };
  
  export default Metaverso;
  