
### 1. BACKEND PARA POKEMON WEBCORE

```markdown
# Servidor Pokédex - API con Express + TypeScript

Servidor backend desarrollado con Express y TypeScript para consultar y procesar datos de la PokéAPI oficial[cite: 1]. La API actúa como una capa intermedia que recibe las solicitudes del cliente, consulta los datos necesarios a la fuente externa y devuelve una respuesta estructurada y limpia únicamente con los campos requeridos[cite: 1].

El proyecto implementa una arquitectura modular basada en rutas y controladores, gestionando errores de búsqueda (404) y estandarizando las respuestas en formato JSON[cite: 1].

## Cómo correrlo

Para ejecutar el proyecto necesitás tener instalado Node.js (versión 18 o superior)[cite: 1].

Primero, descargá o cloná el proyecto y entrá a la carpeta:

```bash
git clone [https://github.com/Nickywest21/Pokemon.git](https://github.com/Nickywest21/Pokemon.git)
cd Pokemon

```

Después, instalá las dependencias necesarias:

```bash
npm install

```

Finalmente, iniciá el servidor de desarrollo:

```bash
npm run dev

```

El servidor quedará en ejecución y escuchando peticiones en:

```text
http://localhost:3000

```

Podés comprobar el funcionamiento abriendo en tu navegador o en Postman:

```text
http://localhost:3000/api/pokemon/pikachu

```

## Cómo está armado

El proyecto está organizado de la siguiente manera:

```text
Pokemon/
├── src/
│   ├── controllers/
│   │   ├── pokemon.ts
│   │   └── tipo.ts
│   ├── routes.ts
│   └── server.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

```

## Endpoints principales

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/api/pokemon/:nombre` | Busca un Pokémon por su nombre o identificador y devuelve sus datos normalizados.

 |
| `GET` | `/api/tipo/:tipo` | Devuelve la lista de nombres de Pokémon asociados a un tipo elemental específico.

 |

## Respuestas reformadas

### 1. Búsqueda individual (`/api/pokemon/:nombre`)



Cuando el Pokémon existe, el servidor filtra la respuesta pesada de la PokéAPI y responde únicamente con los campos esenciales:

```json
{
  "id": 25,
  "nombre": "pikachu",
  "imagen": "[https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)",
  "tipos": [
    "electric"
  ]
}

```

Si el Pokémon no existe, devuelve un error 404 estructurado:

```json
{
  "error": "No lo encontré"
}

```

### 2. Filtro por tipo (`/api/tipo/:tipo`)

Devuelve la lista limpia de nombres de criaturas que pertenecen a esa categoría:

```json
{
  "tipo": "fire",
  "pokemon": [
    "charmander",
    "charmeleon",
    "charizard"
  ]
}

```

## Matriz de decisión técnica

Para la elección del backend se evaluaron tres alternativas en función de los requerimientos de la cátedra:

| Criterio | Express + TypeScript | Python + Flask | Spring Boot (Java) |
| --- | --- | --- | --- |
| I/O Asíncrono / Concurrencia | 5 | 3 | 4 |
| Simplicidad de andamiaje | 5 | 5 | 2 |
| Homogeneidad de stack con Frontend | 5 | 2 | 2 |
| Tipado estático y robustez | 4 | 2 | 5 |
| **Puntuación total** | **19 / 20** | **12 / 20** | **13 / 20** |

Se seleccionó **Express con TypeScript** debido a su eficiencia en operaciones de entrada/salida asíncronas para el consumo de APIs externas, la rapidez de recarga en caliente con `tsx watch` y la coherencia tecnológica al compartir el ecosistema de JavaScript/TypeScript con el cliente web.

## Preguntas de revisión (Compound Engineering)

Las siguientes preguntas fundamentan las decisiones tomadas durante el desarrollo:

1. **¿Cuál fue la decisión técnica más difícil?**
Gestionar la comunicación desacoplada con el frontend sin alterar la seguridad, optando por un proxy inverso en desarrollo en vez de habilitar orígenes descontrolados con CORS en el servidor.
2. **¿Qué alternativas se descartaron?**
Se descartó reenviar el JSON crudo devuelto por la PokéAPI, ya que contiene cientos de propiedades innecesarias que aumentaban el peso de la respuesta; se optó por un contrato reformado y predecible en español.


3. **¿De qué estamos menos seguros?**
De la tolerancia a fallos por límite de peticiones de la PokéAPI cuando el cliente solicita múltiples Pokémon simultáneamente al filtrar por tipo.

## Tecnologías utilizadas

| Tecnología / herramienta | Uso |
| --- | --- |
| Express 5 | Servidor HTTP y manejo de enrutamiento.

 |
| TypeScript | Tipado estático y validación de tipos en desarrollo.

 |
| tsx | Ejecución directa de archivos TypeScript con recarga automática.

 |
| Node.js | Entorno de ejecución con soporte nativo para `fetch`.

 |
| Git / GitHub | Control de versiones y trabajo colaborativo mediante ramas y Pull Requests.

 |

```

---

### 🎨 2. `README.md` para el Frontend (`Pokemon_Frontend/README.md`)

```markdown
# Cliente Pokédex - Interfaz Web con React + Vite

Aplicación web interactiva desarrollada con React y Vite que permite explorar el catálogo de Pokémon en tiempo real. La interfaz ofrece funciones de búsqueda directa por nombre, filtrado por categorías elementales y persistencia visual mediante cambio de tema claro/oscuro.

La aplicación consume los datos reformados servidos por nuestra propia API local construida en Express, asegurando una experiencia fluida y rápida en el navegador[cite: 1].

## Cómo correrlo

Para ejecutar el proyecto necesitás tener instalado Node.js.

Primero, descargá o cloná el proyecto y entrá a la subcarpeta de la aplicación:

```bash
git clone [https://github.com/Nickywest21/Pokemon_Frontend.git](https://github.com/Nickywest21/Pokemon_Frontend.git)
cd Pokemon_Frontend/pokemon

```

Después, instalá las dependencias:

```bash
npm install

```

Finalmente, iniciá el servidor de desarrollo:

```bash
npm run dev

```

Vite mostrará una dirección local similar a:

```text
http://localhost:5173/

```

Abrí esa dirección en el navegador para visualizar el sitio.

> **Nota:** Para que la búsqueda y los filtros funcionen con datos reales, asegurate de tener el servidor backend corriendo en paralelo en `http://localhost:3000`.
> 
> 

## Cómo está armado

El proyecto está organizado de la siguiente manera:

```text
Pokemon_Frontend/
├── pokemon/
│   ├── src/
│   │   ├── components/
│   │   │   ├── filterBar.jsx
│   │   │   ├── pokemonCard.jsx
│   │   │   ├── pokemonGrid.jsx
│   │   │   └── searchBar.jsx
│   │   ├── sections/
│   │   │   ├── footer.jsx
│   │   │   ├── header.jsx
│   │   │   └── hero.jsx
│   │   ├── services/
│   │   │   └── pokemonApi.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
└── README.md

```

## Componentes principales

| Archivo | Función |
| --- | --- |
| `App.jsx` | Componente raíz que orquesta los estados de búsqueda, carga, errores y modo oscuro. |
| `pokemonApi.js` | Módulo de servicios que ejecuta las peticiones HTTP (`fetch`) hacia los endpoints locales. |
| `searchBar.jsx` | Barra de entrada de texto para buscar Pokémon por nombre individual. |
| `filterBar.jsx` | Barra de botones con los diferentes tipos elementales para filtrar criaturas. |
| `pokemonGrid.jsx` | Cuadrícula responsiva que renderiza el listado de resultados. |
| `pokemonCard.jsx` | Tarjeta individual que presenta la ilustración oficial, identificador, nombre y tipos elementales. |

## Conexión con el Backend (Proxy Inverso)

El cliente web corre en el puerto `5173`, mientras que el servidor de datos corre en el puerto `3000`. Para comunicar ambas partes sin inconvenientes de CORS ni errores 404 por rutas relativas, se configuró un proxy inverso en `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
    },
  },
}

```

De este modo, cualquier petición hacia `/api/pokemon/...` o `/api/tipo/...` es redirigida internamente por Vite al servidor Express sin requerir configuración adicional en el navegador.

## Requisitos implementados

* Búsqueda reactiva de Pokémon por nombre con manejo de errores si no existe.


* Filtrado dinámico por tipos elementales mediante consumo del endpoint secundario.


* Presentación gráfica con tarjetas normalizadas (ID, nombre, ilustración oficial y etiquetas de tipo).


* Modo oscuro configurable con persistencia de selección en `localStorage`.
* Diseño adaptable y responsivo para dispositivos móviles y escritorio.

## Tecnologías utilizadas

| Tecnología / herramienta | Uso |
| --- | --- |
| React 19 | Biblioteca principal para el desarrollo de la interfaz basada en componentes. |
| Vite | Herramienta de compilación y servidor local de desarrollo con proxy integrado. |
| JavaScript (ESModules) | Lógica de la aplicación y llamadas asíncronas con `fetch`. |
| CSS3 | Hojas de estilo modulares, diseño en cuadrícula (CSS Grid) y variables de color. |
| Git / GitHub | Control de versiones y trabajo colaborativo mediante ramas y Pull Requests.

 |

```

```
