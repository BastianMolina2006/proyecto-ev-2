package cl.veterinaria.inventario.repository;

import cl.veterinaria.inventario.model.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicioRepository extends JpaRepository<Servicio, String> {
}
