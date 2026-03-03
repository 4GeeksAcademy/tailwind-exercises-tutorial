# `02` Tailwind Container Basics

If you want to import Tailwind CSS to your website, you can use this CDN script:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

When using Tailwind, you can control the width and centering of your content with utility classes:

```html
<div class="container mx-auto"></div>
```
OR

```html
<div class="w-full"></div>
```


## 📝 Instructions:

1. Add the Tailwind CSS CDN script to the document using the `<script>` tag you find above.

2. Wrap the content of the website within a `<div>` with `container mx-auto` and `bg-gray-500` classes. 

3. **Build** and then **preview** the exercise to see the centered container.

4. Now change the classes of the `<div>` you've just created to `w-full` and `bg-gray-500` classes.

5. **Build** and then **preview** again and compare the differences.


## 🔎 Important:

To understand the difference between both approaches:
- `container mx-auto` creates a centered container with max-width breakpoints
- `w-full` makes the content span the full width of the page

Resize your browser window to see how the container behaves differently at various screen sizes.
