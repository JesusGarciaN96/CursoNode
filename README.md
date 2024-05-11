# Curso Node.js 🧑‍💻📚

## Importaciones 🚀

Por defecto node hace importaciones `common js` pero para lograr importación de ECMAScript 6 se deben hacer cambios:

```javascript 
  // Exportación e importación de métodos en node
  export module.exports = {
    method,
    secondMethod
  };

  const { method, secondMethod } = require('./methods')
```

Importaciones con ECMAScript 6 se agrega una propiedad en `package.json`

```json
  {
    "name": "demo",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "type": "module", // Definimos el tipo de modules para el proyecto
    "scripts": {
      "dev": "nodemon src/index.js",
      "start": "node src/index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "nodemon": "^3.1.0"
    }
  }
```

Seguido debemos cambiar la exportación de nuestros métodos (o cualquier exportación que estemos realizando):

```javascript
  export const method = () => {};
  export const secondMethod = () => {};

  // Importante escribir la extensión .js (o .ts si fuera typescript)
  import { method, secondMethod } from './methods.js';
```
