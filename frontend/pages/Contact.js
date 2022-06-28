import React, { useContext, useEffect, useState } from 'react'
import igIcon from '../assets/img/random/igIcon.png'
import ThemeContext from '../utils/useContextTheme'

function Contact() {
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueMensaje, setValueMensaje] = useState('')

  const { theme } = useContext(ThemeContext)

  const handleChangeName = ({ target }) => {
    setValueName(target.value)
  }
  const handleChangeEmail = ({ target }) => {
    setValueEmail(target.value)
  }
  const handleChangeMensaje = ({ target }) => {
    setValueMensaje(target.value)
  }
  useEffect(() => {
    console.log(valueName)
  }, [valueName])

  const handleSubmit = () => {}
  return (
    <section className={`${theme.bg} near w-100`} id="near">
      <div className="w-100 page-section">
        <div className="bg-gray px-10porcent py-5">
          <p className="title text-uppercase text-primary">Contáctanos</p>
          <p>¿En qué podríamos ayudarte?</p>
        </div>
        <div className="d-flex align-items-center container justify-content-between pt-5 w-100 h-40vh">
          <h4 className="">Envíanos un mensaje</h4>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center w-50 justify-content-center"
          >
            <label className="w-75">
              <input
                type="text"
                className="form-control"
                value={valueName}
                placeholder="Nombre"
                onChange={handleChangeName}
              />
            </label>
            <label className="w-75">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={valueEmail}
                onChange={handleChangeEmail}
              />
            </label>
            <label className="w-75">
              <textarea
                type="text"
                className="form-control h-10vh"
                placeholder="Mensaje"
                value={valueMensaje}
                onChange={handleChangeMensaje}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="w-100 h-20vh text-white bg-green">
        <center>
          <p className="p-5">¡ÚNETENOS!</p>
        </center>
      </div>
      <div className=" w-100 d-flex align-items-center justify-content-around">
        <img src={igIcon} alt="" />
        <img src={igIcon} alt="" />
        <img src={igIcon} alt="" />
      </div>
    </section>
  )
}

export default Contact

// <Hero />

// {/* <!-- Section--> */}
// <section className="page-section bg-secondary near" id="near">
//   <div className="container">
//     {/* <!--  Section Heading--> */}
//     <h2 className="page-section-heading text-center text-white text-uppercase text-secondary mb-5">
//       Conoce los eventos del momento
//     </h2>
//     {/* <!--  Slider Items--> */}
//     <div
//       id="carouselExampleControls"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           {/* <!--  Grid Items--> */}
//           <div className="row justify-content-center">
//             {/* <!--  Item 1--> */}
//             <div className="col-md-4 col-lg-3 mb-5">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal1"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/cabin.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 2--> */}
//             <div className="col-md-4 col-lg-3 mb-5">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal2"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/cake.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 3--> */}
//             <div className="col-md-4 col-lg-3 mb-5">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal3"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/circus.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 3--> */}
//             <div className="col-md-4 col-lg-3 mb-5">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal3"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/circus.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           {/* <!--  Grid Items--> */}
//           <div className="row justify-content-center">
//             {/* <!--  Item 4--> */}
//             <div className="col-md-4 col-lg-3 mb-5 mb-lg-0">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal4"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/game.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 5--> */}
//             <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal5"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/safe.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 6--> */}
//             <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal6"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/submarine.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//             {/* <!--  Item 5--> */}
//             <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
//               <div
//                 className="near-item mx-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#nearModal5"
//               >
//                 <div className="near-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                   <div className="near-item-caption-content text-center text-white">
//                     <i className="fas fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img
//                   className="img-fluid"
//                   src="assets/img/random/safe.png"
//                   alt="..."
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="prev"
//       >
//         <span
//           className="carousel-control-prev-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="next"
//       >
//         <span
//           className="carousel-control-next-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   </div>
// </section>

// {/* <!--  Section--> */}
// <section
//   className="page-section bg-dark bg-gradient text-white mb-0"
//   id="about"
// >
//   <div className="container">
//     {/* <!--  Section Heading--> */}
//     <h2 className="h1 page-section-heading text-start text-uppercase text-white mb-5">
//       Realitytoken
//     </h2>
//     {/* <!--  Section Content--> */}
//     <div className="row justify-content-center">
//       <div className="col-lg-4 ms-auto">
//         <p className="lead">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Corrupti aliquam culpa architecto quidem impedit cum saepe
//           nobis, earum eaque rem explicabo animi suscipit repudiandae modi
//           iure ducimus fugit cupiditate numquam. Lorem ipsum dolor sit
//           amet, consectetur adipisicing elit. Corrupti aliquam culpa
//           architecto quidem impedit cum saepe nobis, earum eaque rem
//           explicabo animi suscipit repudiandae modi iure ducimus fugit
//           cupiditate numquam. Lorem ipsum dolor sit amet, consectetur
//           adipisicing elit. Corrupti aliquam culpa architecto quidem
//           impedit cum saepe nobis, earum eaque rem explicabo animi
//           suscipit repudiandae modi iure ducimus fugit cupiditate numquam.
//         </p>
//       </div>
//       <div className="col-lg-4 me-auto">
//         <p className="lead">Image</p>
//       </div>
//     </div>
//     {/* <!--  Section Button--> */}
//     <div className="d-flex flex-wrap align-items-end justify-content-center">
//       <div className="p-4">
//         <button
//           className="btn btn-primary btn-xl rounded"
//           id="submitButton"
//           type="submit"
//         >
//           ADQUIRIR REALITIES
//         </button>
//       </div>
//       <div className="p-4 d-flex flex-column align-items-center">
//         <p className="lead">¿No tienes una wallet?</p>
//         <button
//           className="btn btn-secondary btn-xl rounded"
//           id="submitButton"
//           type="submit"
//         >
//           CREA TU WALLET NEAR
//         </button>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="page-section bg-image near" id="near">
//   <div className="container">
//     {/* <!--  Section Heading--> */}
//     <div className="d-flex flex-wrap align-items-end justify-content-center">
//       <h2 className="page-section-heading text-center text-white text-uppercase text-secondary mx-5">
//         Vive la experiencia REALITY
//       </h2>
//       <button
//         className="btn btn-primary btn-xl rounded"
//         id="submitButton"
//         type="submit"
//       >
//         Ingresar
//       </button>
//     </div>
//   </div>
// </section>

// <footer className="page-section bg-dark near text-white text-center">
//   <h1>FOOTER</h1>
// </footer>
