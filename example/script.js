import FontPicker from "../lib/fontpicker.esm.js";

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
