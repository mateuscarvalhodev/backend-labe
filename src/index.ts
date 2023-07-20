import { createProducts, createUser, getAllProducts, getAllUsers, products, searchProductByName, users } from "./database";

console.log(
createUser("u003", "Astrodev", "astrodev@email.com", "astrodev99"),
getAllUsers(), 
createProducts( 349.99, "prod003", "SSD gamer", "Acelere seu sistema com velocidades incríveis de leitura e gravação.", 'https://foda-se.com'),
getAllProducts(),
searchProductByName('gamer'),
);
