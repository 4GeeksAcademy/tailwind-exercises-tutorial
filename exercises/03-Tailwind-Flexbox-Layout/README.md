# `03` Tailwind Flexbox Layout

Now let's talk about layouts with Tailwind. Tailwind uses **flexbox** and **fractional widths** to create responsive layouts with an intuitive approach.

With Tailwind, you can use flex utilities and width classes to control how your content is distributed:

For example:

```html
<div class="w-1/6">1/6 width</div>
<div class="w-1/3">1/3 width</div>
<div class="w-1/2">1/2 width</div>
```

Common width fractions:
- `w-1/2` = 50% width
- `w-1/3` = 33.33% width
- `w-1/4` = 25% width
- `w-full` = 100% width

To create a row of items, use `flex` on the parent container.

> More information on flexbox: https://tailwindcss.com/docs/flex


## 📝 Instructions:

1. Make the second row have 3 columns of the same width (split the row in 3).

2. Add a third row with only one column taking full width.

3. Change the background color of the row you just created to red, and add your name inside of the `<div>`.

4. Change the class of the main `<div>` from `container mx-auto` to `w-full`.


## 💡 Hints:

+ Use `w-1/3` for columns that take up 1/3 of the width.

+ Use `bg-red-500` for red background color.

+ Remember to add `flex` to the parent container to make flexbox work.


## 💻 Expected result:

![Example Image](../../.learn/assets/03-bootstrap-grid-result.png?raw=true)
