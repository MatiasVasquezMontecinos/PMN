import styles from './HorasExtras.module.sass'

export const HorasExtras = () => {
  return (
    <section>
      <h3>Horas extras</h3>
      <div className={styles.HorasExtras__box}>
        <p>Limpieza</p>
        <button>Ver</button>
      </div>
    </section>
  );
};
