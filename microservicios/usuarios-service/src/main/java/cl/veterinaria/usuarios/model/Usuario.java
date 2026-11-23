package cl.veterinaria.usuarios.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El RUN es obligatorio.")
    @Column(nullable = false, unique = true, length = 12)
    private String run;

    @Column(name = "tipo_usuario", nullable = false, length = 20)
    private String tipoUsuario = "Cliente";

    @NotBlank(message = "El nombre es obligatorio.")
    @Column(nullable = false, length = 80)
    private String nombre;

    @NotBlank(message = "Los apellidos son obligatorios.")
    @Column(nullable = false, length = 100)
    private String apellidos;

    @NotBlank(message = "El correo electrónico es obligatorio.")
    @Email(message = "El formato de correo no es válido.")
    @Column(nullable = false, unique = true, length = 150)
    private String correo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false, length = 50)
    private String clave;

    @Column(name = "fecha_nacimiento", length = 10)
    private String fechaNacimiento;

    @NotBlank(message = "Debes seleccionar una región.")
    @Column(nullable = false, length = 60)
    private String region;

    @NotBlank(message = "Debes seleccionar una comuna.")
    @Column(nullable = false, length = 80)
    private String comuna;

    @NotBlank(message = "La dirección es obligatoria.")
    @Column(nullable = false, length = 200)
    private String direccion;
}
