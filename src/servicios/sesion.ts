// Manejo del token JWT en el navegador.
const CLAVE_TOKEN = 'vet_token';

export const guardarToken = (token: string) => localStorage.setItem(CLAVE_TOKEN, token);

export const obtenerToken = (): string | null => localStorage.getItem(CLAVE_TOKEN);

export const borrarToken = () => localStorage.removeItem(CLAVE_TOKEN);
