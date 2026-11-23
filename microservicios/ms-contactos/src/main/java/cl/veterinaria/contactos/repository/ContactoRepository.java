package cl.veterinaria.contactos.repository;

import cl.veterinaria.contactos.model.Contacto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactoRepository extends JpaRepository<Contacto, Long> {
}
