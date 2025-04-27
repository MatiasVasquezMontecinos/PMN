import { CalendarioSupervisor } from "app/components/Supervisores/CalendarioSupervisor";
import { GraficosSupervisor } from "app/components/Supervisores/GraficosSupervisor";
import { ListaHorasExtras } from "app/components/Supervisores/ListaHorasExtras";
import { ListaSolicitudes } from "app/components/Supervisores/ListaSolicitudes";

export default function HomeSupervisor() {
    return (
        <section className="main_box">
            <div className="left_panel">
                <GraficosSupervisor />
                <ListaHorasExtras />
            </div>
            <div className="right_panel">
                <CalendarioSupervisor />
            </div>
            <div className="left_panel">
                <ListaSolicitudes />
            </div>
        </section>
    );
};
