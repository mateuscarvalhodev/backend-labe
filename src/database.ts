import { IProducts, IUsers } from "./types/types";

export const users: Array<IUsers> = [
  {
    id: 'u001',
    name: 'fulano',
    email: 'fulano@email.com',
    password: 'fulano123',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'u002',
    name: 'Beltrana',
    email: 'beltrana@email.com',
    password: 'beltrana123',
    createdAt: new Date().toISOString(),
  }
]
export const products: Array<IProducts> = [
  {
    id: 'prod001',
    name: 'Mouse Gamer',
    price: 250,
    description: 'melhor mouse do mercado',
    imageUrl: 'https://picsum.photos/seed/Mouse%20gamer/400',
  },
  {
    id: 'prod002',
    name: 'Monitor',
    price: 900,
    description: 'Monitor led full hd 24pol',
    imageUrl: 'https://picsum.photos/seed/Monitor%20gamer/400',
  }
]

export const createUser = (id: string, name: string, email: string, password: string):string => {
  users.push({
    id,
    email,
    name,
    password,
    createdAt: new Date().toISOString(),
  });
  return 'cadastro realizado com sucesso';
}

export const getAllUsers = ():Array<IUsers> => {
  return users;
};

export const getAllProducts = ():Array<IProducts> => {
  return products;
};

export const createProducts = (price: number, id: string, name: string, description: string, imageUrl: string):string => {
  products.push({
    id,
    name,
    description,
    imageUrl,
    price,
  });
  return 'produto criado com sucesso';
};

export const searchProductByName = (name: string):Array<IProducts> => {
const productFiltered:Array<IProducts> = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
return productFiltered;
};
