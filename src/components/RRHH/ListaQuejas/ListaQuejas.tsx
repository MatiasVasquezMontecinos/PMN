import styles from './ListaQuejas.module.sass'

export const ListaQuejas = () => {
    return (
      <section className={styles.ListaQuejas__box}>
        <h3 className={styles.ListaQuejas__title}>Lista de Quejas</h3>
        <div className={styles.ListaQuejas__item}>
          <p>Matias Vasquez</p>
          <button>Ver</button>
        </div>
      </section>
    );
  }
  