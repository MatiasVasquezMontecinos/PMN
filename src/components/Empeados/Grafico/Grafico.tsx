import styles from './Grafico.module.sass'

export const Grafico = () => {
  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h4>Horas Trabajadas</h4>
        <span>15/30</span>
        <div className={styles.progressCircle}>
          <div className={styles.circle}>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

