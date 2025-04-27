'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Signup.module.sass';

export const SignUp = () => {
    const router = useRouter();
    const [userType, setUserType] = useState('Empleado');

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (userType === 'Empleado') {
            router.push('/homeEmpleado');
        } else if (userType === 'Supervisor') {
            router.push('/homeSupervisor');
        } else if (userType === 'RRHH') {
            router.push('/homeRRHH');
        }
    };

    return (
        <section className={styles.SignUp__box}>
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Ingrese su email" />
                <input type="password" placeholder="Ingrese su contraseña" />
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="Empleado">Empleado</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="RRHH">Recursos humanos</option>
                </select>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className={styles.SignUp__div}>
                <h5>¿Ha perdido su contraseña? Recupérala</h5>
            </div>
        </section>
    );
};
