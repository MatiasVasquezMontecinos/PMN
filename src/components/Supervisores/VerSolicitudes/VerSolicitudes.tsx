"use client";

import { useState, useEffect } from "react";
import styles from './VerSolicitudes.module.sass'; // Si necesitas un archivo de estilos personalizado

export const VerSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState<any[]>([]);

  useEffect(() => {
    // Recuperar las solicitudes desde localStorage
    const storedSolicitudes = localStorage.getItem('solicitudes');
    if (storedSolicitudes) {
      setSolicitudes(JSON.parse(storedSolicitudes));
    }
  }, []);

  const handlePermitir = (id: string) => {
    // Aquí deberías agregar la lógica para permitir la solicitud, tal vez actualizando el estado en localStorage.
    alert(`Solicitud ${id} permitida.`);
  };

  const handleDenegar = (id: string) => {
    // Aquí deberías agregar la lógica para denegar la solicitud.
    alert(`Solicitud ${id} denegada.`);
  };

  return (
    <section className={styles.solicitudes}>
      <h2>Lista de Solicitudes</h2>

      {solicitudes.length === 0 ? (
        <p>No hay solicitudes pendientes.</p>
      ) : (
        <ul>
          {solicitudes.map((solicitud) => (
            <li key={solicitud.id} className={styles.solicitud}>
              <div>
                <h4>{solicitud.nombre}</h4>
                <p>{solicitud.fecha}</p>
                <p>{solicitud.detalles}</p>
              </div>

              <div>
                <button onClick={() => handlePermitir(solicitud.id)}>Permitir</button>
                <button onClick={() => handleDenegar(solicitud.id)}>Denegar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
