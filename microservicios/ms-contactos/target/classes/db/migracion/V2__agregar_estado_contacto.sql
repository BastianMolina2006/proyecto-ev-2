-- Agrega el estado a la tabla ya existente.
-- Los contactos existentes quedan como PENDIENTE.
ALTER TABLE contacto ADD COLUMN estado VARCHAR(20) NOT NULL DEFAULT 'PENDIENTE';
