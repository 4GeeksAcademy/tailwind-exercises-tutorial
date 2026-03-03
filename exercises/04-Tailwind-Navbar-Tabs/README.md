# `04` Navbar with Tabs

As developers, we constantly create navigation menus the same way: Using `ul` tags, removing bullets from `li`, displaying the list inline, etc.

Tailwind CSS helps us by providing utility classes that we can combine to create beautiful navigation components.

In this case, we have a typical `ul` needed to create a menu, but without any CSS styles applied yet.

> More information on Tailwind navigation patterns: https://tailwindcss.com/docs/border-width

## 📝 Instructions:

1. **Build** and then **preview** the exercise.

2. Apply Tailwind classes to create a horizontal navigation with tab-style appearance:
   - Add `flex border-b border-gray-300` to the `ul` to create a horizontal container with a bottom border
   - Add `px-4 py-2 border-b-2 border-transparent hover:border-gray-400 hover:text-gray-800 text-gray-600` to each `a` tag for the tab styling
   - For the active tab (Home), use: `px-4 py-2 border-b-2 border-blue-500 text-blue-600`
   - Add `list-none` to the `ul` to remove default list styling

3. **Build** and then **preview** again to see the tab-style navigation.

## 💡 Concepts:

- `flex`: Makes the navigation horizontal
- `border-b`: Adds bottom border to the container
- `border-b-2`: Adds a 2px bottom border to individual tabs
- `border-blue-500`: Blue border for active tab
- `border-transparent`: Invisible border for inactive tabs
- `hover:border-gray-400`: Gray border on hover
- `px-4 py-2`: Padding for tab spacing
- `list-none`: Removes default list bullets
