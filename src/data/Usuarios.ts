export interface Usuario {
  run: string;
  tipoUsuario: string;
  nombre: string;
  apellidos: string;
  correo: string;
  clave: string;
  fechaNacimiento?: string;
  region: string;
  comuna: string;
  direccion: string;
}

// Cuentas demo iniciales solicitadas
const USUARIOS_DEMO: Usuario[] = [
  {
    run: "111111111",
    tipoUsuario: "Cliente",
    nombre: "Cliente",
    apellidos: "Demo",
    correo: "cliente@email.com",
    clave: "1234",
    region: "Metropolitana",
    comuna: "Santiago",
    direccion: "Av. Principal 123"
  },
  {
    run: "222222222",
    tipoUsuario: "Administrador",
    nombre: "Admin",
    apellidos: "Veterinaria",
    correo: "admin@sanmarcos.cl",
    clave: "admin123",
    region: "Metropolitana",
    comuna: "Providencia",
    direccion: "Av. Los Leones 456"
  }
];

export const obtenerUsuarios = (): Usuario[] => {
  const guardados = localStorage.getItem("vet_usuarios");
  if (!guardados) {
    localStorage.setItem("vet_usuarios", JSON.stringify(USUARIOS_DEMO));
    return USUARIOS_DEMO;
  }
  return JSON.parse(guardados);
};

export const registrarUsuario = (nuevo: Usuario): boolean => {
  const lista = obtenerUsuarios();
  if (lista.some(u => u.correo.toLowerCase() === nuevo.correo.toLowerCase())) {
    return false; // El correo ya existe
  }
  lista.push(nuevo);
  localStorage.setItem("vet_usuarios", JSON.stringify(lista));
  return true;
};

export const autenticarUsuario = (correo: string, clave: string): Usuario | null => {
  const lista = obtenerUsuarios();
  const usuario = lista.find(
    u => u.correo.toLowerCase() === correo.trim().toLowerCase() && u.clave === clave
  );
  if (usuario) {
    localStorage.setItem("vet_sesion_activa", JSON.stringify(usuario));
    return usuario;
  }
  return null;
};

export const obtenerSesionActiva = (): Usuario | null => {
  const sesion = localStorage.getItem("vet_sesion_activa");
  return sesion ? JSON.parse(sesion) : null;
};

export const cerrarSesion = () => {
  localStorage.removeItem("vet_sesion_activa");
};