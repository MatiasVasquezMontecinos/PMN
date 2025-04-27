"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { format, addMonths, subMonths, startOfMonth, getDay, getDaysInMonth } from "date-fns";
import { es } from "date-fns/locale";

import styles from './CalendarioSupervisor.module.sass';

export const CalendarioSupervisor = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const router = useRouter();

  const startDate = startOfMonth(currentDate);
  let startDay = getDay(startDate);
  startDay = startDay === 0 ? 6 : startDay - 1;

  const daysInMonth = getDaysInMonth(currentDate);

  const daysArray = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];

  const handleVerLista = (day: number) => {
    router.push(`/lista?dia=${day}`); // pasa el día como parámetro en la URL
  };

  return (
    <section className={styles.Calendario__box}>
      <div className={styles.Calendario__header}>
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
          Anterior
        </button>
        <span>{format(currentDate, "MMMM yyyy", { locale: es })}</span>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          Siguiente
        </button>
      </div>

      <div className={styles.Calendario__grid}>
        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((dayName) => (
          <div key={dayName} className={styles.Calendario__dayName}>
            {dayName}
          </div>
        ))}

        {daysArray.map((day, index) => (
          <div key={index} className={styles.Calendario__day}>
            {day ? (
              <>
                <span>{day}</span>
                <button 
                  className={styles.Calendario__verListaBtn}
                  onClick={() => handleVerLista(day)}
                >
                  Ver lista
                </button>
              </>
            ) : (
              <span></span> // para mantener la cuadrícula alineada
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
