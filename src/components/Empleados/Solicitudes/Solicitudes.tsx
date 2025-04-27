import styles from './Solicitudes.module.sass'

export const Solicitudes = () => {
  return (
    <section className={styles.Solicitudes__box}>
      <h2>Solicitudes</h2>
      <div>
        <h4>Supervisor encargado</h4>
        <div>
          <div></div>
          <span>Matias Vasquez</span>
        </div>
      </div>
      <form action="#">
        <label htmlFor="">Fecha</label>
        <input type="date" />
        <label htmlFor="">Motivo</label>
        <textarea className={styles.textarea}></textarea>
        <button className={styles.Sendbutton}>Solicitar permiso</button>
      </form>
    </section>
  );
}
