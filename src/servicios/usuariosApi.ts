import { peticion } from './http';
import type { Usuario } from '../data/Usuarios';

const URL_USUARIOS = 'http://localhost:8083/api/usuarios';

// El microservicio nunca devuelve la clave, por eso se completa vacía.
export interface UsuarioApi extends Usuario {
  id: number;
}

type RespuestaUsuario = Omit<UsuarioApi, 'clave'>;
const conClave = (u: RespuestaUsuario): UsuarioApi => ({ ...u, clave: '' });

export const registrarUsuarioApi = async (nuevo: Usuario) =>
  conClave(await peticion<RespuestaUsuario>(URL_USUARIOS, { method: 'POST', body: JSON.stringify(nuevo) }, false));

// Devuelve el token JWT y los datos del usuario.
export const loginApi = async (correo: string, clave: string) => {
  const respuesta = await peticion<{ token: string; usuario: RespuestaUsuario }>(
    `${URL_USUARIOS}/login`,
    { method: 'POST', body: JSON.stringify({ correo, clave }) },
    false
  );
  return { token: respuesta.token, usuario: conClave(respuesta.usuario) };
};

export const listarUsuarios = async () =>
  (await peticion<RespuestaUsuario[]>(URL_USUARIOS)).map(conClave);

// La clave va vacía: el microservicio la deja como estaba.
export const actualizarUsuario = async (id: number, datos: Usuario) =>
  conClave(await peticion<RespuestaUsuario>(`${URL_USUARIOS}/${id}`, { method: 'PUT', body: JSON.stringify(datos) }));

export const eliminarUsuario = (id: number) =>
  peticion<void>(`${URL_USUARIOS}/${id}`, { method: 'DELETE' });
