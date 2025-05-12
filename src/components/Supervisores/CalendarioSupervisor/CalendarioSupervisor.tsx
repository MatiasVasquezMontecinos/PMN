"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { format, addMonths, subMonths, startOfMonth, getDay, getDaysInMonth } from "date-fns";
import { es } from "date-fns/locale";

import styles from './CalendarioSupervisor.module.sass';

export const CalendarioSupervisor = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [popupVisible, setPopupVisible] = useState(false);
  const [attendees, setAttendees] = useState<string[]>([]); // Lista de personas que asistieron
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
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const attendees: string[] = [];

  users.forEach((user: any) => {
    const key = `markedDays_${user.email}_${format(currentDate, "yyyy-MM")}`;
    const markedDays = JSON.parse(localStorage.getItem(key) || "[]");
    if (markedDays.includes(day)) {
      attendees.push(`${user.name} ${user.surname}`);
    }
  });

  setAttendees(attendees);
  setPopupVisible(true);
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

      {/* Popup de la lista de asistentes */}
      {popupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Asistentes del día</h3>
            <ul>
              {attendees.length > 0 ? (
                attendees.map((attendee, index) => (
                  <li key={index}>{attendee}</li>
                ))
              ) : (
                <li>No hay asistentes registrados.</li>
              )}
            </ul>
            <button className={styles.closeBtn}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
