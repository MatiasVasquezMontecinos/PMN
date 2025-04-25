import styles from './Hero.module.sass'


export const Hero = () => {
    
    return (
        <section className={styles.Hero}>
            <h1>Bienvenido a Turnlify</h1>
            <h3>Es un aplicacion para horarios Laborales</h3>
            
            <div>
                <button>Incia Sesion</button>
                <h4>o</h4>
                <button>Registrate  </button>
            </div>
        </section>
    );
}

  