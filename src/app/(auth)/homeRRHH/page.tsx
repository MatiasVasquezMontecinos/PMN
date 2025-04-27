import { CalendarioRRHH } from "app/components/RRHH/CalendarioRRHH";
import { GraficoRRHH } from "app/components/RRHH/GraficoRRHH";
import { ListaQuejas } from "app/components/RRHH/ListaQuejas";





export default function HomeRRHH (){
    return (
        <section className="main_box">
            <div className="left_panel">
                <GraficoRRHH/>
            </div>
            <div className="right_panel">
                <CalendarioRRHH/>
            </div>
            <div className="left_panel">
                <ListaQuejas/>
            </div>
        </section>
    );
};