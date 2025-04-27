import styles from './PublicarHorasExtras.module.sass'

export const PublicarHorasExtras = () => {
    return (
        <section>
            <div className={styles.PublicarHorasExtras__user}>
                <div></div>
                <h5>Matias Vasquez</h5>
            </div>
            <form className={styles.PublicarHorasExtras__form} action="#">
                <label htmlFor="">Fecha</label>
                <input type="date" />
                <label htmlFor="">Hora de incio</label>
                <input type="#" />
                <label htmlFor="">Hora de termino</label>
                <input type="#" />
                <label htmlFor="">Detalles</label>
                <textarea name="" id=""></textarea>
                <button type="submit">Publicar</button>
            </form>
        </section>
    );
}