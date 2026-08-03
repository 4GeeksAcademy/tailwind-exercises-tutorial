<!-- hide -->
<div align="center">

# Learn Tailwind CSS from Zero

<a href="https://4geeks.com"><img src="https://img.shields.io/badge/certified-4Geeks-2563eb" alt="Certified by 4Geeks" /></a>
<a href="https://github.com/learnpack/learnpack"><img src="https://img.shields.io/badge/autograded-LearnPack-2563eb" alt="Auto-graded with LearnPack" /></a>
<a href="https://codespaces.new/?repo=4GeeksAcademy/tailwind-exercises-tutorial"><img src="https://img.shields.io/badge/Open%20in-Codespaces-fb5a1f?logo=github" alt="Open this tutorial in GitHub Codespaces" /></a>

![Cover image of the interactive tutorial: the words Learn Tailwind CSS next to the Tailwind CSS logo, a teal circle with two white waves, and the label interactive](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/preview.png)

**English** · [Español](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial/blob/HEAD/README.es.md)

</div>
<!-- endhide -->

This LearnPack tutorial teaches Tailwind CSS with 9 exercises: an intro plus 8 auto-graded challenges scored by 69 Jest tests. You load Tailwind from the Play CDN and build a centered container, a flexbox grid, a tab navbar, a sidebar menu, a hero with three cards, buttons with an alert and a table, and a login form — using utility classes only, with no custom CSS. Beginner level, about 5 hours.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty:** easy (beginner)
- **Duration:** around 5 hours
- **Exercises:** 9 folders, 8 of them auto-graded
- **Technologies:** Tailwind CSS, HTML, CSS
- **Grading:** automatic, 69 Jest + jsdom test cases
- **Languages:** English and Spanish instructions in every exercise
- **Environment:** GitHub Codespaces, Gitpod or local VS Code with LearnPack
<!-- endhide -->

## 🎯 What will you learn?

Tailwind CSS is a utility-first framework: instead of writing CSS rules in a separate file, you compose small classes such as `bg-red-500`, `px-4` or `flex` directly on your HTML elements. This tutorial drills that habit until it becomes muscle memory.

By the end you will be able to:

- Add Tailwind to any static page with the Play CDN `<script>` tag inside `<head>`.
- Control page width and centering with `container mx-auto` versus `w-full`, and see how the container changes at different screen sizes.
- Build rows and columns with `flex` plus fractional widths (`w-1/2`, `w-1/3`, `w-1/6`, `w-5/6`).
- Use the color scale properly: `bg-red-500`, `bg-blue-600`, `bg-gray-100`, `bg-yellow-100`, `text-white`, `text-blue-600`.
- Apply spacing and border utilities (`px-4`, `py-2`, `border-b`, `border-b-2`, `border-transparent`, `rounded`).
- Trigger state variants such as `hover:border-gray-400` and `hover:text-gray-800`.
- Assemble real interface pieces — navbar, sidebar, hero, cards, alert box, data table, login form — without writing a single line of custom CSS.

## 👀 What will you build?

Nine exercise folders, in this order. The first one is a written introduction; the other eight ship a `tests.js` file that grades your `index.html`:

1. **00 Welcome** — the intro to the course. Nothing to code yet.
2. **01 Add Tailwind CSS To Your Website** — paste the CDN script in `<head>` and turn the existing button red with `bg-red-500 text-white`.
3. **02 Tailwind Container Basics** — add the CDN again, wrap the heading and paragraph in a `<div>`, try `container mx-auto` first, then switch it to `w-full bg-gray-500` and compare both behaviours in the preview.
4. **03 Tailwind Flexbox Layout** — split the second row into three `w-1/3` columns and add a third row with a single full-width red column containing your name.
5. **04 Navbar with Tabs** — convert a plain `<ul>` into a horizontal tab bar: `flex border-b list-none` on the list, `border-b-2` tabs, blue border and blue text on the active one, transparent borders plus hover styles on the rest.
6. **05 Tailwind Sidebar With Menu** — a two-column layout with a `w-1/6` sidebar holding a vertical menu (`flex flex-col`) and a `w-5/6` light-gray panel with an `<h4>`, a paragraph and a blue button.
7. **06 Tailwind Hero Section And 3 Boxes** — a hero with `<h1>`, paragraph and blue call-to-action button, followed by a row of three equal cards, each with its own heading, text and button.
8. **07 Tailwind Buttons, Alert, and Table** — two halves of the page: a text column with green and red action buttons, and a column with a yellow alert box and a full-width table of three columns and three body rows.
9. **08 Tailwind Forms** — a login card with a dark-gray rounded background, an email input, a password input, a "Remember me" checkbox and a full-width blue "Login" button.

