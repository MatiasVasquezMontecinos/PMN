import { CalendarioRRHH } from "app/components/RRHH/CalendarioRRHH";
import { GraficoRRHH } from "app/components/RRHH/GraficoRRHH";
import { ListaQuejas } from "app/components/RRHH/ListaQuejas";





export default function HomeRRHH (){
    return (
        <section>
            <div>
                <GraficoRRHH/>
            </div>
            <div>
                <CalendarioRRHH/>
            </div>
            <div>
                <ListaQuejas/>
            </div>
        </section>
    );
};