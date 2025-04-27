import { Grafico } from 'app/components/Empleados/Grafico';
import { HorasExtras } from 'app/components/Empleados/HorasExtras';
import { Solicitudes } from 'app/components/Empleados/Solicitudes';
import { Calendario } from 'app/components/Empleados/Calendario';



export default function Home() {
    return (
        <section className='main_box'>
            <div className="left_panel">
                <Grafico/>
                <HorasExtras/>
            </div>
            <div className="right_panel">
                <Calendario/>
            </div>
            <div className="left_panel">
                <Solicitudes/>
            </div>
        </section>
    );
};
