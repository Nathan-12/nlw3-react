//yarn init -y
//yarn add express
//yarn add @types/express -D
//yarn add typescript -D
//yarn tsc --init
//yarn ts-node-dev -D
//criar o script para rodar o server.ts
//yarn add typeorm sqlite3
//yarn typeorm migration:create -n create_orphanages
//yarn add multer
//yarn add yup - validação
import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.listen(3333);

// Driver nativo, Query builder (Knex), ORM

