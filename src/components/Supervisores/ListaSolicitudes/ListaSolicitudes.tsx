"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import styles from './ListaSolicitudes.module.sass';

export const ListaSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Recuperar las solicitudes desde localStorage
    const storedSolicitudes = localStorage.getItem('solicitudes');
    if (storedSolicitudes) {
      setSolicitudes(JSON.parse(storedSolicitudes));
    }
  }, []);

  const handleVerSolicitudes = () => {
    router.push('/versolicitudes');
  };

  return (
    <section>
      <h3>Solicitudes Pendientes</h3>

      {solicitudes.length === 0 ? (
        <p>No hay solicitudes pendientes.</p>
      ) : (
        solicitudes.map((solicitud) => (
          <div key={solicitud.id} className={styles.Solicitudes__item}>
            <h6>{solicitud.nombre}</h6>
            <button onClick={handleVerSolicitudes}>Ver</button>
          </div>
        ))
      )}

      {/* Botón de redirección */}
      <button onClick={handleVerSolicitudes}>Ver todas las solicitudes</button>
    </section>
  );
};
