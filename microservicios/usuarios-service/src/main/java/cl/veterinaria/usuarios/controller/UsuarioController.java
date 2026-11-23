package cl.veterinaria.usuarios.controller;

import cl.veterinaria.usuarios.model.LoginRequest;
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

    // POST /api/usuarios -> registro de un usuario nuevo.
    @Operation(summary = "Registrar un usuario")
    @PostMapping
    public ResponseEntity<Usuario> registrar(@Valid @RequestBody Usuario usuario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.registrar(usuario));
    }

    // GET /api/usuarios -> lista de usuarios.
    @Operation(summary = "Listar los usuarios")
    @GetMapping
    public List<Usuario> listar() {
        return service.listar();
    }

    // PUT /api/usuarios/{id} -> actualiza los datos de un usuario.
    @Operation(summary = "Actualizar un usuario")
    @PutMapping("/{id}")
    public Usuario actualizar(@PathVariable Long id, @Valid @RequestBody Usuario usuario) {
        return service.actualizar(id, usuario);
    }

    // DELETE /api/usuarios/{id} -> elimina un usuario.
    @Operation(summary = "Eliminar un usuario")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // POST /api/usuarios/login -> inicio de sesión (401 si las credenciales no coinciden).
    @Operation(summary = "Iniciar sesión (401 si las credenciales no coinciden)")
    @PostMapping("/login")
    public Usuario login(@RequestBody LoginRequest datos) {
        return service.autenticar(datos.correo(), datos.clave());
    }
}
