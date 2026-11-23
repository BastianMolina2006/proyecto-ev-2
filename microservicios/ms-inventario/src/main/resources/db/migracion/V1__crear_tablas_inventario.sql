CREATE TABLE medicamento (
    codigo VARCHAR(10) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    principio VARCHAR(120) NULL,
    presentacion VARCHAR(80) NULL,
    especie VARCHAR(40) NULL,
    stock INT NOT NULL DEFAULT 0,
    precio INT NOT NULL DEFAULT 0,
    imagen VARCHAR(255) NULL,
    PRIMARY KEY (codigo)
);

CREATE TABLE servicio (
    codigo VARCHAR(10) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    especie VARCHAR(40) NULL,
    duracion VARCHAR(20) NULL,
    precio INT NOT NULL DEFAULT 0,
    observaciones VARCHAR(255) NULL,
    imagen VARCHAR(255) NULL,
    PRIMARY KEY (codigo)
);
