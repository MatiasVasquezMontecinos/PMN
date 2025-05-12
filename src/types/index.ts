export interface Queja {
  Nombre: string;
  fecha: string;
  detalles: string;
}

export interface Solicitud {
  nombre: "Matias Vasquez";
  fecha: string;
  motivo: string;
}

export interface HoraExtra {
  Titulo: string;
  fecha: string;
  horaInicio: string;
  horaTermino: string;
  detalles: string;
}

export interface Usuario {
  username: string;
  password: string;
  rol: 'empleado' | 'supervisor' | 'rrhh';
}
