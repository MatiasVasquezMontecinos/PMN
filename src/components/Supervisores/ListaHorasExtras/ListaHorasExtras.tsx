"use client";

import { useEffect, useState } from "react";
import styles from "./ListaHorasExtras.module.sass";

export const ListaHorasExtras = () => {
  const [publicaciones, setPublicaciones] = useState<any[]>([]);

  useEffect(() => {
    // Obtener las publicaciones guardadas en localStorage
    const storedPublicaciones = localStorage.getItem("horasExtras");
    if (storedPublicaciones) {
      setPublicaciones(JSON.parse(storedPublicaciones));
    }
  }, []);

  const handleDelete = (index: number) => {
    // Eliminar una publicación de la lista
    const updatedPublicaciones = publicaciones.filter((_, i) => i !== index);
    setPublicaciones(updatedPublicaciones);
    localStorage.setItem("horasExtras", JSON.stringify(updatedPublicaciones));
  };

  const handleEdit = (index: number) => {
    // Aquí podrías implementar la lógica para editar la publicación
    alert(`Editar publicación: ${index}`);
  };

  return (
    <section className={styles.HoraExtra__section}>
      <h4>Publicaciones</h4>
      <div className={styles.HorasExtras__box}>
        {publicaciones.length > 0 ? (
          publicaciones.map((publicacion, index) => (
            <div key={index} className={styles.HorasExtras__item}>
              <h6>{publicacion.fecha}</h6>
              <div className={styles.HorasExtras__actions}>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay publicaciones de horas extras.</p>
        )}
      </div>
    </section>
  );
};
