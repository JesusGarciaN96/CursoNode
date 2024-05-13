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

## Variables de Entorno 🗂️

Para hacer uso de variables de entorno en Node (o cualquier proyecto js de lado del servidor) es necesario usar el paquete `dotenv` (al menos hasta la version 21 de node.js).

Para instalar el paquete usamos el comando:

```bash
pnpm add dotenv
npm install dotenv
yarn install dotenv
```

Una vez se haya instalado se genera un archivo `.env` en la raiz del proyecto y previamente se agregar a `.gitignore` ya que una vez en el servidor de producción las variables de entorno se tomaran del servidor directamente. 

En nuestro `index.js` o cualquier archivo de inicio para nuestro proyecto de node se debe hacer uso del paquete `dotenv` para esto se inserta el código:

```javascript
import { config } from "dotenv";

config();
```

Esto nos dara acceso a nuestros archivos `.env` o `.env.development` que tengamos en nustro proyecto y hacer uso del `PORT` o credenciales de base de datos `DB_PASSWORD`

```javascript
const port = process.env.PORT || 3000;
```

Asi se podría definir el número de puerto para un servidor en node por ejemplo.

Existe una alternaviva para `dotenv` que se llama [env-var]('https://www.npmjs.com/package/env-var') que permite manejar variables de entorno tipados (como si fuera TypeScript).
