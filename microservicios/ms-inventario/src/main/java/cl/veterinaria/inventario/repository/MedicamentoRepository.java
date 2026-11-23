package cl.veterinaria.inventario.repository;

import cl.veterinaria.inventario.model.Medicamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentoRepository extends JpaRepository<Medicamento, String> {
}
