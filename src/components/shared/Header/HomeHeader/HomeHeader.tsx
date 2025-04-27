import Link from 'next/link'
import styles from './Header.module.sass'

export const HomeHeader = () => {
  return (
    <header className={styles.Header__box}>
      <nav className={styles.Header__nav}>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">Quiénes somos</Link>
          </li>
          <li>
            <button className={styles.Header__button}>Iniciar sesión</button>
          </li>
          <li>
            <button className={styles.Header__button}>Registrarse</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
