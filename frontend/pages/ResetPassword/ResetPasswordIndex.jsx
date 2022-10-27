import React, { useContext, useState } from 'react'
import ThemeContext from '../../utils/useContextTheme'

export default function ResetPasswordIndex() {
  const { theme } = useContext(ThemeContext)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [validButton, setValidButton] = useState(false)
  const [error, setError] = useState(null)
  const [errorNew, setErrorNew] = useState(null)
  const handleChangeNewPassword = (e) => {
    const { value } = e.target
    setNewPassword(value)
    const isValid = password === value
    setErrorNew(isValid ? null : 'Las contraseñas deben coincidir')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location = '/reset-password/completed'
  }
  const handleChangePassword = (e) => {
    const { value } = e.target
    setPassword(value)
    if (!/^(?=.*?[A-Z])/.test(value)) {
      setError('Debe incluir al menos una mayúscula')
    } else if (!/^(?=.*?[a-z])/.test(value)) {
      setError('Debe incluir al menos una minúscula')
    } else if (!/^(?=.*?[0-9])/.test(value)) {
      setError('Debe incluir al menos un número')
    } else if (!/^(?=.*?[#?!@$%^&*-])/.test(value)) {
      setError('Debe incluir al menos un carácter especial')
    } else if (value.length < 8) {
      setError('La contraseña debe tener por lo menos 8 carácteres')
    } else {
      setError(null)
    }
  }

  return (
    <div className="top">
      <div style={{height: '25vh'}} className="mb-5 d-flex justify-content-center align-items-center w-100 reset-psw bg-primary">
        <span className={`${theme.txt} text-light text-center h1`}>
          Restablecer Contraseña
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column w-100 justify-content-center align-items-center mb-5"
        id="contactResponsive"
      >
        <label className="w-30">
          <input
            type="text"
            className="form-control"
            value={password}
            placeholder="Ingrese su nueva contraseña"
            onChange={handleChangePassword}
          />
        </label>
        <p className="error-label">{error}</p>
        <label className="w-30 ">
          <input
            type="text"
            className="form-control"
            value={error ? '' : newPassword}
            placeholder="Repita su nueva contraseña"
            onChange={handleChangeNewPassword}
            disabled={error}
          />
        </label>
        <p className="error-label">{errorNew}</p>
        <button type="submit" className='btn-primary btn-lg rounded _btn'>Enviar</button>
      </form>
    </div>
  )
}
