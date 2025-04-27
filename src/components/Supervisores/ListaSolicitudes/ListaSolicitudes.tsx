import styles from './ListaSolicitudes.module.sass'



export const ListaSolicitudes = () => {
    return (
        <section>
            <h3>Solicitudes Pendientes</h3>
            <div className={styles.Solicitudes__item}>
                <h6>Matias Vasquez</h6>
                <button>Ver</button>
            </div>
        </section>
    );
}