# 🎬 Tenpo Frontend Challenge

Este proyecto es la solución al reto técnico propuesto por **Tenpo**. Fue desarrollado utilizando **React + TypeScript + Vite**, e implementa una arquitectura modular, escalable y enfocada en buenas prácticas modernas de desarrollo frontend.

---

## 📌 Descripción del challenge

El reto consiste en:

- Implementar una **pantalla de login** que simule autenticación (200-OK + token fake).
- Crear una **home protegida** que consuma una **API pública** y muestre una lista de al menos 2000 elementos.
- Incluir un **botón de logout** que limpie la sesión y redirija al login.

---

## 🚀 Tecnologías utilizadas

- React + TypeScript
- Vite
- React Router DOM
- React Hook Form
- Axios (con interceptor)
- Context API + useReducer
- Tailwind CSS (para el diseño responsivo)

---

## 🏃 ¿Cómo correr el proyecto?

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tenpo-challenge.git
cd tenpo-challenge
```

2. Instala las dependencias:

```bash
pnpm install
```

> También puedes usar `npm install` o `yarn install` si lo prefieres.

3. Levanta el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## 📁 Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
├── context/          # Contextos de autenticación y usuario
├── hooks/            # Hooks personalizados
├── pages/            # Pantallas principales (Login y Home)
├── router/           # Rutas protegidas y públicas
├── services/         # Axios + llamadas a API
├── utils/            # Utilidades para token y lógica auxiliar
├── models/           # Tipado de datos
└── App.tsx           # Estructura principal de la app
```

---

## 🧠 Justificación de decisiones técnicas

### 🎯 Estrategia para mostrar la lista de 2000 elementos

Para contar con una API pública con más de 2000 registros, se utilizó la **data no comercial de IMDb**, disponible en:

> https://developer.imdb.com/non-commercial-datasets/

A partir de ese dataset, se seleccionaron 2000 registros y se utilizó `json-server` para montar una API mock que permite:

- Obtener los datos con soporte para **paginación real**.
- Simular un backend funcional y eficiente.
- Evitar la carga masiva de datos innecesarios.

Además, la información del **usuario autenticado** sigue el mismo enfoque y se expone desde la misma API mock.

El mock API está disponible públicamente en:

> https://github.com/Fabrizio99/fake-api-imdb

**Nota importante:** Dado que el mock API está desplegado en un servicio gratuito, si no hay actividad durante más de 15 segundos, la primera petición posterior puede tardar hasta **50 segundos en reactivarse**. Luego de eso, las respuestas vuelven a ser rápidas y estables.

Para cumplir con el requerimiento de mostrar una lista extensa, utilicé una **estrategia de paginación controlada** desde el frontend, mediante `_page` y `_per_page` contra la API pública:

> https://fake-api-imdb.onrender.com/movies

Esto permite:

- Cargar solo los datos necesarios por página.
- Evitar bloquear la UI al cargar los 2000 elementos de golpe.
- Escalabilidad y eficiencia, especialmente en móviles o conexiones lentas.

El componente `Paginator` permite navegar entre páginas y `MovieList` muestra los resultados.

---

### 🔐 Manejo del token y persistencia de sesión

- Al hacer login, se genera un `token-fake` y se guarda en memoria.
- Se persiste en `localStorage` para mantener la sesión al momento de volver a cargar la aplicación.
- Al iniciar la app, un `INIT_SESSION` revisa si hay token guardado.
- Axios está configurado con un **interceptor** para incluir el token automáticamente en cada request.

---

### 🚪 Estrategia de logout

- Limpieza del token (`clearToken()`).
- Reset del contexto de usuario (`removeUser()`).
- Redirección automática al login.
- Todo esto mantiene una clara separación entre contexto público (Login) y privado (Home).

---

### ⚙️ Propuesta de mejora teórica (Frontend y Backend)

Actualmente, la aplicación realiza peticiones al backend cada vez que el usuario cambia de página o entra a la app. Aunque esto funciona correctamente, existen mejoras que se podrían aplicar para hacer la app más eficiente:

#### 1. Incorporar una librería como **React Query** o **SWR**:

Estas herramientas permiten:

- Cachear automáticamente los datos ya cargados (como la lista de películas).
- Evitar llamadas innecesarias al backend.
- Mejorar la experiencia del usuario al reducir tiempos de espera.

#### 2. Virtualización de listas:

En caso se desee utilizar scroll infinito en lugar de paginación tradicional, se podrían usar librerías como:

- `react-window`
- `react-virtualized`

Esto evitaría renderizar los 2000 elementos a la vez, mejorando notablemente el rendimiento y reduciendo el uso de memoria.

#### 3. Filtros y búsqueda avanzada:

- Agregar filtros por **año**, **género**.
- Incorporar un campo de **búsqueda por nombre** con debounce para reducir las llamadas al backend.

Estas mejoras no solo optimizan el rendimiento, sino que ofrecen una mejor experiencia de usuario y preparan la aplicación para escalar en producción.
