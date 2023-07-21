import express, { Request, Response } from 'express';
import cors from 'cors';
import { products, users } from './database';

const api = express();
api.use(express.json());
api.use(cors());

api.listen(3001, () => {
  console.log('listening on http://localhost:3001');
});

api.get('/ping', (req: Request, res: Response) => {
  res.send('isActive');
});

api.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users);
});

api.get('/products', (req: Request, res: Response) => {
  const name = req.query.name as string;
  if(name) {
    const filteredList = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    res.status(200).send(filteredList);
  }
  res.status(200).send(products);
})

api.post('/users', (req: Request, res: Response) => {
  const id = req.body.id as string;
  const name = req.body.name as string;
  const email = req.body.email as string;
  const password = req.body.password as string;

  if(id && name && email && password) {
    res.status(201).send('deu bom');
  } 
  res.status(400).send('informação not found');
});

api.post('/products', (req: Request, res: Response) => {
  const id = req.body.id as string;
  const price = req.body.price as number;
  const name = req.body.name as string;
  const url = req.body.imageUrl as string;
  const description = req.body.description as string;

  if(id && price && name && description && url) {
    res.status(201).send('produto deu bom');
  }
  res.status(400).send('produto deu ruim');
});