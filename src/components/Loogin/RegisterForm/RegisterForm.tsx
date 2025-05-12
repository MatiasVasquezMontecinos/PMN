'use client'; 

import { useRouter } from 'next/navigation';
import styles from './RegisterForm.module.sass';

export const RegisterForm = () => {
    const router = useRouter();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const name = form.elements.namedItem("name") as HTMLInputElement;
        const surname = form.elements.namedItem("surname") as HTMLInputElement;
        const email = form.elements.namedItem("email") as HTMLInputElement;
        const password = form.elements.namedItem("password") as HTMLInputElement;
        const confirmPassword = form.elements.namedItem("confirmPassword") as HTMLInputElement;
        const role = form.elements.namedItem("role") as HTMLSelectElement;

        if (password.value !== confirmPassword.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const newUser = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
            role: role.value
        };

        // Recuperar usuarios anteriores del localStorage
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

        // Verificar si el correo ya está registrado
        if (existingUsers.some((user: any) => user.email === newUser.email)) {
            alert("Este correo ya está registrado.");
            return;
        }

        // Guardar la nueva lista de usuarios
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Redirigir al login
        router.push('/login');
    };

    return (
        <section className={styles.Register__box}>
            <h1>Registro</h1>
            <h4>Bienvenido a Turnlify</h4>
            <form onSubmit={handleRegister}>
                <label>Nombre</label>
                <input type="text" name="name" required />
                
                <label>Apellido</label>
                <input type="text" name="surname" required />
                
                <label>Email</label>
                <input type="email" name="email" required />
                
                <label>Contraseña</label>
                <input type="password" name="password" required />
                
                <label>Confirmar Contraseña</label>
                <input type="password" name="confirmPassword" required />
                
                <label>Rol</label>
                <select name="role" required>
                    <option value="Empleado">Empleado</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="RRHH">Recursos Humanos</option>
                </select>

                <button type="submit">Registrarse</button>
            </form>
        </section>
    );
};
