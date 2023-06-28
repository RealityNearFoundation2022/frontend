import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// import { desktop, mobile, tablet } from '../../assets/img/background/index'
import Slider from 'react-slick'
import metaverseNuruk from '../../assets/img/metaverse/metaverse.png'
import ThemeContext from '../../utils/useContextTheme'
// import itemSlide from '../../assets/img/random/cabin.png'
import imgMobile from '../../assets/img/metaverse/phone.png'
import appleStore from '../../assets/img/metaverse/app-store.png'
import appleStoreEn from '../../assets/img/metaverse/app-store-en.png'
import googlePlayEn from '../../assets/img/metaverse/google-play-en.png'

import googlePlay from '../../assets/img/metaverse/google-play.png'
import HeaderSections from '../HeaderSections'
import { momentsCarousel } from '../Landing/momentsCarousel'
import Moments from '../Landing/Moments'

function Metaverso() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const lang = localStorage.getItem('lang')
  const itemsCard = [...momentsCarousel]
  const links = [
    {
      link: 'https://play.google.com/store/apps/details?id=org.realitynear.reality_near&hl=es',
      img: lang === 'es' ? googlePlay : googlePlayEn,
    },
    {
      link: 'https://apps.apple.com/pe/app/reality-near/id1645021476?l=en',
      img: lang === 'es' ? appleStore : appleStoreEn,
    },
  ]

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }

  return (
    <div className="w-100">
      {/* <!-- Masthead--> */}
      <HeaderSections
        titleSection="Metaverso"
        descriptionSection="Conoce más del multimetaverso Reality Near"
        bgHeader="bg-header-metaverse"
      />
      {/* <!--  Section--> */}
      <section
        className={`${theme.bg}  text-white px-7-5porcent py-2`}
        id="about"
      >
        <div className="w-100 pt-5">
          {/* <!--  Section Content--> */}
          <div
            className="d-flex justify-content-between"
            id="metaverseResponsive"
          >
            <div className="w-50" id="metaverseResponsiveTxt">
              <h1 className="text-primary mb-4">
                {t('NURUK: CIUDAD DE REALIDADES')}
              </h1>
              <p className={`${theme.txt}`}>
                {t(
                  'Nuruk es la principal y primera ciudad del multimetaverso 3D en Reality Near. El nombre se basa en la unión de dos palabras: new (nuevo en inglés) y uruk (la primera ciudad sobre la faz de la Tierra).',
                )}
              </p>
              <p className={`${theme.txt}`}>
                {t(
                  'Podrás encontrar infinidad de actividades en nuestro multimetaverso. Por ejemplo, podrás asistir al partido de tu equipo favorito, contratar nuevos empleados para tu empresa o incluso enseñar a hablar francés. Todo depende de tu creatividad y de cómo aprovechas los beneficios que Reality Near provee.',
                )}
              </p>
              <center className="pt-5">
                <a
                  href="https://nuruk.realitynear.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="_btn btn btn-primary btn-xl w-75"
                  >
                    {t('Dar un vistazo')}
                  </button>
                </a>
              </center>
            </div>
            <div
              className="w-50 d-flex justify-content-end"
              id="hiddenByResponsive"
            >
              <img
                src={metaverseNuruk}
                alt=""
                className="h-80 rounded obj-fit-cover w-75"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section--> */}
      <section
        className={`${theme.bg} w-100  px-7-5porcent py-5 d-flex align-items-center justify-content-center`}
      >
        <div className="w-100 d-lex align-items-center justify-content-center">
          <Slider {...settings} className="w-100 ">
            {itemsCard.map((element) => (
              <div key={element.titleEvent}>
                <img src={element.imgCarousel} alt="" className="mx-2 w-95" />
                <center>
                  <p className="fw-bold fs-5 mt-2 text-white">
                    {element.titleEvent}
                  </p>
                </center>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section>
        <Moments />
      </section>
      {/* <!--  Section--> */}
      <section
        className={`${theme.bg} px-7-5porcent w-100 text-white mb-0`}
        id="about"
      >
        <div className="w-100">
          {/* <!--  Section Content--> */}
          <div
            className="d-flex justify-content-between"
            id="metaverseResponsive"
          >
            <div className="w-50 hiddenByResponsive">
              <img
                src={imgMobile}
                alt=""
                className="w-90 obj-fit-cover rounded h-90"
              />
            </div>
            <div className="w-50 px-2" id="metaverseResponsiveTxt">
              <h1 className="text-primary">REALITY APP</h1>
              <p className={`${theme.txt}`}>
                {t(
                  'Reality Near App ofrece una nueva experiencia fusionando tecnología y realidad. Esta te permitirá ser parte de eventos, ver publicidad, completar misiones, ver avatares y muchas cosas más en la vida real usando sólo la cámara de tu teléfono. Dicho contenido te permitirá interactuar con la vida real a través de tu dispositivo móvil, generando una experiencia totalmente inmersiva y valiosa.',
                )}
                <br />
                <br />
                {t(
                  'Todo contenido creado podrás visualizarlo en las tierras de los demás usuarios y, si posees una, podrás crear y compartir tu creación con la comunidad Reality Near.',
                )}
                <br />
                <br />
                {t(
                  'En la misma aplicación contarás con una wallet, donde administrarás tus Realities y NFTs, así como tus transacciones pasadas. También podrás añadir amigos fácilmente; enviarles y recibir mensajes; y, además, ver si están conectados o cerca tuyo.',
                )}
              </p>
              <div className="d-flex justify-content-around w-100 pt-3">
                {links.map(({ link, img }) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="link_url"
                  >
                    <img src={img} alt="" className="w-100 h-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${theme.bg}  text-white px-7-5porcent py-2`}
        id="about"
      >
        <div className="w-100 pt-5">
          {/* <!--  Section Content--> */}
          <div
            className="d-flex justify-content-between"
            id="metaverseResponsive"
          >
            <div className="w-50" id="metaverseResponsiveTxt">
              <h1 className="text-primary mb-4">
                {t('CONOCE NUESTRAS TIERRAS VIRTUALES')}
              </h1>
              <h2 className="text-primary mb-4">{t('REALANDS')}</h2>
              <p className={`${theme.txt}`}>
                {t(
                  'Estas son parcelas de 10x10mts cada una que se encuentran dentro de Reality Near, las cuales podrás comprar para construir tu negocio, poner publicidad, hacer eventos, lo que quieras. También podrás comprar Realands adyacentes y elegir si deseas combinarlos, formando un Realand más grande; por ejemplo, un 2x3 o un 5x5. El máximo de Realands que se pueden combinar son de 25 Realands en total. Una vez combinados, pueden mantenerse así y venderse como un todo, o dividirse para una venta por partes.',
                )}
              </p>
              <h2 className="text-primary mb-4">{t('PATCHAS')}</h2>
              <p className={`${theme.txt}`}>
                {t(
                  'Los Patchas son NFTs sujetos a una latitud y longitud específica del plano terrenal, o sea, cada parcela cuadricular representa un espacio real. En este espacio podrás organizar eventos para la comunidad, colocar tesoros, cumplir misiones, recibir recompensas, colocar publicidad, entre muchas cosas más. Si te encuentras físicamente en un punto real vinculado a un Patcha, a través la app de Reality Near en tu celular, podrás interactuar mediante realidad aumentada con lo que se haya colocado sobre dicho espacio.',
                )}
              </p>
            </div>
            <div
              className="w-50 d-flex justify-content-end"
              id="hiddenByResponsive"
            >
              <img
                src={metaverseNuruk}
                alt=""
                className="h-80 rounded obj-fit-cover w-75"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Metaverso