This is the layout you are asked to reproduce in exercise 06, entirely with Tailwind utility classes:

![Expected result of exercise 06: a light hero band with the headline Hello, world!, a descriptive paragraph and a blue Learn more button, followed by three equal columns, each with a Heading, a paragraph of placeholder text and an outlined View details button](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/.learn/assets/06-hero-section-and-three-boxes-result.png)

And this is the login form you build in the last exercise:

![Expected result of exercise 08: a dark-gray rounded card titled Please login, containing an Email Address field, a Password field, a Remember me checkbox and a full-width blue Login button](https://raw.githubusercontent.com/4GeeksAcademy/tailwind-exercises-tutorial/main/.learn/assets/08-bootstrap-forms-result.png)

## 🎓 What do you need before starting?

Not much, but the exercises assume you can already write HTML by hand:

- **HTML basics.** You should be comfortable with `<head>` and `<body>`, nesting elements, and using `class`, `type` and `placeholder` attributes. If not, start with [Learn the basics of HTML Interactively](https://4geeks.com/en/interactive-exercise/html-exercises).
- **A little CSS vocabulary.** You do not write CSS here, but knowing what padding, border, background and flexbox mean makes the utility names obvious. The [interactive CSS exercises](https://4geeks.com/en/interactive-exercise/css-exercises) and [Build Website Layouts with CSS](https://4geeks.com/en/interactive-exercise/css-layouts-tutorial-exercises) cover that ground.
- **Zero setup if you use Codespaces or Gitpod.** Everything is preinstalled there. To run it on your own machine you need Node.js and a couple of global packages (see the local installation section on GitHub).
- **No build step, no npm project, no PostCSS.** Tailwind arrives through the Play CDN script, so you only edit `index.html`.

## ✅ How does the automatic grading work?

Eight of the nine exercises contain a `tests.js` file, with 69 individual test cases in total — from 3 checks in exercise 01 up to 15 in exercise 08. When you press the test button in LearnPack, Jest 29 reads your `index.html`, loads it into a jsdom document and inspects it in two ways:

- **DOM queries.** It selects your elements and checks `classList.contains(...)` for exact class names, counts children, and reads `nodeName` to confirm you used the required tag (`h2`, `h4`, `h5`, `table`, `form`...).
- **Raw text checks.** Some assertions run against the file as a string, for example the search for the exact CDN `<script>` line, the "Remember me" text appearing after the checkbox, or the regular expression that rejects any `style=` attribute.

Feedback is instant and per-assertion, so a failing test tells you exactly which class or tag is missing. Every graded exercise also ships a `solution.hide.html` file you can reveal when you get stuck.

## 💡 What mistakes should you avoid?

These are the traps that make the tests fail even when the page looks correct in the preview:

- **Changing the CDN line.** Exercises 01 to 07 search for the literal string `<script src="https://cdn.tailwindcss.com"></script>` inside `<head>`, so different quotes, an extra attribute or a different URL simply will not be found. You add that line yourself in exercises 01 and 02; from 03 on it already comes in the file and must stay there.
- **Reaching for custom CSS.** From exercise 02 on, a `<style>` tag fails the tests. From exercise 03 on, a regular expression scans the whole file and rejects any `style="..."` attribute — even inside an HTML comment. Everything must be done with utility classes.
- **Using the wrong shade.** Tailwind's numeric scale is checked literally: `bg-red-500` (not `bg-red-600`) in exercises 01 and 03, `bg-gray-500` in 02, `bg-blue-600` in 05 and 06, `bg-green-600` and `bg-red-600` in 07, `bg-yellow-100` for the alert, `bg-gray-100` for the sidebar panel.
- **Stopping halfway through exercise 02.** The instructions ask you to try `container mx-auto` first and then replace it with `w-full`. The graded state is the final one: `w-full bg-gray-500`.
- **Touching the `<head>`.** The meta tags and the `<title>` must stay untouched. Exercise 08 is the strictest: exactly two `<meta>` tags and the title `08 Tailwind Forms`.
- **Rewriting the given text.** Content is compared character by character: the `<h1>` and `<p>` in exercise 02, the `Please login` heading and the `Login` button label in exercise 08.
- **Leaving a required element empty or adding extras.** In exercise 03 the new full-width red `<div>` must contain text (your name). In exercise 08 the form must have exactly three `<input>` elements, no more.

## ❓ Frequently asked questions

### Do I need Node.js or a build step to use Tailwind here?

No. Every exercise loads Tailwind through the Play CDN with a single `<script>` tag in the `<head>`, which compiles the utility classes in the browser. You only edit `index.html`. Node.js is needed to run LearnPack and the tests locally, not to make Tailwind work — and if you open the tutorial in Codespaces, it is already installed.

### Can I use the Play CDN in a real production site?

Not recommended. The [Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn) is designed for development and quick prototypes: it ships the whole engine to the browser and generates classes at runtime, which is heavier and slower than a compiled stylesheet. For production you install Tailwind as a dependency and build a CSS file that contains only the classes you actually use. This tutorial uses the CDN so you can focus on the utilities instead of on tooling.

### Why do my tests fail if the preview looks right?

Because the grader checks class names, tag names and file text, not the rendered pixels. `bg-red-600` looks almost identical to `bg-red-500` but fails the assertion, `text-3xl font-bold` looks like a heading but is not an `<h2>`, and an inline `style` attribute that works perfectly in the browser is rejected on purpose. Read the failing assertion message: it names the exact class or element it expected.

### Is Tailwind worth learning if I already know CSS?

Knowing CSS is what makes Tailwind click. The [utility-first approach](https://tailwindcss.com/docs/utility-first) does not replace CSS knowledge, it renames it: `px-4` is `padding-left/right: 1rem`, `w-1/3` is `width: 33.333%`, `flex` is `display: flex`. What you gain is speed and consistency — no naming decisions, no separate stylesheet, no dead CSS — which is why it is one of the most widely used styling approaches in modern front-end work.

### How long does this Tailwind tutorial take?

The package is estimated at around 5 hours. The first four exercises are short (a script tag, a container, a flex row, a tab bar), while exercises 05 to 08 ask you to reproduce a full screenshot from scratch and take most of the time. Nothing stops you from doing it across several sessions: LearnPack remembers where you left off.

### Do these exercises cost anything?

No. Opening the repository, running it in Codespaces and solving all nine exercises costs nothing, and the HTML you write is yours. The tutorial content itself is not open source: the [LICENSE.md](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial/blob/HEAD/LICENSE.md) reserves all intellectual property rights and forbids republishing, reselling or redistributing the material.

<!-- hide -->
## 📚 Other tutorials in this series

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Learn HTML Forms](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Learn Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)
6. [Learn Tailwind CSS](https://github.com/4GeeksAcademy/tailwind-exercises-tutorial) ← 🔥 you are here

## 🚀 How to start (one click)

Open the tutorial in a preconfigured environment, no installation required:

- [Open in Codespaces](https://codespaces.new/?repo=4GeeksAcademy/tailwind-exercises-tutorial) (recommended)
- [Open in Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/tailwind-exercises-tutorial.git)

> 💡 Once VS Code opens, the LearnPack exercises should start on their own. If they do not, type `learnpack start` in the terminal.

## 💻 Local installation

You need Node.js installed. Then:

1. Clone the repository and enter the folder:

    ```bash
    git clone https://github.com/4GeeksAcademy/tailwind-exercises-tutorial.git
    cd tailwind-exercises-tutorial
    ```

2. Install the test runner, LearnPack and the HTML plugin globally (these are the exact versions used by the dev container):

    ```bash
    npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
    npm i @learnpack/learnpack@5.0.13 -g
    learnpack plugins:install @learnpack/html@1.1.7
    ```

3. Start the tutorial from the same folder that contains `learn.json`:

    ```bash
    learnpack start
    ```

## 📝 How the exercises are organized

Every graded exercise is a folder inside `exercises/` with the following files:

- **index.html** — the only file you edit. It is a plain HTML page, already wired to the Tailwind CDN from exercise 03 onwards.
- **README.md** and **README.es.md** — the instructions, in English and Spanish.
- **tests.js** — the grading script. You do not need to open it, but reading it is the fastest way to understand why a test fails.
- **solution.hide.html** — a reference solution that LearnPack keeps hidden until you ask for it.

> 💡 The grader is strict about class names and tags. If you are exploring rather than grinding for a green check, treat the tests as a suggestion and keep experimenting.

## 🤝 Contributors

Thanks to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — (coder) 💻, (idea) 🤔, (build-tests) ⚠️, (pull-request-review) 🤓, (build-tutorial) ✅, (documentation) 📖
2. [Paolo Lucano (plucodev)](https://github.com/plucodev) — (coder) 💻, (build-tests) ⚠️
3. [Charly Chacón (charlytoc)](https://github.com/charlytoc) — (coder) 💻, (video-tutorials) 👀

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

This and many other exercises are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp). Find out more about the [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer).
<!-- endhide -->
