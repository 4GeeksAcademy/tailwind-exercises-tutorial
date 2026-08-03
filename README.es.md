<!-- hide -->
<div align="center">

# Tutorial para Aprender Tailwind CSS desde Cero

<a href="https://4geeks.com"><img src="https://img.shields.io/badge/certified-4Geeks-2563eb" alt="Certificado por 4Geeks" /></a>
<a href="https://github.com/learnpack/learnpack"><img src="https://img.shields.io/badge/autograded-LearnPack-2563eb" alt="Autocorregido con LearnPack" /></a>
<a href="https://codespaces.new/?repo=4GeeksAcademy/tailwind-exercises-tutorial"><img src="https://img.shields.io/badge/Open%20in-Codespaces-fb5a1f?logo=github" alt="Abrir este tutorial en GitHub Codespaces" /></a>

![Portada del tutorial interactivo: el texto Learn Tailwind CSS junto al logo de Tailwind CSS, un círculo turquesa con dos olas blancas, y la palabra interactive](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/preview.png)

[English](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial/blob/HEAD/README.md) · **Español**

</div>
<!-- endhide -->

Este tutorial de LearnPack enseña Tailwind CSS con 9 ejercicios: una introducción y 8 retos autocorregidos por 69 pruebas de Jest. Cargas Tailwind desde el CDN Play y construyes un contenedor centrado, una rejilla con flexbox, una barra de pestañas, un menú lateral, un hero con tres tarjetas, botones con alerta y tabla, y un formulario de login. Todo con clases de utilidad, sin CSS propio. Nivel inicial, unas 5 horas.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad:** fácil (nivel inicial)
- **Duración:** unas 5 horas
- **Ejercicios:** 9 carpetas, 8 de ellas autocorregidas
- **Tecnologías:** Tailwind CSS, HTML, CSS
- **Corrección:** automática, 69 pruebas con Jest + jsdom
- **Idiomas:** cada ejercicio trae instrucciones en español e inglés
- **Entorno:** GitHub Codespaces, Gitpod o VS Code en local con LearnPack
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

Tailwind CSS es un framework *utility-first*: en lugar de escribir reglas CSS en un archivo aparte, combinas clases pequeñas como `bg-red-500`, `px-4` o `flex` directamente sobre tus etiquetas HTML. Este tutorial repite ese gesto hasta que se te queda en los dedos.

Al terminar sabrás:

- Añadir Tailwind a cualquier página estática con el `<script>` del CDN Play dentro del `<head>`.
- Controlar el ancho y el centrado con `container mx-auto` frente a `w-full`, y ver cómo cambia el contenedor según el tamaño de pantalla.
- Montar filas y columnas con `flex` y anchos fraccionados (`w-1/2`, `w-1/3`, `w-1/6`, `w-5/6`).
- Usar bien la escala de colores: `bg-red-500`, `bg-blue-600`, `bg-gray-100`, `bg-yellow-100`, `text-white`, `text-blue-600`.
- Aplicar utilidades de espaciado y bordes (`px-4`, `py-2`, `border-b`, `border-b-2`, `border-transparent`, `rounded`).
- Activar variantes de estado como `hover:border-gray-400` o `hover:text-gray-800`.
- Armar piezas reales de interfaz —navbar, sidebar, hero, tarjetas, caja de alerta, tabla y formulario de login— sin escribir una sola línea de CSS propio.

## 👀 ¿Qué vas a construir?

Nueve carpetas de ejercicios, en este orden. La primera es una introducción escrita; las otras ocho traen un archivo `tests.js` que corrige tu `index.html`:

