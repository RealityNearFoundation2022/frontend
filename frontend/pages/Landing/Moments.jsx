/* eslint-disable global-require */
import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ThemeContext from '../../utils/useContextTheme'
import { getData } from '../../api/methods'
import '../../assets/css/components/events.css'
import LoadingModal from '../../components/LoadingModal'
import imgBack from '../../assets/img/random/No_Photo_Available.png'

export default function Moments() {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const api = process.env.REACT_APP_API
  // const navigate = useNavigate()

  const [events, setEvents] = useState([])
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

  useEffect(() => {
    apiGet()
  }, [])

  function handleClose() {
    setIsLoading(false)
  }

  const apiGet = async () => {
    try {
      setIsLoading(true)
      const eventsData = await getData('events')
      setEvents(eventsData)
    } catch {
      // navigate("/server-error");
    } finally {
      setIsLoading(false)
    }
  }
  return events.length ? (
    <section
      className={`${theme.bg} ${
        window.innerHeight / window.innerWidth < 0.8 && 'h-100vh'
      } near pt-5`}
      id="near"
    >
      <LoadingModal open={isLoading} handleClose={handleClose} />
      <div className="w-100 h-100 mt-2">
        <p
          className={`${theme.txt} text-uppercase fs-7 px-3porcent font-source-sans-3 fw-bold `}
        >
          {t('Conoce los eventos del momento')}
        </p>
        <div className="w-100 bg-primary h-70 d-flex align-items-center py-5 mt-2">
          <Slider {...settings} className="w-90 ps-5porcent">
            {events.map(({ title, media }) => (
              <div className="events-img" key={title}>
                <img
                  src={media?.length ? `${api}${media[0]?.path}` : imgBack}
                  alt=""
                  className="events-img mx-2 w-95 events-img"
                />

                <center>
                  <p className="fw-bold fs-5 mt-2 text-white">{title}</p>
                </center>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  ) : (
    <></>
  )
}
