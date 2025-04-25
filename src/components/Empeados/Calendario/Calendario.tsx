"use client";

import { useState } from "react";
import calendarize from "calendarize";
import { format, getMonth, getYear, addMonths, subMonths } from "date-fns";
import { es } from "date-fns/locale";

export const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = getYear(currentDate);
  const month = getMonth(currentDate);
  const weeks = calendarize(currentDate, 1);

  return (
    <div>
      <div>
        <span>{format(currentDate, "MMMM yyyy", { locale: es })}</span>
      </div>

      <div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mié</div>
        <div>Jue</div>
        <div>Vie</div>
        <div>Sáb</div>
        <div>Dom</div>
      </div>

      {weeks.map((week, i) => (
        <div key={i}>
          {week.map((day, j) => (
            <div key={j}>{day !== null ? day + 1 : ""}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
