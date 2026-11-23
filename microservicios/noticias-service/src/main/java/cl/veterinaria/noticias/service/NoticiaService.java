package cl.veterinaria.noticias.service;

import cl.veterinaria.noticias.model.Noticia;
import cl.veterinaria.noticias.repository.NoticiaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class NoticiaService {

    private final NoticiaRepository repository;

    public NoticiaService(NoticiaRepository repository) {
        this.repository = repository;
    }

    public List<Noticia> listar() {
        return repository.findAllByOrderByFechaDescIdDesc();
    }

    public Noticia obtener(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Noticia no encontrada"));
    }

    public Noticia crear(Noticia noticia) {
        noticia.setId(null);
        return repository.save(noticia);
    }

    public Noticia actualizar(Long id, Noticia noticia) {
        obtener(id);
        noticia.setId(id);
        return repository.save(noticia);
    }

    public void eliminar(Long id) {
        obtener(id);
        repository.deleteById(id);
    }
}
