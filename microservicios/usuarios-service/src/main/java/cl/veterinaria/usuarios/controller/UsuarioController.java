package cl.veterinaria.usuarios.controller;

import cl.veterinaria.usuarios.model.LoginRequest;
import cl.veterinaria.usuarios.model.LoginResponse;
import cl.veterinaria.usuarios.model.Usuario;
import cl.veterinaria.usuarios.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Usuarios", description = "Registro, login y administración de usuarios")
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    // POST registro de un usuario nuevo.
    @Operation(summary = "Registrar un usuario")
    @PostMapping
    public ResponseEntity<Usuario> registrar(@Valid @RequestBody Usuario usuario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.registrar(usuario));
    }

    // GET lista de usuarios.
    @Operation(summary = "Listar los usuarios")
    @GetMapping
    public List<Usuario> listar() {
        return service.listar();
    }

    // PUT actualiza los datos de un usuario.
    @Operation(summary = "Actualizar un usuario")
    @PutMapping("/{id}")
    public Usuario actualizar(@PathVariable Long id, @Valid @RequestBody Usuario usuario) {
        return service.actualizar(id, usuario);
    }

    // DELETE elimina un usuario.
    @Operation(summary = "Eliminar un usuario")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // POST inicio de sesión (401 si las credenciales no coinciden).
    @Operation(summary = "Iniciar sesión: devuelve el token JWT (401 si las credenciales no coinciden)")
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest datos) {
        return service.login(datos.correo(), datos.clave());
    }
}
