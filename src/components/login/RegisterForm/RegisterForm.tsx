import styles from './RegisterForm.module.sass'
import Link from 'next/link'

export const RegisterForm = () => {
    return (
        <section className={styles.Register__box}>
            <h1>Registro</h1>
            <h4>Bienvenido a turnlify</h4>
            <form action="#">
                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />
                <label>Apellido</label>
                <input type="text" placeholder="Ingrese su apellido" />
                <label>Email</label>
                <input type="text" placeholder="Ingrese su correo electrónico" />
                <label>Contraseña</label>
                <input type="password" placeholder="Ingrese su contraseña" />
                <label>Validación de la Contraseña</label>
                <input type="password" placeholder="Ingrese nuevamente su contraseña" />
                <select>
                    <option value="Empleado">Empleado</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="RRHH">Recursos Humanos</option>
                </select>
                <Link href="/login">
                    <button type="button">Registrarse</button>
                </Link>
            </form>
        </section>
    );
}
