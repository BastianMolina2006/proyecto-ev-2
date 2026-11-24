package cl.veterinaria.usuarios.service;

import cl.veterinaria.usuarios.model.LoginResponse;
import cl.veterinaria.usuarios.model.Usuario;
import cl.veterinaria.usuarios.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    public UsuarioService(UsuarioRepository repository, PasswordEncoder encoder, JwtService jwtService) {
        this.repository = repository;
        this.encoder = encoder;
        this.jwtService = jwtService;
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
        usuario.setTipoUsuario("Cliente");
        usuario.setClave(encoder.encode(usuario.getClave())); // se guarda encriptada (BCrypt)
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

        // La clave solo se cambia si viene en la petición.
        if (datos.getClave() != null && !datos.getClave().isBlank()) {
            validarClave(datos.getClave());
            usuario.setClave(encoder.encode(datos.getClave()));
        }
        return repository.save(usuario);
    }

    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado");
        }
        repository.deleteById(id);
    }

    // Login: compara la clave con el hash guardado y, si coincide, crea el token JWT.
    public LoginResponse login(String correo, String clave) {
        String correoLimpio = correo == null ? "" : correo.trim();
        Usuario usuario = repository.findByCorreoIgnoreCase(correoLimpio)
                .filter(u -> clave != null && encoder.matches(clave, u.getClave()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Credenciales inválidas."));
        return new LoginResponse(jwtService.generarToken(usuario), usuario);
    }

    private void validarClave(String clave) {
        if (clave == null || clave.length() < 4 || clave.length() > 10) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La contraseña debe tener entre 4 y 10 caracteres.");
        }
    }
}
