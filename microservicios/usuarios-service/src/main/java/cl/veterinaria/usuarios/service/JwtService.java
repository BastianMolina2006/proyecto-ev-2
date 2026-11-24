package cl.veterinaria.usuarios.service;

import cl.veterinaria.usuarios.model.Usuario;
import com.nimbusds.jose.jwk.source.ImmutableSecret;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

// Crea el token JWT que se entrega al iniciar sesión.
@Service
public class JwtService {

    private final JwtEncoder encoder;
    private final long horasExpiracion;

    public JwtService(@Value("${jwt.secret}") String secreto,
                      @Value("${jwt.horas-expiracion}") long horasExpiracion) {
        SecretKey clave = new SecretKeySpec(secreto.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        this.encoder = new NimbusJwtEncoder(new ImmutableSecret<>(clave));
        this.horasExpiracion = horasExpiracion;
    }

    public String generarToken(Usuario usuario) {
        Instant ahora = Instant.now();
        JwtClaimsSet datos = JwtClaimsSet.builder()
                .subject(usuario.getCorreo())                         // quién es
                .claim("rol", rolDe(usuario))                         // qué puede hacer
                .issuedAt(ahora)                                      // cuándo se creó
                .expiresAt(ahora.plus(horasExpiracion, ChronoUnit.HOURS)) // cuándo vence
                .build();
        JwsHeader cabecera = JwsHeader.with(MacAlgorithm.HS256).build();
        return encoder.encode(JwtEncoderParameters.from(cabecera, datos)).getTokenValue();
    }

    private String rolDe(Usuario usuario) {
        String tipo = usuario.getTipoUsuario();
        return "Administrador".equals(tipo) ? "ADMIN" : tipo.toUpperCase();
    }
}
