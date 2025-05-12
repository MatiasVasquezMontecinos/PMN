"use client"

import { useRouter, usePathname } from 'next/navigation';
import styles from './MainHeader.module.sass'

export const MainHeader = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleButtonClick = () => {
        if (pathname === '/homeEmpleado') {
            router.push('/quejas');
        } else if (pathname === '/quejas') {
            router.push('/homeEmpleado');
        } else if (pathname === '/homeSupervisor') {
            router.push('/extrahours');
        } else if (pathname === '/extrahours') {
            router.push('/homeSupervisor');
        }
    };

    const handleLogout = () => {
        // Limpia toda la información almacenada del usuario
        localStorage.clear();

        // Redirige al login
        router.push('/login');
    };

    const getButtonText = () => {
        if (pathname === '/homeEmpleado') return 'Quejas';
        if (pathname === '/quejas') return 'Atrás';
        if (pathname === '/homeSupervisor') return 'Horas Extras';
        if (pathname === '/extrahours') return 'Atrás';
        return 'Acción';
    };

    const shouldShowActionButton = () => {
        return pathname !== '/homeRRHH';
    };

    return (
        <header>
            <nav className={styles.MainHeader__box}>
                {shouldShowActionButton() ? (
                    <button onClick={handleButtonClick}>
                        {getButtonText()}
                    </button>
                ) : (
                    <div style={{ visibility: 'hidden' }}>
                        Placeholder
                    </div>
                )}
                <h2>Turnlify</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </nav>
        </header>
    );
};
