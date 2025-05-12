"use client";

import { useState, useEffect } from "react";
import styles from './Quejas.module.sass';

export const PublicarQuejas = () => {
  const [fecha, setFecha] = useState('');
  const [detalles, setDetalles] = useState('');

  useEffect(() => {
    // Cargar los datos guardados en localStorage al inicio
    const storedFecha = localStorage.getItem("quejaFecha");
    const storedDetalles = localStorage.getItem("quejaDetalles");

    if (storedFecha) setFecha(storedFecha);
    if (storedDetalles) setDetalles(storedDetalles);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fecha || !detalles) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Guardar los valores en localStorage
    localStorage.setItem("quejaFecha", fecha);
    localStorage.setItem("quejaDetalles", detalles);

    alert("Queja publicada con éxito");
  };

  return (
    <section className={styles.publicarQuejas}>
      <div className={styles.publicarQuejasHeader}>
        <div></div>
        Sección de quejas
      </div>
      <div className={styles.publicarQuejasSupervisor}>
        <div></div>
        <h5>Matias Vasquez</h5>
      </div>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label htmlFor="detalles">Detalles</label>
        <textarea
          id="detalles"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        />
        <button type="submit">Publicar</button>
      </form>
    </section>
  );
};
