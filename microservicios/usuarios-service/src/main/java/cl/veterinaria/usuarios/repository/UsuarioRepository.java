package cl.veterinaria.usuarios.repository;

import cl.veterinaria.usuarios.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByCorreoIgnoreCase(String correo);

    Optional<Usuario> findByRun(String run);
}
