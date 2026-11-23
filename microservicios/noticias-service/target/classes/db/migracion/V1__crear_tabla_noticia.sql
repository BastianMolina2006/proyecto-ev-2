-- Crea la tabla de noticias.
CREATE TABLE noticia (
    id BIGINT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    fecha DATE NOT NULL,
    imagen VARCHAR(500) NULL,
    subtitulo VARCHAR(300) NULL,
    resumen VARCHAR(500) NOT NULL,
    contenido TEXT NOT NULL,
    detalles TEXT NULL,
    PRIMARY KEY (id)
);
