"use client";

import { useState, useEffect } from "react";
import styles from "./PublicarHorasExtras.module.sass";

export const PublicarHorasExtras = () => {
  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaTermino, setHoraTermino] = useState("");
  const [detalles, setDetalles] = useState("");

  // Recuperar los datos guardados en localStorage (si existen) al montar el componente
  useEffect(() => {
    const storedFecha = localStorage.getItem("horaExtraFecha");
    const storedHoraInicio = localStorage.getItem("horaExtraHoraInicio");
    const storedHoraTermino = localStorage.getItem("horaExtraHoraTermino");
    const storedDetalles = localStorage.getItem("horaExtraDetalles");

    if (storedFecha) setFecha(storedFecha);
    if (storedHoraInicio) setHoraInicio(storedHoraInicio);
    if (storedHoraTermino) setHoraTermino(storedHoraTermino);
    if (storedDetalles) setDetalles(storedDetalles);
  }, []);

  // Manejar la publicación y guardar los datos en localStorage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const fecha = form.elements.namedItem("fecha") as HTMLInputElement;
  const inicio = form.elements.namedItem("inicio") as HTMLInputElement;
  const termino = form.elements.namedItem("termino") as HTMLInputElement;
  const detalles = form.elements.namedItem("detalles") as HTMLTextAreaElement;

  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) return;

  const newEntry = {
    fecha: fecha.value,
    inicio: inicio.value,
    termino: termino.value,
    detalles: detalles.value,
    usuario: currentUser
  };

  const existingEntries = JSON.parse(localStorage.getItem("horasExtras") || "[]");
  existingEntries.push(newEntry);
  localStorage.setItem("horasExtras", JSON.stringify(existingEntries));

  form.reset();
  };

  return (
    <section>
      <div className={styles.PublicarHorasExtras__user}>
        <div></div>
        <h5>Matias Vasquez</h5>
      </div>
      <form
        className={styles.PublicarHorasExtras__form}
        onSubmit={handleSubmit}
      >
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label htmlFor="horaInicio">Hora de inicio</label>
        <input
          type="time"
          id="horaInicio"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
        />
        <label htmlFor="horaTermino">Hora de término</label>
        <input
          type="time"
          id="horaTermino"
          value={horaTermino}
          onChange={(e) => setHoraTermino(e.target.value)}
        />
        <label htmlFor="detalles">Detalles</label>
        <textarea
          id="detalles"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
    </section>
  );
};
