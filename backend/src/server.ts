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
import express, { query } from 'express';
import './database/connection'

import routes from './routes'
 
const app = express();

app.use(express.json());
app.use(routes);

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.listen(3333);

// Driver nativo, Query builder (Knex), ORM

