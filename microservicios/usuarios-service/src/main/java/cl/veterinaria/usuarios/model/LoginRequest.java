package cl.veterinaria.usuarios.model;

// Datos que React envía para iniciar sesión.
public record LoginRequest(String correo, String clave) {
}
