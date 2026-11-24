package cl.veterinaria.usuarios.model;

// Respuesta del login: el token JWT y los datos del usuario (sin la clave).
public record LoginResponse(String token, Usuario usuario) {
}
