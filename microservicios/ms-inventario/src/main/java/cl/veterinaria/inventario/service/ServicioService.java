package cl.veterinaria.inventario.service;

import cl.veterinaria.inventario.model.Servicio;
import cl.veterinaria.inventario.repository.ServicioRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ServicioService {

    private final ServicioRepository repository;

    public ServicioService(ServicioRepository repository) {
        this.repository = repository;
    }

    public List<Servicio> listar() {
        return repository.findAll(Sort.by("codigo"));
    }

    public Servicio obtener(String codigo) {
        return repository.findById(codigo)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Servicio no encontrado"));
    }

    public Servicio crear(Servicio servicio) {
        if (repository.existsById(servicio.getCodigo())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe un servicio con ese código");
        }
        return repository.save(servicio);
    }

    public Servicio actualizar(String codigo, Servicio servicio) {
        obtener(codigo);
        servicio.setCodigo(codigo);
        return repository.save(servicio);
    }

    public void eliminar(String codigo) {
        obtener(codigo);
        repository.deleteById(codigo);
    }
}
