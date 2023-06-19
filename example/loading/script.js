import FontPicker from "../../lib/fontpicker.js";

// initialize the font picker
FontPicker.initialize({
    localFonts: false,
    language: "en",
});

const fonts = [
    "Montserrat",
    "Anton",
    "Open Sans",
    "Roboto",
    "Lato",
    "Raleway",
    "Oswald",
    "Poppins",
    "Nunito",
].map((font) => {
    const promise = FontPicker.loadFont(font);
    return { font, promise };
});

const container = document.getElementById("status");

fonts.forEach(({ font, promise }) => {
    const el = document.createElement("div");
    el.innerText = `${font} - loading...`;
    container.appendChild(el);

    promise.then(() => {
        el.innerText = `${font} - loaded`;
        el.style.fontFamily = font;
    }).catch(() => {
        el.innerText = `${font} - failed`;
    });
});
