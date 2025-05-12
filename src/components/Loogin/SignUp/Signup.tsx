'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Signup.module.sass';
import { Usuario } from 'app/types'; // asegúrate de que esta ruta sea correcta

export const SignUp = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<'empleado' | 'supervisor' | 'rrhh'>('empleado');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: Usuario = {
      username: email,
      password,
      rol: userType,
    };

    localStorage.setItem('usuarioActual', JSON.stringify(userData));

    // Redirigir según el rol
    switch (userType) {
      case 'empleado':
        router.push('/homeEmpleado');
        break;
      case 'supervisor':
        router.push('/homeSupervisor');
        break;
      case 'rrhh':
        router.push('/homeRRHH');
        break;
    }
  };

  return (
    <section className={styles.SignUp__box}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Ingrese su email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={userType} onChange={(e) => setUserType(e.target.value as Usuario['rol'])}>
          <option value="empleado">Empleado</option>
          <option value="supervisor">Supervisor</option>
          <option value="rrhh">Recursos Humanos</option>
        </select>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className={styles.SignUp__div}>
        <h5>¿Ha perdido su contraseña? Recupérala</h5>
      </div>
    </section>
  );
};
