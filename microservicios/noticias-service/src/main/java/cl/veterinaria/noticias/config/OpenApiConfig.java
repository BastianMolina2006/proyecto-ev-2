package cl.veterinaria.noticias.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Datos de Swagger UI y botón "Authorize" para pegar el token JWT.
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI infoApi() {
        return new OpenAPI().info(new Info()
                .title("API de Noticias")
                .version("1.0")
                .description("Noticias que se publican en el sitio."))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .components(new Components().addSecuritySchemes("bearerAuth",
                        new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
    }
}
