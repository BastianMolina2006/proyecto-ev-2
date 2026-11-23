package cl.veterinaria.inventario.controller;

import cl.veterinaria.inventario.model.Servicio;
import cl.veterinaria.inventario.service.ServicioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Servicios", description = "Servicios que ofrece la clínica")
@RestController
@RequestMapping("/api/servicios")
@CrossOrigin(origins = "http://localhost:5173")
public class ServicioController {

    private final ServicioService service;

    public ServicioController(ServicioService service) {
        this.service = service;
    }

    @Operation(summary = "Listar los servicios")
    @GetMapping
    public List<Servicio> listar() {
        return service.listar();
    }

    @Operation(summary = "Obtener un servicio por código")
    @GetMapping("/{codigo}")
    public Servicio obtener(@PathVariable String codigo) {
        return service.obtener(codigo);
    }

    @Operation(summary = "Crear un servicio (409 si el código ya existe)")
    @PostMapping
    public ResponseEntity<Servicio> crear(@Valid @RequestBody Servicio servicio) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.crear(servicio));
    }

    @Operation(summary = "Actualizar un servicio")
    @PutMapping("/{codigo}")
    public Servicio actualizar(@PathVariable String codigo, @Valid @RequestBody Servicio servicio) {
        return service.actualizar(codigo, servicio);
    }

    @Operation(summary = "Eliminar un servicio")
    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> eliminar(@PathVariable String codigo) {
        service.eliminar(codigo);
        return ResponseEntity.noContent().build();
    }
}
