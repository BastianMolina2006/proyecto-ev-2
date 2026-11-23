package cl.veterinaria.inventario.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "servicio")
public class Servicio {

    @Id
    @NotBlank(message = "El código es obligatorio")
    @Column(length = 10)
    private String codigo;

    @NotBlank(message = "La categoría es obligatoria")
    @Column(nullable = false, length = 60)
    private String categoria;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false, length = 150)
    private String nombre;

    @Column(length = 40)
    private String especie;

    @Column(length = 20)
    private String duracion;

    @Column(nullable = false)
    private Integer precio = 0;

    @Column(length = 255)
    private String observaciones;

    @Column(length = 255)
    private String imagen;
}
