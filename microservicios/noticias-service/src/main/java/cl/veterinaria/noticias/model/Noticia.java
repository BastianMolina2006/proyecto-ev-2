package cl.veterinaria.noticias.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "noticia")
public class Noticia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título es obligatorio")
    @Column(nullable = false, length = 200)
    private String titulo;

    @NotBlank(message = "La categoría es obligatoria")
    @Column(nullable = false, length = 80)
    private String categoria;

    @NotNull(message = "La fecha es obligatoria")
    @Column(nullable = false)
    private LocalDate fecha;

    @Column(length = 500)
    private String imagen;

    @Column(length = 300)
    private String subtitulo;

    @NotBlank(message = "El resumen es obligatorio")
    @Column(nullable = false, length = 500)
    private String resumen;

    // Párrafos separados por una línea en blanco.
    @NotBlank(message = "El contenido es obligatorio")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String contenido;

    // Una línea por dato, con el formato "Etiqueta: valor".
    @Column(columnDefinition = "TEXT")
    private String detalles;
}
