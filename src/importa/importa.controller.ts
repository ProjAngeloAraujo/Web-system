import { ImportaAppointment } from "./importa.appointment.js";

export class ImportaController {

    private importaAppointment = new ImportaAppointment()

    public importar(): void {
        this.importaAppointment.importar();
    }
    
}