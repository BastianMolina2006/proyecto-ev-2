package cl.veterinaria.contactos.controller;

import cl.veterinaria.contactos.model.Contacto;
import cl.veterinaria.contactos.service.ContactoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Tag(name = "Contactos", description = "Mensajes del formulario de contacto")
@RestController
@RequestMapping("/api/contactos")

@CrossOrigin(origins = "http://localhost:5173")
public class ContactoController {

    private final ContactoService service;

    public ContactoController(ContactoService service) {
        this.service = service;
    }

    // POST registra un contacto nuevo (201).
    @Operation(summary = "Registrar un mensaje de contacto")
    @PostMapping
    public ResponseEntity<Contacto> crear(@Valid @RequestBody Contacto contacto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(contacto));
    }

    // GET lista los contactos.
    @Operation(summary = "Listar los mensajes de contacto")
    @GetMapping
    public List<Contacto> listar() {
        return service.listar();
    }

    // PUT cambia el estado a ATENDIDO.
    @Operation(summary = "Marcar un mensaje como ATENDIDO")
    @PutMapping("/{id}/atendido")
    public Contacto marcarAtendido(@PathVariable Long id) {
        return service.marcarAtendido(id);
    }

    // DELETE elimina el contacto (204).
    @Operation(summary = "Eliminar un mensaje de contacto")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