1. **00 Bienvenida** — la presentación del curso. Todavía no se programa nada.
2. **01 Añadir Tailwind CSS a tu web** — pega el script del CDN en el `<head>` y pon rojo el botón que ya existe con `bg-red-500 text-white`.
3. **02 Fundamentos del contenedor** — añade otra vez el CDN, envuelve el título y el párrafo en un `<div>`, prueba primero `container mx-auto` y luego cámbialo por `w-full bg-gray-500` para comparar los dos comportamientos en la vista previa.
4. **03 Layout con flexbox** — parte la segunda fila en tres columnas `w-1/3` y añade una tercera fila con una única columna roja a ancho completo que lleve tu nombre dentro.
5. **04 Navbar con pestañas** — convierte una `<ul>` pelada en una barra horizontal de pestañas: `flex border-b list-none` en la lista, pestañas con `border-b-2`, borde y texto azules en la activa, bordes transparentes y estilos de hover en las demás.
6. **05 Menú lateral (sidebar)** — un layout de dos columnas con una barra `w-1/6` que contiene un menú vertical (`flex flex-col`) y un panel `w-5/6` en gris claro con un `<h4>`, un párrafo y un botón azul.
7. **06 Sección hero y 3 cajas** — un hero con `<h1>`, párrafo y botón azul de llamada a la acción, seguido de una fila de tres tarjetas iguales, cada una con su título, su texto y su botón.
8. **07 Botones, alerta y tabla** — la página partida en dos mitades: una columna de texto con botones de acción verde y rojo, y otra con una caja de alerta amarilla y una tabla a ancho completo de tres columnas y tres filas de datos.
9. **08 Formularios** — una tarjeta de login con fondo gris oscuro y esquinas redondeadas, un campo de email, uno de contraseña, un checkbox de "Remember me" y un botón azul "Login" a ancho completo.

Este es el diseño que se pide reproducir en el ejercicio 06, entero con clases de utilidad de Tailwind:

![Resultado esperado del ejercicio 06: una banda hero clara con el titular Hello, world!, un párrafo descriptivo y un botón azul Learn more, y debajo tres columnas iguales, cada una con un título Heading, un párrafo de texto de relleno y un botón con borde View details](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/.learn/assets/06-hero-section-and-three-boxes-result.png)

Y este es el formulario de login del último ejercicio:

![Resultado esperado del ejercicio 08: una tarjeta gris oscuro con esquinas redondeadas titulada Please login, con un campo Email Address, un campo Password, un checkbox Remember me y un botón azul Login que ocupa todo el ancho](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/.learn/assets/08-bootstrap-forms-result.png)

## 🎓 ¿Qué necesitas antes de empezar?

Poca cosa, pero los ejercicios dan por hecho que ya escribes HTML a mano:

