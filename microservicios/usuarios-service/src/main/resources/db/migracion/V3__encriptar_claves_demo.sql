-- Las claves ahora se guardan con BCrypt (60 caracteres).
ALTER TABLE usuario MODIFY clave VARCHAR(100) NOT NULL;

-- Cuentas demo: cliente@email.com / 1234 y admin@sanmarcos.cl / admin123
UPDATE usuario SET clave = '$2a$10$fGyF3xC6s7qR2XkuKf70XOa3YBjXCNaL2kv4ejlUc1A3xNipS8qiW'
WHERE correo = 'cliente@email.com' AND clave = '1234';

UPDATE usuario SET clave = '$2a$10$Slgfnq9ofrgQd23tw3kbTeLvKM6NupxCXov8hTUkPTfZ2OoWW9VoW'
WHERE correo = 'admin@sanmarcos.cl' AND clave = 'admin123';
