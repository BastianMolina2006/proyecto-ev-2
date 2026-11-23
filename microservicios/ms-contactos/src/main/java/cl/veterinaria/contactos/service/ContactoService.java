package cl.veterinaria.contactos.service;

import cl.veterinaria.contactos.model.Contacto;
import cl.veterinaria.contactos.repository.ContactoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ContactoService {

    private final ContactoRepository repository;

    public ContactoService(ContactoRepository repository) {
        this.repository = repository;
    }

    // Registrar: todo contacto nuevo parte como PENDIENTE.
    public Contacto guardar(Contacto contacto) {
        contacto.setId(null);
        contacto.setEstado("PENDIENTE");
        return repository.save(contacto);
    }

    // Consultar: los más recientes primero.
    public List<Contacto> listar() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "fechaCreacion"));
    }

    // Actualizar: cambia el estado a ATENDIDO.
    public Contacto marcarAtendido(Long id) {
        Contacto contacto = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contacto no encontrado"));
        contacto.setEstado("ATENDIDO");
        return repository.save(contacto);
    }

    // Eliminar.
    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contacto no encontrado");
        }
        repository.deleteById(id);
    }
}
