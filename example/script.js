import FontPicker from "../lib/fontpicker.js";

// initialize the font picker
FontPicker.initialize({
    localFonts: false,
    language: "en",
});

const input = document.getElementById("font");
const fontPicker = FontPicker.attach(input);

// add example event listener
fontPicker.addEventListener("input", (e) => {
    console.log(e.target.value);
});

// open font picker
fontPicker.open();
