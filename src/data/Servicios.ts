import type { Servicio } from './tipos';

export const serviciosSeed: Servicio[] = [
  // Consultas
  { codigo: "SV001", categoria: "Consultas", nombre: "Consulta general", especie: "Perro / Gato", duracion: "30 min", precio: 15000, observaciones: "Atención clínica preventiva y diagnóstico básico." , imagen: "/img/Servicios/Consultas/SV001.jpg"},
  { codigo: "SV002", categoria: "Consultas", nombre: "Consulta urgencia", especie: "Perro / Gato", duracion: "30 min", precio: 25000, observaciones: "Fuera de horario +$10.000" , imagen: "/img/Servicios/Consultas/SV002.jpg"},
  { codigo: "SV003", categoria: "Consultas", nombre: "Control postoperatorio", especie: "Perro / Gato", duracion: "20 min", precio: 10000, observaciones: "Revisión de suturas y evolución quirúrgica." , imagen: "/img/Servicios/Consultas/SV003.jpg"},
  { codigo: "SV004", categoria: "Consultas", nombre: "Consulta ave / conejo", especie: "Ave / Conejo", duracion: "30 min", precio: 18000, observaciones: "Atención especializada en animales exóticos." , imagen: "/img/Servicios/Consultas/SV004.jpg"},
  { codigo: "SV005", categoria: "Consultas", nombre: "Segunda opinión médica", especie: "Todas", duracion: "40 min", precio: 20000, observaciones: "Requiere ficha previa" , imagen: "/img/Servicios/Consultas/SV005.jpg"},
  
  // Vacunación
  { codigo: "VA001", categoria: "Vacunación", nombre: "Vacuna antirrábica canina", especie: "Perro", duracion: "10 min", precio: 12000, observaciones: "Obligatoria por ley" , imagen: "/img/Servicios/Vacunacion/VA001.jpg"},
  { codigo: "VA002", categoria: "Vacunación", nombre: "Vacuna sextuple canina", especie: "Perro", duracion: "10 min", precio: 18000, observaciones: "Refuerzo anual" , imagen: "/img/Servicios/Vacunacion/VA002.jpg"},
  { codigo: "VA003", categoria: "Vacunación", nombre: "Vacuna bivalente felina", especie: "Gato", duracion: "10 min", precio: 15000, observaciones: "Refuerzo anual" , imagen: "/img/Servicios/Vacunacion/VA003.jpg"},
  { codigo: "VA004", categoria: "Vacunación", nombre: "Vacuna triple felina", especie: "Gato", duracion: "10 min", precio: 17000, observaciones: "Refuerzo anual" , imagen: "/img/Servicios/Vacunacion/VA004.jpg"},
  { codigo: "VA005", categoria: "Vacunación", nombre: "Vacuna Bordetella canina", especie: "Perro", duracion: "10 min", precio: 14000, observaciones: "Tos de las perreras" , imagen: "/img/Servicios/Vacunacion/VA005.jpg"},
  { codigo: "VA006", categoria: "Vacunación", nombre: "Vacuna antirrábica felina", especie: "Gato", duracion: "10 min", precio: 12000, observaciones: "Inmunización obligatoria" , imagen: "/img/Servicios/Vacunacion/VA006.jpg"},
  
  // Cirugía
  { codigo: "CI001", categoria: "Cirugía", nombre: "Esterilización hembra canina", especie: "Perra", duracion: "90 min", precio: 80000, observaciones: "Incluye anestesia y hospitalización 24h" , imagen: "/img/Servicios/Cirugia/CI001.jpg"},
  { codigo: "CI002", categoria: "Cirugía", nombre: "Esterilización macho canino", especie: "Perro", duracion: "60 min", precio: 60000, observaciones: "Incluye anestesia" , imagen: "/img/Servicios/Cirugia/CI002.jpg"},
  { codigo: "CI003", categoria: "Cirugía", nombre: "Esterilización hembra felina", especie: "Gata", duracion: "60 min", precio: 65000, observaciones: "Incluye anestesia y hospitalización 12h" , imagen: "/img/Servicios/Cirugia/CI003.jpg"},
  { codigo: "CI004", categoria: "Cirugía", nombre: "Esterilización macho felino", especie: "Gato", duracion: "45 min", precio: 50000, observaciones: "Incluye anestesia" , imagen: "/img/Servicios/Cirugia/CI004.jpg"},
  { codigo: "CI005", categoria: "Cirugía", nombre: "Extirpación de tumor cutáneo", especie: "Perro / Gato", duracion: "60 min", precio: 120000, observaciones: "Precio referencial; varía según tamaño" , imagen: "/img/Servicios/Cirugia/CI005.jpg"},
  { codigo: "CI006", categoria: "Cirugía", nombre: "Cesárea de urgencia", especie: "Perra / Gata", duracion: "120 min", precio: 180000, observaciones: "Atención quirúrgica obstétrica inmediata." , imagen: "/img/Servicios/Cirugia/CI006.jpg"},
  
  // Desparasitación
  { codigo: "DE001", categoria: "Desparasitación", nombre: "Desparasitación interna pequeños (<10 kg)", especie: "Perro", duracion: "5 min", precio: 8000, observaciones: "Dosis calculada por peso." , imagen: "/img/Servicios/Desparasitacion/DE001.jpg"},
  { codigo: "DE002", categoria: "Desparasitación", nombre: "Desparasitación interna medianos (10-25 kg)", especie: "Perro", duracion: "5 min", precio: 9500, observaciones: "Dosis calculada por peso." ,imagen: "/img/Servicios/Desparasitacion/DE002.jpg"},
  { codigo: "DE003", categoria: "Desparasitación", nombre: "Desparasitación interna grandes (>25 kg)", especie: "Perro", duracion: "5 min", precio: 11000, observaciones: "Dosis calculada por peso." , imagen: "/img/Servicios/Desparasitacion/DE003.jpg"},
  { codigo: "DE004", categoria: "Desparasitación", nombre: "Desparasitación interna felina", especie: "Gato", duracion: "5 min", precio: 8000, observaciones: "Comprimido palatable o pasta oral." , imagen: "/img/Servicios/Desparasitacion/DE004.jpg"},
  { codigo: "DE005", categoria: "Desparasitación", nombre: "Antiparasitario externo (pipeta)", especie: "Perro / Gato", duracion: "5 min", precio: 7500, observaciones: "Incluye aplicación" , imagen: "/img/Servicios/Desparasitacion/DE005.jpg"},
  
  // Exámenes
  { codigo: "EX001", categoria: "Exámenes", nombre: "Hemograma completo", especie: "Perro / Gato", duracion: "30 min", precio: 22000, observaciones: "Resultado en 24-48 h" , imagen: "/img/Servicios/Examenes/EX001.jpg"},
  { codigo: "EX002", categoria: "Exámenes", nombre: "Perfil bioquímico completo", especie: "Perro / Gato", duracion: "30 min", precio: 35000, observaciones: "Resultado en 24-48 h" , imagen: "/img/Servicios/Examenes/EX002.jpg"},
  { codigo: "EX003", categoria: "Exámenes", nombre: "Radiografía (1 proyección)", especie: "Perro / Gato", duracion: "20 min", precio: 28000, observaciones: "Incluye informe radiológico digital." , imagen: "/img/Servicios/Examenes/EX003.jpg"},
  { codigo: "EX004", categoria: "Exámenes", nombre: "Ecografía abdominal", especie: "Perro / Gato", duracion: "30 min", precio: 45000, observaciones: "Requiere ayuno previo de 8 horas." , imagen: "/img/Servicios/Examenes/EX004.jpg"},
  { codigo: "EX005", categoria: "Exámenes", nombre: "Test de leishmaniasis", especie: "Perro", duracion: "20 min", precio: 18000, observaciones: "Prueba serológica rápida en clínica." , imagen: "/img/Servicios/Examenes/EX005.jpg"},
  
  // Otros
  { codigo: "OT001", categoria: "Otros", nombre: "Corte de uñas", especie: "Perro / Gato", duracion: "15 min", precio: 5000, observaciones: "Manejo cuidadoso con cauterio preventivo." ,imagen: "/img/Servicios/Otros/OT001.jpg"},
  { codigo: "OT002", categoria: "Otros", nombre: "Limpieza dental", especie: "Perro / Gato", duracion: "45 min", precio: 55000, observaciones: "Requiere anestesia" , imagen: "/img/Servicios/Otros/OT002.jpg"},
  { codigo: "OT003", categoria: "Otros", nombre: "Microchip identificación", especie: "Perro / Gato", duracion: "10 min", precio: 15000, observaciones: "Incluye registro" , imagen: "/img/Servicios/Otros/OT003.jpg"},
  { codigo: "OT004", categoria: "Otros", nombre: "Hospitalización (por día)", especie: "Perro / Gato", duracion: "24 h", precio: 30000, observaciones: "Incluye monitoreo y alimentación básica" , imagen: "/img/Servicios/Otros/OT004.jpg"}
];