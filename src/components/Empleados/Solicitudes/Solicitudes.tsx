"use client";

import { useState, useEffect } from "react";
import styles from './Solicitudes.module.sass';

export const Solicitudes = () => {
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  useEffect(() => {
    // Cargar los datos guardados en localStorage al inicio
    const storedFecha = localStorage.getItem("solicitudFecha");
    const storedMotivo = localStorage.getItem("solicitudMotivo");

    if (storedFecha) setFecha(storedFecha);
    if (storedMotivo) setMotivo(storedMotivo);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guardar los valores en localStorage
    localStorage.setItem("solicitudFecha", fecha);
    localStorage.setItem("solicitudMotivo", motivo);

    alert("Solicitud enviada con éxito");
  };

  return (
    <section className={styles.Solicitudes__box}>
      <h2>Solicitudes</h2>
      <div>
        <h4>Supervisor encargado</h4>
        <div>
          <div></div>
          <span>Matias Vasquez</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label htmlFor="motivo">Motivo</label>
        <textarea
          id="motivo"
          className={styles.textarea}
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        />
        <button type="submit" className={styles.Sendbutton}>
          Solicitar permiso
        </button>
      </form>
    </section>
  );
};
  