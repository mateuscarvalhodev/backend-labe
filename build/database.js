"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
exports.users = [
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
];
exports.products = [
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
];
