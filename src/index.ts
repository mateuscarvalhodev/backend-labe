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
  try {
    res.status(200).send(users);
  } catch (err: any) {
    res.status(500).send(err.message);
  };
});

api.get('/products', (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    if (name !== undefined) {
      if (name.length > 0) {
        const filteredList = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        res.status(200).send(filteredList);
      }
      res.status(400)
      throw new Error('o ID deve ter mais de 1 caractere.');
    }
    res.status(200).send(products);
  } catch (err: any) {
    res.send(err.message);
  }
})

api.post('/users', (req: Request, res: Response) => {
  try {
    const id = req.body.id as string;
    const name = req.body.name as string;
    const email = req.body.email as string;
    const password = req.body.password as string;
    if (!id || !name || !email || !password) {
      if (!id) {
        throw new Error('Insira o ID');
      }
      if (!email) {
        throw new Error('Insira o Email');
      }
      if (!name) {
        throw new Error('Insira o Nome');
      }
      if (!password) {
        throw new Error('Insira o Password');
      }
    }
    res.status(201).send('usuario criado com sucesso');

  } catch (err: any) {
    res.status(400).send(err.message);
  };

  res.status(400).send('informação not found');
});

api.post('/products', (req: Request, res: Response) => {
  try {
    const id = req.body.id as string;
    const price = req.body.price as number;
    const name = req.body.name as string;
    const url = req.body.imageUrl as string;
    const description = req.body.description as string;

    if (!id || !name || !price || !url || !description) {
      if (!id) {
        throw new Error('Insira o ID');
      }
      if (!name) {
        throw new Error('Insira o nome');
      }
      if (!price) {
        throw new Error('Insira o Preço');
      }
      if (!url) {
        throw new Error('Insira o Url');
      }
      if (!description) {
        throw new Error('Insira a descrição');
      }
    }
    res.status(201).send('produto criado com sucesso');

  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

api.delete('/users/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    console.log(id);
    if (!id) {
      throw new Error('insira um ID')
    }
    res.status(200).send('usuario removido com sucesso');
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

api.delete('/products/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      throw new Error('insira um ID')
    }
    res.status(200).send('Product removido');

  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

api.put('/products/:id', (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id as string;
    const id = req.body.id as string || undefined;
    const price = req.body.price as number || undefined;
    const name = req.body.name as string || undefined;
    const url = req.body.imageUrl as string || undefined;
    const description = req.body.description as string || undefined;

    if(idToEdit !== undefined && idToEdit.length < 1) {
      throw new Error('Não existe ID');
    }
    if (id && typeof id !== 'string') {
      throw new Error('o id deve ser uma string')
    };
    if (price && typeof price !== 'number') {
      throw new Error('Adicione preço ao produto')
    };
    if (name && typeof name !== 'string') {
      throw new Error('Adicione nome ao produto')
    };
    if (url && typeof url !== 'string') {
      throw new Error('Adicione uma url ao produto')
    };
    if (description && typeof description !== 'string') {
      throw new Error('Adicione uma descrição ao produto')
    };
    res.status(200).send('usuário alterado com sucesso');
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});