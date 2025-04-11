export default interface Edificio {
  id: number;
  nombre_edificio: string;
  imagen_edificio: string;
  video_edificio?: string;
  indicaciones_edificio: string;
  lugar: {
    num_lugar: string;
    imagen_lugar: string;
    video_lugar: string;
    indicaciones: string;
    num_piso: string;
    tipo_lugar: string;
  };
}
