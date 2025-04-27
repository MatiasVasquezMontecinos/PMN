
import styles from './GraficoRRHH.module.sass'

export const GraficoRRHH = () => {
    
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