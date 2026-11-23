package cl.veterinaria.noticias.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI infoApi() {
        return new OpenAPI().info(new Info()
                .title("API de Noticias")
                .version("1.0")
                .description("Noticias que se publican en el sitio."));
    }
}
