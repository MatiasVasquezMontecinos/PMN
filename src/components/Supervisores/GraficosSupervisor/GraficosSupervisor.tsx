import styles from './GraficosSupervisor.module.sass'

export const GraficosSupervisor = () => {
    return (
        <section className={styles.Grafico__box}>
            <h3>Empleados presentess</h3>
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