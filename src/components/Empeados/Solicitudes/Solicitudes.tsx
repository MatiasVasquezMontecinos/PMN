import styles from './Solicitudes.module.sass'

export const Solicitudes = () => {
  return (
    <div className={styles.solicitud_1div}>
      <h2>Solicitudes</h2>
      <div>
        <h3>Supervisor encargado</h3>
        <div className={styles.supervisor}>
          <div className={styles.avatar}></div>
          <span>Matias Vasquez</span>
        </div>
      </div>
      <div>
        <h4>Fecha</h4>
        <span>15/04/2025</span>
      </div>
      <div>
        <h4>Motivo</h4>
        <textarea className={styles.textarea}></textarea>
      </div>
      <button className={styles.Sendbutton}>Solicitar permiso</button>
    </div>
  );
}
