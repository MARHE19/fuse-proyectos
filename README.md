# Fuse Proyectos — Landing Page

Landing page para **Fuse Proyectos, Ingeniería y Construcción S.A.C.**, empresa dedicada al acondicionamiento de edificios, arquitectura e ingeniería, y construcción de edificios completos, con sede en San Juan de Miraflores, Lima.

## Tecnologías

- [Astro](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Bun](https://bun.sh) como gestor de paquetes
- [Formspree](https://formspree.io) para el envío del formulario de contacto

## Estructura del proyecto

```
/
├── public/
├── src/
│   ├── assets/
│   │   └── images/       # logo.png, edificio1.jpg, edificio2.jpg, edificio3.jpg
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   └── Contacto.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css    # paleta de colores fuse-navy / fuse-orange / fuse-gray
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Requisitos previos

Antes de correr el proyecto, asegúrate de tener en `src/assets/images/`:

- `logo.png`
- `edificio1.jpg`, `edificio2.jpg`, `edificio3.jpg`

## Instalación

```bash
bun install
```

## Desarrollo local

```bash
bun dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Build de producción

```bash
bun run build
bun run preview
```

## Formulario de contacto

El formulario de la sección **Contacto** envía los datos a [Formspree](https://formspree.io). Para configurarlo:

1. Crea una cuenta gratuita en formspree.io.
2. Crea un formulario y copia su URL (`https://formspree.io/f/xxxxxxxx`).
3. Reemplaza el valor de `action` en `src/components/Contacto.astro` con esa URL.