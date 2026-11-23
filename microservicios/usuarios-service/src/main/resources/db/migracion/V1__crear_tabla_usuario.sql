-- Crea la tabla de usuarios.
CREATE TABLE usuario (
    id BIGINT NOT NULL AUTO_INCREMENT,
    run VARCHAR(12) NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL DEFAULT 'Cliente',
    nombre VARCHAR(80) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    clave VARCHAR(50) NOT NULL,
    fecha_nacimiento VARCHAR(10) NULL,
    region VARCHAR(60) NOT NULL,
    comuna VARCHAR(80) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_usuario_run (run),
    UNIQUE KEY uk_usuario_correo (correo)
);
