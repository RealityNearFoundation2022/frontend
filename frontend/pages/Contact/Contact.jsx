import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ThemeContext from "../../utils/useContextTheme";
import HeaderSections from "../HeaderSections";
import FollowInfo from "../../components/FollowInfo";
import LoadingModal from "../../components/LoadingModal";

function Contact() {
  const [openCompleted, setOpenCompleted] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(false);
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueMensaje, setValueMensaje] = useState("");

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const optionsCategory = [
    "Consulta",
    "Problemas con Nuruk",
    "Problemas con mi wallet",
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleChangeName = ({ target }) => {
    setValueName(target.value);
  };
  const handleChangeEmail = ({ target }) => {
    setValueEmail(target.value);
  };
  const handleChangeMensaje = ({ target }) => {
    setValueMensaje(target.value);
  };

  const handleClose = () => {
    setOpenCompleted(false);
    setOpenSpinner(false);
  };

  const handleSubmit = () => {
    setOpenSpinner(true);
    setTimeout(() => {
      handleClose();
      setOpenCompleted(true);
    }, 3000);
    // event.preventDefault()
  };
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
            <h4 className="link-primary fs-6">{t("Envíanos un mensaje")}</h4>
            <p className={theme.txt}>
              {t("Nuestro equipo te responderá lo antes posible.")}
            </p>
          </div>

          <div
            className="d-flex flex-column w-50 justify-content-center align-items-center py-3"
            id="contactResponsive"
          >
            <label className="w-60 me-15porcent">
              <select name="category" id="category" className="form-control">
                <option value="" selected disabled hidden>
                  {t("Selecciona Categoria")}
                </option>
                {optionsCategory.map((option) => (
                  <option value={option} key={option}>
                    {t(option)}
                  </option>
                ))}
              </select>
            </label>
            <label className="w-75">
              <input
                type="text"
                className="form-control"
                value={valueName}
                placeholder={t("Nombre")}
                onChange={handleChangeName}
              />
            </label>
            <label className="w-75">
              <input
                type="email"
                className="form-control"
                placeholder={t("Correo")}
                value={valueEmail}
                onChange={handleChangeEmail}
              />
            </label>
            <label className="w-75">
              <textarea
                type="text"
                className="form-control h-10vh"
                placeholder={t("Mensaje")}
                value={valueMensaje}
                onChange={handleChangeMensaje}
              />
            </label>
            <button
              type="submit"
              className="_btn btn btn-primary w-25"
              onClick={handleSubmit}
            >
              {t("Enviar")}
            </button>
          </div>
        </div>
      </div>
      <FollowInfo isBackground />
      <LoadingModal handleClose={handleClose} open={openSpinner} />
      <Modal
        open={openCompleted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: "20px",
            border: 0,
            padding: 4,
            width: 400,
          }}
        >
          <div>
            <div className="h3 text-center mb-4">{t("¡MENSAJE ENVIADO!")}</div>
            <div className="text-center">
              {t("Tu mensaje ha sido enviado correctamente.")}
            </div>
            <textarea disabled cols="30" rows="3" className="form-control mx-0">
              {valueMensaje}
            </textarea>
            <div className="mt-3 text-center">
              {t("Nuestro equipo enviará la respuesta a tu correo pronto.")}
            </div>
            <div className="text-center mt-3">
              <button
                type="button"
                className="_btn btn btn-lg btn-primary rounded"
                onClick={() => setOpenCompleted(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
}

export default Contact;
