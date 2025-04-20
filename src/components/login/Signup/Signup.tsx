'use client'

import { useRouter } from 'next/navigation'
import styles from './Signup.module.sass'

export const SignUp = () => {
    const router = useRouter()

    const handleSignUp = (e: any) => {
        e.preventDefault()
        router.push('/home')
    }

    return (
        <div className={styles.SignUp_1div}>
            <div className={styles.SignUp_11div}>
                <h2>Inicio de Sesión</h2>
                <form onSubmit={handleSignUp}>
                    <input type="email" placeholder="Ingrese su email" />
                    <input type="password" placeholder="Ingrese su contraseña" />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
            <div className={styles.SignUp_12div}>
                <h5>¿Ha perdido su contraseña? Recupérala</h5>
            </div>
        </div>
    )
}
