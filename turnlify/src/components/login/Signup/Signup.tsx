import styles from './Signup.module.sass'

export const SignUp = () => {
    return (
        <div className={styles.SignUp_1div}>
            <div className={styles.SignUp_11div}>
                <h2>Incio de Sesion</h2>
                <form action="#">
                    <input type="text" placeholder="Ingrese su email" />
                    <input type="text" placeholder="Ingrese su contraseña"/>
                    <button type="submit">Inciar Sesion</button>
                </form>
            </div>
            <div className={styles.SignUp_12div}>
                <h5>¿Ha perdido su contraseña?, Recuperela</h5>
            </div>
        </div>
    )
}