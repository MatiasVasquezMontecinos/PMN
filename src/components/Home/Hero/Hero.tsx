import styles from './Hero.module.sass'
import Link from 'next/link'

export const Hero = () => {
    return (
        <section className={styles.Hero}>
            <h1>Bienvenido a Turnlify</h1>
            <h3>Es una aplicación para horarios laborales</h3>
            
            <div>
                <Link href="/login">
                    <button>Inicia Sesión</button>
                </Link>
                <h4>o</h4>
                <Link href="/register">
                    <button>Regístrate</button>
                </Link>
            </div>
        </section>
    );
}
