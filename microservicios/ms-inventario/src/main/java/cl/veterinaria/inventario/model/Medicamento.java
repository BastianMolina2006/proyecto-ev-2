package cl.veterinaria.inventario.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "medicamento")
public class Medicamento {

    @Id
    @NotBlank(message = "El código es obligatorio")
    @Column(length = 10)
    private String codigo;

    @NotBlank(message = "La categoría es obligatoria")
    @Column(nullable = false, length = 60)
    private String categoria;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false, length = 120)
    private String nombre;

    @Column(length = 120)
    private String principio;

    @Column(length = 80)
    private String presentacion;

    @Column(length = 40)
    private String especie;

    @Column(nullable = false)
    private Integer stock = 0;

    @Column(nullable = false)
    private Integer precio = 0;

    @Column(length = 255)
    private String imagen;
}
