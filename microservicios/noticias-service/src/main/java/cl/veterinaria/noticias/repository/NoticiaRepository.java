package cl.veterinaria.noticias.repository;

import cl.veterinaria.noticias.model.Noticia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoticiaRepository extends JpaRepository<Noticia, Long> {

    // Las más recientes primero.
    List<Noticia> findAllByOrderByFechaDescIdDesc();
}
