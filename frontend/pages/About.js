import { desktop, mobile, tablet } from '../assets/img/background/index'

const About = () => {
    return (<>
         {/*<!--  Section-->*/}
  <section class="page-section bg-dark bg-gradient text-white mb-0" id="about">
    <div class="container pt-5">
      {/*<!--  Section Heading-->*/}
      <div class="row justify-content-center pt-5">
        <div class="col-lg-4">
          <h2 class="h1 page-section-heading text-start text-uppercase text-white">¿Qué es REALITY NEAR?</h2>
        </div>
        <div class="col-lg-4">
          <p class="lead">­­­­Reality Near es un multimetaverso que combina las tecnologías de realidad aumentada y realidad virtual, de tal forma que los usuarios vivan sus distintas realidades trabajando juntos en armonía y de una manera que nunca antes había vivido. </p>
        </div>
      </div>
      {/*<!--  Section Content-->*/}
      <div class="row justify-content-center">
        <div class="col-lg-4 ms-auto">
          <h2 class="text-primary">¿CUÁL ES EL PROBLEMA?</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
            quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
            cupiditate numquam.</p>
            <h2 class="text-primary">UN MUNDO DE OPORTUNIDADES</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
              quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
              cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
              quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
              cupiditate numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquam culpa architecto
              quidem impedit cum saepe nobis, earum eaque rem explicabo animi suscipit repudiandae modi iure ducimus fugit
              cupiditate numquam.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="page-section bg-gradient near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <div class="d-flex flex-wrap flex-column justify-content-center">
        <h2 class="text-primary text-center my-5">TIMELINE</h2>
        <img height="400px" src={desktop} alt="" />
      </div>
    </div>
  </section>

  <section class="page-section bg-gradient near" id="near">
    <div class="container">
      {/*<!--  Section Heading-->*/}
      <div class="d-flex flex-wrap flex-column justify-content-center">
        <h2 class="text-primary text-center my-5">EL EQUIPO</h2>
        <img height="400px" src={tablet} alt="" />
      </div>
    </div>
  </section>
  
  <footer class="page-section bg-dark near text-white text-center">
    <h1>FOOTER</h1>
  </footer>
    </>
    )
  };
  
  export default About;
  