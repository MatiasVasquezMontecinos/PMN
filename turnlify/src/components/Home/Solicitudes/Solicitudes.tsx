import styles from './Solicitudes.module.sass'

export const Solicitudes = () => {
    return (
        <div className={styles.solicitud_1div}>
            <div>
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
                    <p>15/04/2025</p>
                </div>

                <div>
                    <h4>Motivo</h4>
                    <textarea className={styles.textarea}></textarea>
                </div>

                <button className={styles.Sendbutton} type="submit">Solicitar permiso</button>
            </div>
        </div>
    )
}
