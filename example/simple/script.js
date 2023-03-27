import FontPicker from "../../lib/fontpicker.js";

// initialize the font picker
FontPicker.initialize({
    localFonts: false,
    language: "en",
});

const input = document.getElementById("font");
const fontPicker = FontPicker.attach(input);

fontPicker.setFont("Roboto");
fontPicker.open();

// add event listener
fontPicker.addEventListener("input", (e) => {
    const {family, weight, style} = e.target.getFont();
    alert(`${family}, ${weight}, ${style}`);
});
