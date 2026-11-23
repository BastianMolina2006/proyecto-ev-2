package cl.veterinaria.usuarios.service;

import cl.veterinaria.usuarios.model.Usuario;
import cl.veterinaria.usuarios.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public Usuario registrar(Usuario usuario) {
        validarClave(usuario.getClave());
        if (repository.findByCorreoIgnoreCase(usuario.getCorreo()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Este correo ya se encuentra registrado.");
        }
        if (repository.findByRun(usuario.getRun()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Este RUN ya se encuentra registrado.");
        }
        usuario.setId(null);
        if (usuario.getTipoUsuario() == null || usuario.getTipoUsuario().isBlank()) {
            usuario.setTipoUsuario("Cliente");
        }
        return repository.save(usuario);
    }

    public List<Usuario> listar() {
        return repository.findAll();
    }

    public Usuario actualizar(Long id, Usuario datos) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado"));

        repository.findByCorreoIgnoreCase(datos.getCorreo()).ifPresent(otro -> {
            if (!otro.getId().equals(id)) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Este correo ya se encuentra registrado.");
            }
        });
        repository.findByRun(datos.getRun()).ifPresent(otro -> {
            if (!otro.getId().equals(id)) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Este RUN ya se encuentra registrado.");
            }
        });

        usuario.setRun(datos.getRun());
        usuario.setTipoUsuario(datos.getTipoUsuario());
        usuario.setNombre(datos.getNombre());
        usuario.setApellidos(datos.getApellidos());
        usuario.setCorreo(datos.getCorreo());
        usuario.setFechaNacimiento(datos.getFechaNacimiento());
        usuario.setRegion(datos.getRegion());
        usuario.setComuna(datos.getComuna());
        usuario.setDireccion(datos.getDireccion());

        if (datos.getClave() != null && !datos.getClave().isBlank()) {
            validarClave(datos.getClave());
            usuario.setClave(datos.getClave());
        }
        return repository.save(usuario);
    }

    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado");
        }
        repository.deleteById(id);
    }

    public Usuario autenticar(String correo, String clave) {
        String correoLimpio = correo == null ? "" : correo.trim();
        return repository.findByCorreoIgnoreCase(correoLimpio)
                .filter(u -> u.getClave().equals(clave))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Credenciales inválidas."));
    }

    private void validarClave(String clave) {
        if (clave == null || clave.length() < 4 || clave.length() > 10) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La contraseña debe tener entre 4 y 10 caracteres.");
        }
    }
}
