import { Grafico } from 'app/components/Empeados/Grafico';
import { HorasExtras } from 'app/components/Empeados/HorasExtras';
import { Solicitudes } from 'app/components/Empeados/Solicitudes';
import { Calendario } from 'app/components/Empeados/Calendario';



export default function Home() {
    return (
        <section>
            <div>
                <Grafico />
                <HorasExtras />
            </div>
            <div>
                <Calendario/>
            </div>
            <div>
                <Solicitudes />
            </div>
        </section>
    );
};
