package cl.veterinaria.inventario.service;

import cl.veterinaria.inventario.model.Medicamento;
import cl.veterinaria.inventario.repository.MedicamentoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class MedicamentoService {

    private final MedicamentoRepository repository;

    public MedicamentoService(MedicamentoRepository repository) {
        this.repository = repository;
    }

    public List<Medicamento> listar() {
        return repository.findAll(Sort.by("codigo"));
    }

    public Medicamento obtener(String codigo) {
        return repository.findById(codigo)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicamento no encontrado"));
    }

    // Crear: el código no puede repetirse.
    public Medicamento crear(Medicamento medicamento) {
        if (repository.existsById(medicamento.getCodigo())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe un medicamento con ese código");
        }
        return repository.save(medicamento);
    }

    // Actualizar: el código siempre es el de la URL.
    public Medicamento actualizar(String codigo, Medicamento medicamento) {
        obtener(codigo);
        medicamento.setCodigo(codigo);
        return repository.save(medicamento);
    }

    public void eliminar(String codigo) {
        obtener(codigo);
        repository.deleteById(codigo);
    }
}
