"use client";

import { useState, useEffect } from "react";
import { format, addMonths, subMonths, startOfMonth, getDay, getDaysInMonth } from "date-fns";
import { es } from "date-fns/locale";
import styles from './Calendario.module.sass';

export const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDays, setMarkedDays] = useState<number[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const userEmail = localStorage.getItem("currentUser");
    setCurrentUser(userEmail);

    if (userEmail) {
      const key = `markedDays_${userEmail}_${format(currentDate, "yyyy-MM")}`;
      const storedDays = localStorage.getItem(key);
      if (storedDays) {
        setMarkedDays(JSON.parse(storedDays));
      } else {
        setMarkedDays([]);
      }
    }
  }, [currentDate]);

  const handleMarcarAsistencia = (day: number) => {
    if (!currentUser) return;

    const newMarkedDays = [...markedDays, day];
    setMarkedDays(newMarkedDays);

    const key = `markedDays_${currentUser}_${format(currentDate, "yyyy-MM")}`;
    localStorage.setItem(key, JSON.stringify(newMarkedDays));

    const formattedDate = format(currentDate, "dd MMMM yyyy", { locale: es });
    const formattedTime = format(new Date(), "HH:mm:ss");

    alert(`Se ha marcado su llegada el día ${day} de ${formattedDate} a las ${formattedTime}`);
  };

  const startDate = startOfMonth(currentDate);
  let startDay = getDay(startDate);
  startDay = startDay === 0 ? 6 : startDay - 1;
  const daysInMonth = getDaysInMonth(currentDate);
  const daysArray = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];

  return (
    <section className={styles.Calendario__box}>
      <div className={styles.Calendario__header}>
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>Anterior</button>
        <span>{format(currentDate, "MMMM yyyy", { locale: es })}</span>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Siguiente</button>
      </div>

      <div className={styles.Calendario__grid}>
        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((dayName) => (
          <div key={dayName} className={styles.Calendario__dayName}>{dayName}</div>
        ))}

        {daysArray.map((day, index) => (
          <div key={index} className={styles.Calendario__day}>
            {day ? (
              <>
                <span>{day}</span>
                <button
                  className={`${styles.Calendario__marcarAsistenciaBtn} ${markedDays.includes(day) ? styles.marcarAsistenciaBtnMarked : ''}`}
                  onClick={() => handleMarcarAsistencia(day)}
                >
                  {markedDays.includes(day) ? "Asistencia marcada" : "Marcar asistencia"}
                </button>
              </>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
