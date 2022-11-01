import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import igIcon from '../assets/img/social-network/instagramIcon.png'
import githubIcon from '../assets/img/social-network/githubIcon.png'
import discordIcon from '../assets/img/social-network/discordIcon.png'
import frIcon from '../assets/img/social-network/free-redditIcon.png'
import ThemeContext from '../utils/useContextTheme'
import HeaderSections from './HeaderSections'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function Contact() {
  const [openCompleted, setOpenCompleted] = useState(false)
  const [openSpinner, setOpenSpinner] = useState(false)
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueMensaje, setValueMensaje] = useState('')

  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }

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

  const handleClose = () => {
    setOpenCompleted(false)
    setOpenSpinner(false)
  }

  const handleSubmit = (event) => {
    setOpenSpinner(true)
    setTimeout(() => {
      handleClose()
      setOpenCompleted(true)
    }, 3000);
    event.preventDefault()
  }
  return (
    <section className={`${theme.bg} near w-100`} id="near">
      <div className="w-100">
        <HeaderSections
          titleSection="CONTÁCTANOS"
          descriptionSection="¿En qué podríamos ayudarte?"
          bgHeader="bg-header-contact"
        />
        <div
          className="d-flex align-items-center w-100 px-7-5porcent justify-content-between pt-5 w-100"
          id="contactFormResponsive"
        >
          <div>
            <h4 className="link-primary fs-6">{t('Envíanos un mensaje')}</h4>
            <p className={theme.txt}>
              {t('Nuestro equipo te responderá lo antes posible.')}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column w-50 justify-content-center align-items-center"
            id="contactResponsive"
          >
            <label className="w-60 me-15porcent">
              <input
                type="text"
                className="form-control"
                value={valueName}
                placeholder="Select category"
                onChange={handleChangeName}
              />
            </label>
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
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary disabled w-25"
            />
          </form>
        </div>
      </div>
      <div className="p-5 bg-img-realExperience bg-img-size-cover w-100">
        <h1 className="d-flex justify-content-center m-0 h-50 align-items-center w-100 fs-7 text-white">
          ¡SÍGUENOS!
        </h1>
        <div className="d-flex justify-content-center m-0 h-50 align-items-center w-100 py-5">
          <img src={discordIcon} alt="" className="px-2" />
          <img src={igIcon} alt="" className="px-2" />
          <img src={githubIcon} alt="" className="px-2" />
          <img src={frIcon} alt="" className="px-2" />
        </div>
      </div>
      <Modal
        open={openSpinner}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: '20px',
            border: 0,
            padding: 4,
          }}
        >
          <div className='text-center'>
            <div className="spinner-border text-secondary" role="status"></div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openCompleted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: '20px',
            border: 0,
            padding: 4,
            width: 400
          }}
        >
          <div>
            <div className="h3 text-center mb-4">¡MENSAJE ENVIADO!</div>
            <div className='text-center'>
              Tu mensaje ha sido enviado correctamente.
            </div>
            <textarea disabled cols="30" rows="3" className='form-control mx-0'>
              {valueMensaje}
            </textarea>
            <div className='mt-3 text-center'>
              Nuestro equipo enviará la respuesta a tu correo pronto.
            </div>
            <div className="text-center mt-3">
              <button className="_btn btn-lg btn-primary rounded">
                Ok
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  )
}

export default Contact
