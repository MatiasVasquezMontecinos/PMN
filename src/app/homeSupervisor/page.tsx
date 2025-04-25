import { CalendarioSupervisor } from "app/components/Supervisores/CalendarioSupervisor";
import { GraficosSupervisor } from "app/components/Supervisores/GraficosSupervisor";
import { ListaHorasExtras } from "app/components/Supervisores/ListaHorasExtras";
import { ListaSolicitudes } from "app/components/Supervisores/ListaSolicitudes";


export default function HomeSupervisor() {
    return (
        <section>
            <div>
                <GraficosSupervisor/>
                <ListaHorasExtras/>   
            </div>
            <div>
                <CalendarioSupervisor/>
            </div>
            <div>
                <ListaSolicitudes/>
            </div>
        </section>
    );
};