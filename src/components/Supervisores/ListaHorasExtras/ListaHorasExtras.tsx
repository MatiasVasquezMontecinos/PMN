import styles from './ListaHorasExtras.module.sass'

export const ListaHorasExtras = () => {
    return (
        <section className={styles.HoraExtra__section}>
            <h4>Publicaciones</h4>
            <div className={styles.HorasExtras__box}>
                <div className={styles.HorasExtras__item}>
                    <h6>Titulo</h6>
                    <div className={styles.HorasExtras__actions}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
