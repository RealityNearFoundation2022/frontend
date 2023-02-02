import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../utils/useContextTheme";
import { postData } from "../../api/methods";
import "../../assets/css/components/events.css";
import LoadingModal from "../../components/LoadingModal";
export default function ResetPasswordIndex() {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [validButton, setValidButton] = useState(false)
  const [error, setError] = useState(null);
  const [errorNew, setErrorNew] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeNewPassword = (e) => {
    const { value } = e.target;
    setNewPassword(value);
    const isValid = password === value;
    setErrorNew(isValid ? null : "Las contraseñas deben coincidir");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const body = {
        // eslint-disable-next-line camelcase
        token: "",
        new_password: password,
      };
      await postData("reset-password", body);

      navigate("/reset-password/completed");
    } catch {
      navigate("/server-error");
    } finally {
      setIsLoading(false);
    }
  };

  function handleClose() {
    setIsLoading(false);
  }

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (!/^(?=.*?[A-Z])/.test(value)) {
      setError("Debe incluir al menos una mayúscula");
    } else if (!/^(?=.*?[a-z])/.test(value)) {
      setError("Debe incluir al menos una minúscula");
    } else if (!/^(?=.*?[0-9])/.test(value)) {
      setError("Debe incluir al menos un número");
    } else if (!/^(?=.*?[#?!@$%^&*-])/.test(value)) {
      setError("Debe incluir al menos un carácter especial");
    } else if (value.length < 8) {
      setError("La contraseña debe tener por lo menos 8 carácteres");
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <LoadingModal open={isLoading} handleClose={handleClose} />
      <div className="mb-5 py-5 text-center w-100 reset-psw bg-primary bg-img-realExperience">
        <span className={`${theme.txt} text-light h1 `}>
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
            value={error ? "" : newPassword}
            placeholder="Repita su nueva contraseña"
            onChange={handleChangeNewPassword}
            disabled={error}
          />
        </label>
        <p className="error-label">{errorNew}</p>
        <button type="submit" className="btn btn-primary btn-lg rounded _btn">
          Enviar
        </button>
      </form>
    </div>
  );
}
