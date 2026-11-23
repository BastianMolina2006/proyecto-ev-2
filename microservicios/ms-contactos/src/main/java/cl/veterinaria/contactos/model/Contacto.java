package cl.veterinaria.contactos.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "contacto")
public class Contacto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Debe ingresar su nombre")
    @Column(name = "nombre_completo", nullable = false, length = 150)
    private String nombreCompleto;

    @NotBlank(message = "Debe ingresar su correo")
    @Email(message = "Ingrese un correo válido")
    @Column(nullable = false, length = 150)
    private String correo;

    @NotBlank(message = "Debe ingresar un mensaje")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String mensaje;

    // PENDIENTE al crearlo, ATENDIDO cuando el admin lo marca.
    @Column(nullable = false, length = 20)
    private String estado = "PENDIENTE";

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @PrePersist
    protected void asignarFechaCreacion() {
        this.fechaCreacion = LocalDateTime.now();
    }
}
