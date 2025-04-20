import styles from './HorasExtras.module.sass'

export const HorasExtras = () => {
  return (
    <div className={styles.container}>
      <h2>Horas extras</h2>

      <div className={styles.item}>
        <p>Limpieza</p>
        <button className={styles.Seebutton}>Ver</button>
      </div>

      <div className={styles.item}>
        <p>Ordenamiento</p>
        <button className={styles.Seebutton}>Ver</button>
      </div>

      <div className={styles.item}>
        <p>Administración</p>
        <button className={styles.Seebutton}>Ver</button>
      </div>
    </div>
  )
}
