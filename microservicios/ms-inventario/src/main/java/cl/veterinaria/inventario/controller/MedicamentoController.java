package cl.veterinaria.inventario.controller;

import cl.veterinaria.inventario.model.Medicamento;
import cl.veterinaria.inventario.service.MedicamentoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Medicamentos", description = "Inventario de medicamentos")
@RestController
@RequestMapping("/api/medicamentos")
@CrossOrigin(origins = "http://localhost:5173")
public class MedicamentoController {

    private final MedicamentoService service;

    public MedicamentoController(MedicamentoService service) {
        this.service = service;
    }

    @Operation(summary = "Listar los medicamentos")
    @GetMapping
    public List<Medicamento> listar() {
        return service.listar();
    }

    @Operation(summary = "Obtener un medicamento por código")
    @GetMapping("/{codigo}")
    public Medicamento obtener(@PathVariable String codigo) {
        return service.obtener(codigo);
    }

    @Operation(summary = "Crear un medicamento (409 si el código ya existe)")
    @PostMapping
    public ResponseEntity<Medicamento> crear(@Valid @RequestBody Medicamento medicamento) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.crear(medicamento));
    }

    @Operation(summary = "Actualizar un medicamento")
    @PutMapping("/{codigo}")
    public Medicamento actualizar(@PathVariable String codigo, @Valid @RequestBody Medicamento medicamento) {
        return service.actualizar(codigo, medicamento);
    }

    @Operation(summary = "Eliminar un medicamento")
    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> eliminar(@PathVariable String codigo) {
        service.eliminar(codigo);
        return ResponseEntity.noContent().build();
    }
}
