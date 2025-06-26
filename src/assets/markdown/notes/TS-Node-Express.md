---
title: TS Node Express Starter Pack
desc: 
images: []
size:
tools: []
tags: ['TypeScript', 'Node', 'Express']
---

# TS Express
## Installing dependencies
```
npm install express
npx tsc --init
npm install --save-dev typescript @types/node
npm install --save-dev @types/express
npm install --save-dev ts-node-dev
```
## Minimal to run
```
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

import { Request, Response } from 'express';

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express!');
  req.log('Received a GET request on /');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