- **Bases de HTML.** Tienes que moverte con soltura entre `<head>` y `<body>`, anidar etiquetas y usar atributos como `class`, `type` o `placeholder`. Si aún no es tu caso, empieza por [Aprende lo básico de HTML Interactivamente](https://4geeks.com/es/interactive-exercise/html-exercises-es).
- **Algo de vocabulario CSS.** Aquí no escribes CSS, pero saber qué son el padding, el borde, el fondo o flexbox hace que los nombres de las utilidades se entiendan solos. Lo cubren los [ejercicios interactivos de CSS](https://4geeks.com/es/interactive-exercise/css-exercises-es) y [Construye diseños de sitios web con CSS](https://4geeks.com/es/interactive-exercise/css-layouts-tutorial-exercises-es).
- **Cero instalación si usas Codespaces o Gitpod.** Ahí está todo preinstalado. Para trabajar en tu máquina necesitas Node.js y un par de paquetes globales (mira la sección de instalación local en GitHub).
- **Sin build, sin proyecto npm, sin PostCSS.** Tailwind llega por el script del CDN Play, así que lo único que editas es `index.html`.

## ✅ ¿Cómo funciona la corrección automática?

Ocho de los nueve ejercicios incluyen un archivo `tests.js`, con 69 pruebas en total: desde 3 comprobaciones en el ejercicio 01 hasta 15 en el 08. Cuando pulsas el botón de test en LearnPack, Jest 29 lee tu `index.html`, lo carga en un documento jsdom y lo inspecciona de dos maneras:

- **Consultas al DOM.** Selecciona tus elementos y comprueba `classList.contains(...)` con nombres de clase exactos, cuenta hijos y mira `nodeName` para confirmar que usaste la etiqueta pedida (`h2`, `h4`, `h5`, `table`, `form`...).
- **Comprobaciones sobre el texto del archivo.** Algunas aserciones se ejecutan sobre el fichero como cadena: la búsqueda de la línea exacta del `<script>` del CDN, el texto "Remember me" apareciendo después del checkbox, o la expresión regular que rechaza cualquier atributo `style=`.

El feedback es inmediato y aserción por aserción, así que un test en rojo te dice exactamente qué clase o qué etiqueta falta. Además, cada ejercicio corregido trae un `solution.hide.html` que puedes destapar si te atascas.

## 💡 ¿Qué errores conviene evitar?

Estas son las trampas que hacen fallar los tests aunque la vista previa se vea perfecta:

- **Tocar la línea del CDN.** Los ejercicios 01 a 07 buscan la cadena literal `<script src="https://cdn.tailwindcss.com"></script>` dentro del `<head>`: con otras comillas, un atributo de más o una URL distinta, no la encuentran. En los ejercicios 01 y 02 la escribes tú; a partir del 03 ya viene en el archivo y tiene que quedarse.
- **Tirar de CSS propio.** Desde el ejercicio 02, una etiqueta `<style>` suspende los tests. Desde el 03, una expresión regular recorre el archivo entero y rechaza cualquier atributo `style="..."`, incluso dentro de un comentario HTML. Todo se resuelve con clases de utilidad.
- **Equivocarte de tono.** La escala numérica de Tailwind se comprueba literalmente: `bg-red-500` (no `bg-red-600`) en los ejercicios 01 y 03, `bg-gray-500` en el 02, `bg-blue-600` en el 05 y el 06, `bg-green-600` y `bg-red-600` en el 07, `bg-yellow-100` para la alerta y `bg-gray-100` para el panel del sidebar.
- **Quedarte a medias en el ejercicio 02.** Las instrucciones te piden probar primero `container mx-auto` y después sustituirlo por `w-full`. Lo que se corrige es el estado final: `w-full bg-gray-500`.
- **Modificar el `<head>`.** Las metaetiquetas y el `<title>` tienen que quedarse tal cual. El ejercicio 08 es el más estricto: exactamente dos `<meta>` y el título `08 Tailwind Forms`.
- **Reescribir los textos que vienen dados.** El contenido se compara carácter a carácter: el `<h1>` y el `<p>` del ejercicio 02, el título `Please login` y la etiqueta `Login` del botón en el 08.
- **Dejar vacío un elemento obligatorio o añadir de más.** En el ejercicio 03, el nuevo `<div>` rojo a ancho completo tiene que llevar texto dentro (tu nombre). En el 08, el formulario debe tener exactamente tres `<input>`, ni uno más.

## ❓ Preguntas frecuentes

### ¿Necesito Node.js o un proceso de build para usar Tailwind aquí?

No. Cada ejercicio carga Tailwind con el CDN Play, un único `<script>` en el `<head>` que compila las clases de utilidad en el propio navegador. Lo único que editas es `index.html`. Node.js hace falta para ejecutar LearnPack y los tests en local, no para que Tailwind funcione; y si abres el tutorial en Codespaces, ya viene instalado.

### ¿Puedo usar el CDN Play en un sitio en producción?

No es recomendable. El [CDN Play de Tailwind](https://tailwindcss.com/docs/installation/play-cdn) está pensado para desarrollo y prototipos rápidos: manda el motor entero al navegador y genera las clases en tiempo de ejecución, lo que pesa y tarda más que una hoja de estilos ya compilada. Para producción se instala Tailwind como dependencia y se genera un CSS que contiene solo las clases que de verdad usas. Aquí se usa el CDN para que te centres en las utilidades y no en la configuración.

### ¿Por qué fallan mis tests si la vista previa se ve bien?

Porque el corrector mira nombres de clase, nombres de etiqueta y el texto del archivo, no los píxeles renderizados. `bg-red-600` se parece muchísimo a `bg-red-500` pero falla la aserción, `text-3xl font-bold` parece un título pero no es un `<h2>`, y un atributo `style` en línea que funciona de maravilla en el navegador se rechaza a propósito. Lee el mensaje de la aserción que falla: te nombra la clase o el elemento que esperaba.

### ¿Merece la pena aprender Tailwind si ya sé CSS?

Saber CSS es justo lo que hace que Tailwind encaje. El [enfoque utility-first](https://tailwindcss.com/docs/utility-first) no sustituye tu conocimiento de CSS, lo renombra: `px-4` es `padding-left/right: 1rem`, `w-1/3` es `width: 33.333%`, `flex` es `display: flex`. Lo que ganas es velocidad y consistencia —sin decidir nombres de clase, sin hoja aparte, sin CSS muerto—, y por eso es hoy uno de los enfoques de estilado más usados en front-end.

### ¿Cuánto se tarda en hacer este tutorial de Tailwind?

El paquete está estimado en unas 5 horas. Los cuatro primeros ejercicios son cortos (un script, un contenedor, una fila flex, una barra de pestañas), mientras que del 05 al 08 te piden reproducir una captura completa desde cero y se llevan la mayor parte del tiempo. Nada impide repartirlo en varias sesiones: LearnPack recuerda por dónde ibas.

### ¿Estos ejercicios cuestan algo?

No. Abrir el repositorio, ejecutarlo en Codespaces y resolver los nueve ejercicios no cuesta nada, y el HTML que escribas es tuyo. Ahora bien, el contenido del tutorial no es open source: la [LICENSE.md](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial/blob/HEAD/LICENSE.md) reserva todos los derechos de propiedad intelectual y prohíbe republicar, revender o redistribuir el material.

<!-- hide -->
## 📚 Otros tutoriales de la serie

1. [Aprende HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Aprende Formularios HTML](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Aprende CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Aprende CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Aprende Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)
6. [Aprende Tailwind CSS](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial) ← 🔥 estás aquí

## 🚀 Cómo empezar (en un clic)

Abre el tutorial en un entorno ya preparado, sin instalar nada:

- [Abrir en Codespaces](https://codespaces.new/?repo=4GeeksAcademy/tailwind-exercises-tutorial) (recomendado)
- [Abrir en Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/tailwind-exercises-tutorial.git)

> 💡 Cuando se abra VS Code, los ejercicios de LearnPack deberían arrancar solos. Si no lo hacen, escribe `learnpack start` en la terminal.

## 💻 Instalación local

Necesitas Node.js instalado. Después:

1. Clona el repositorio y entra en la carpeta:

    ```bash
    git clone https://github.com/4GeeksAcademy/tailwind-exercises-tutorial.git
    cd tailwind-exercises-tutorial
    ```

2. Instala globalmente el runner de tests, LearnPack y el plugin de HTML (son las versiones exactas que usa el dev container):

    ```bash
    npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
    npm i @learnpack/learnpack@5.0.13 -g
    learnpack plugins:install @learnpack/html@1.1.7
    ```

3. Arranca el tutorial desde la misma carpeta donde está `learn.json`:

    ```bash
    learnpack start
    ```

## 📝 Cómo están organizados los ejercicios

Cada ejercicio corregido es una carpeta dentro de `exercises/` con estos archivos:

- **index.html** — el único archivo que editas. Es una página HTML normal y corriente, ya conectada al CDN de Tailwind a partir del ejercicio 03.
- **README.md** y **README.es.md** — las instrucciones, en inglés y en español.
- **tests.js** — el script de corrección. No hace falta que lo abras, pero leerlo es la forma más rápida de entender por qué falla un test.
- **solution.hide.html** — una solución de referencia que LearnPack mantiene oculta hasta que la pides.

> 💡 El corrector es estricto con los nombres de clase y las etiquetas. Si estás explorando en vez de perseguir el check verde, tómate los tests como una sugerencia y sigue experimentando.

## 🤝 Colaboradores

Gracias a estas personas maravillosas ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — (código) 💻, (idea) 🤔, (build-tests) ⚠️, (revisión de PR) 🤓, (build-tutorial) ✅, (documentación) 📖
2. [Paolo Lucano (plucodev)](https://github.com/plucodev) — (código) 💻, (build-tests) ⚠️
3. [Charly Chacón (charlytoc)](https://github.com/charlytoc) — (código) 💻, (videotutoriales) 👀

Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors). ¡Todas las contribuciones son bienvenidas!

Este y muchos otros ejercicios los construyen los estudiantes del [Coding Bootcamp](https://4geeksacademy.com/es/curso-de-programacion-desde-cero) de 4Geeks Academy. Conoce más sobre el [Curso de Desarrollador Full Stack](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer).
<!-- endhide -->
