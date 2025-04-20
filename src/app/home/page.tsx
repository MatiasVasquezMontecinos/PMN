import { Grafico } from 'app/components/Home/Grafico'
import { HorasExtras } from 'app/components/Home/HorasExtras'
import { Solicitudes } from 'app/components/Home/Solicitudes'
import { Calendario } from 'app/components/Home/Calendario'
import styles from './home.module.sass'


export default function Home() {
    return (
        <div className={styles.homemain}>
            <div className={styles.Tiempo_grafico}>
                <div>
                    <Grafico />
                </div>
                <HorasExtras />
            </div>
            <div className={styles.calendario_container}>
                <Calendario />
            </div>
            <div className={styles.solicitudes_container}>
                <Solicitudes />
            </div>
        </div>
    )
}
