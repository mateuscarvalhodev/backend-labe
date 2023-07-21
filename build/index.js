"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log((0, database_1.createUser)("u003", "Astrodev", "astrodev@email.com", "astrodev99"), (0, database_1.getAllUsers)(), (0, database_1.createProducts)(349.99, "prod003", "SSD gamer", "Acelere seu sistema com velocidades incríveis de leitura e gravação.", 'https://pazEamor.com'), (0, database_1.getAllProducts)(), (0, database_1.searchProductByName)('gamer'));
