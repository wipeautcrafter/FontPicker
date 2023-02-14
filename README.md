# Bootstrap 5 Google Fonts Picker
A Google fonts picker input element, powered by Bootstrap. The picker uses 99.9% Bootstrap, and thus, should work with almost all Bootstrap themes.

## Usage
```js
// initialize the font picker
FontPicker.initialize({
    localFonts: false,
    language: "nl",
});

const input = document.getElementById("font");
const fontPicker = FontPicker.create(input);

// add example event listener
fontPicker.addEventListener("input", (e) => {
    console.log(e.target.value);
});

// open font picker
fontPicker.open();
```

## Options
* {string} language - font picker language
* {boolean} variants - use font variants?
* {number} recents - number of recent fonts to show
* {string} localFontsUrl - url to local fonts
* {string} localFontsType - local font type extension
* {Object?} localFonts - local fonts object
* {Object?} googleFonts - google fonts object
* {string} defaultFont - default font

## Dependencies
The picker requires both a Bootstrap 5 CSS and JS file in order to work properly.
