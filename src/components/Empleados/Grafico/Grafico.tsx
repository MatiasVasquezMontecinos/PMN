import styles from './Grafico.module.sass';

export const Grafico = () => {
  return (
    <section className={styles.Grafico__box}>
      <h3>Horas Trabajadas</h3>
      <div className={styles.Grafico__row}>
      <span>15/30</span>
        <div className={styles.Grafico__roundedBox}>
          <div>
            <span>50%</span>
          </div>
        </div>  
      </div>
    </section>
  );

}