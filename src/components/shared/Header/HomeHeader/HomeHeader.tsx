import Link from 'next/link'
import styles from './Header.module.sass'

export const HomeHeader = () => {
    return (
        <header>
            <nav>
                <ul className={styles.Header__list}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about us">Quienes somos</Link>
                    </li>
                    <li>
                        <button>Inciar sesion</button>
                    </li>
                    <li>
                        <button>Registrarse</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}