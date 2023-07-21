-- Active: 1689964535263@@127.0.0.1@3306

CREATE TABLE
    USERS (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    USERS (id, name, email, password)
VALUES (
        'u001',
        'mateus',
        'mateus@gmail.com',
        'feijaoComArroz'
    ), (
        'u002',
        'Tales',
        'tales@gmail.com',
        'PeixeFrito'
    ), (
        'u003',
        'Rafael',
        'Rafael@gmail.com',
        'farofaDePeixe'
    );

SELECT * FROM USERS;

CREATE TABLE
    PRODUCTS (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL
    );

DROP TABLE PRODUCTS;

INSERT INTO
    PRODUCTS (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        'p001',
        'Camiseta Branca',
        29.99,
        'Camiseta branca de algodão',
        'https://exemplo.com/camiseta_branca.jpg'
    ), (
        'p002',
        'Calça Jeans',
        59.99,
        'Calça jeans azul de corte reto',
        'https://exemplo.com/calca_jeans.jpg'
    ), (
        'p003',
        'Tênis Esportivo',
        89.99,
        'Tênis para atividades físicas',
        'https://exemplo.com/tenis_esportivo.jpg'
    ), (
        'p004',
        'Bolsa de Couro',
        129.99,
        'Bolsa de couro marrom com alças ajustáveis',
        'https://exemplo.com/bolsa_de_couro.jpg'
    ), (
        'p005',
        'Relógio de Pulso',
        199.99,
        'Relógio de pulso analógico com pulseira de metal',
        'https://exemplo.com/relogio_de_pulso.jpg'
    );

SELECT * FROM PRODUCTS;

SELECT * FROM PRODUCTS WHERE name LIKE '%Jeans%';

INSERT INTO
    USERS (id, name, email, password)
VALUES (
        'u004',
        'Silva',
        'silva@gmail.com',
        'picanhaComTapioca'
    );

INSERT INTO
    PRODUCTS (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        'p007',
        'Camiseta Preta',
        39.99,
        'Camiseta preta de algodão',
        'https://exemplo.com/camiseta_preta.jpg'
    );

DELETE FROM USERS WHERE id = 'u004';

DELETE FROM PRODUCTS WHERE id = 'p002';

UPDATE PRODUCTS
SET
    id = 'p008',
    name = 'Camiseta Roxa',
    description = 'Camiseta Roxa',
    image_url = 'https://exemplo.com/camiseta_roxa.jpg'
WHERE id = 'p007';

CREATE TABLE
    PURCHASES (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        buyer TEXT NOT NULL,
        total_price REAL NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (buyer) REFERENCES USERS(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    PURCHASES (id, buyer, total_price)
VALUES ('purc001', 'u001', 80), ('purc002', 'u002', 72);

SELECT * FROM PURCHASES;

SELECT
    PURCHASES.id,
    PURCHASES.buyer,
    USERS.name,
    USERS.email,
    PURCHASES.total_price,
    PURCHASES.created_at
FROM PURCHASES
    INNER JOIN USERS ON PURCHASES.buyer = USERS.id
WHERE PURCHASES.id = 'purc001';