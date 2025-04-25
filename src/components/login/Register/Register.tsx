export const Register = () => {
    return (
        <section>
            <form action="#">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />
                <label htmlFor="">Apellido</label>
                <input type="text" placeholder="Ingrese su apellido"/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Ingrese su correo electrinico" />
                <label htmlFor="text">Contraseña</label>
                <input type="text" placeholder="Ingrese su contraseña"/>
                <label>Validacion de la Contraseña</label>
                <input type="text" placeholder="Ingrese nuevamente si contraseña" />
                <button type="submit">Registrarse</button>
            </form>
        </section>
    );
}