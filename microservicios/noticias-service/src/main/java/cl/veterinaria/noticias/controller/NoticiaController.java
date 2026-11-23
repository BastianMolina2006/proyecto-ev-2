package cl.veterinaria.noticias.controller;

import cl.veterinaria.noticias.model.Noticia;
import cl.veterinaria.noticias.service.NoticiaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Noticias", description = "Noticias del sitio")
@RestController
@RequestMapping("/api/noticias")
@CrossOrigin(origins = "http://localhost:5173")
public class NoticiaController {

    private final NoticiaService service;

    public NoticiaController(NoticiaService service) {
        this.service = service;
    }

    @Operation(summary = "Listar las noticias (más recientes primero)")
    @GetMapping
    public List<Noticia> listar() {
        return service.listar();
    }

    @Operation(summary = "Obtener una noticia por id")
    @GetMapping("/{id}")
    public Noticia obtener(@PathVariable Long id) {
        return service.obtener(id);
    }

    @Operation(summary = "Crear una noticia")
    @PostMapping
    public ResponseEntity<Noticia> crear(@Valid @RequestBody Noticia noticia) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.crear(noticia));
    }

    @Operation(summary = "Actualizar una noticia")
    @PutMapping("/{id}")
    public Noticia actualizar(@PathVariable Long id, @Valid @RequestBody Noticia noticia) {
        return service.actualizar(id, noticia);
    }

    @Operation(summary = "Eliminar una noticia")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
