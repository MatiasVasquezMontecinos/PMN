'use client';

import { useRouter } from 'next/navigation';
import styles from './RegisterForm.module.sass';

export const RegisterForm = () => {
    const router = useRouter();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/login');
    };

    return (
        <section className={styles.Register__box}>
            <h1>Registro</h1>
            <h4>Bienvenido a Turnlify</h4>
            <form onSubmit={handleRegister}>
                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" required />
                
                <label>Apellido</label>
                <input type="text" placeholder="Ingrese su apellido" required />
                
                <label>Email</label>
                <input type="email" placeholder="Ingrese su correo electrónico" required />
                
                <label>Contraseña</label>
                <input type="password" placeholder="Ingrese su contraseña" required />
                
                <label>Confirmar Contraseña</label>
                <input type="password" placeholder="Confirme su contraseña" required />
                
                <select>
                    <option value="Empleado">Empleado</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="RRHH">Recursos Humanos</option>
                </select>

                <button type="submit">Registrarse</button>
            </form>
        </section>
    );
};
