import styles from './Calendario.module.sass'

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const dias = [
  { dia: 1, estado: 'disponible' },
  { dia: 2, estado: 'disponible' },
  { dia: 3, estado: 'disponible' },
  { dia: 4, estado: 'disponible', seleccionado: true },
  { dia: 5, estado: 'disponible' },
  { dia: 6, estado: 'disponible' },
  { dia: 7, estado: 'vacio' },
  { dia: 8, estado: 'disponible' },
  { dia: 9, estado: 'disponible' },
  { dia: 10, estado: 'disponible' },
  { dia: 11, estado: 'disponible' },
  { dia: 12, estado: 'disponible' },
  { dia: 13, estado: 'disponible' },
  { dia: 14, estado: 'vacio' },
  { dia: 15, estado: 'solicitud' },
  { dia: 16, estado: 'ocupado' },
  { dia: 17, estado: 'ocupado' },
  { dia: 18, estado: 'ocupado' },
  { dia: 19, estado: 'ocupado' },
  { dia: 20, estado: 'ocupado' },
  { dia: 21, estado: 'vacio' },
  { dia: 22, estado: 'ocupado' },
  { dia: 23, estado: 'ocupado' },
  { dia: 24, estado: 'ocupado' },
  { dia: 25, estado: 'ocupado' },
  { dia: 26, estado: 'ocupado' },
  { dia: 27, estado: 'ocupado' },
  { dia: 28, estado: 'vacio' },
  { dia: 29, estado: 'ocupado' },
  { dia: 30, estado: 'ocupado' },
]

export const Calendario = () => {
  return (
    <div className={styles.calendario}>
      <h2>Abril</h2>
      <div className={styles.diasSemana}>
        {diasSemana.map((dia, i) => (
          <div key={i} className={styles.diaSemana}>{dia}</div>
        ))}
      </div>
      <div className={styles.grid}>
        {dias.map(({ dia, estado, seleccionado }, i) => (
          <div
            key={i}
            className={`${styles.celda} ${styles[estado]} ${seleccionado ? styles.seleccionado : ''}`}
          >
            <span>{dia}</span>
            {(estado !== 'vacio') && <div className={styles.estado}></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
