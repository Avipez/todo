import React from "react";
import useStorageListener from "./useStorageListener";
import "./changeAlert.css";
import gif from "../assets/giphy.gif";

const bmo = gif;

const ChangeAlert = ({ syncronize }) => {
  const { show, toggleShow } = useStorageListener(syncronize);
  if (show) {
    return (
      <div className="alert-bg">
        <div className="alert_modal">
          <p>Hubo cambios, intenta recargar la pagina</p>
          <img src={bmo}></img>
          <button onClick={() => toggleShow(false)}>
            Volver a cargar TODO´s
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ChangeAlert;
