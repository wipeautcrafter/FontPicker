import FontPicker from "../../lib/fontpicker.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const drawToCanvas = async (text, size, family) => {

    // make sure font is loaded before drawing
    await FontPicker.loadFont(family);
    const font = `${size}px ${family}`;

    // measure text size
    ctx.font = font;
    const measure = ctx.measureText(text);
    canvas.width = measure.width;
    canvas.height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;

    // clear canvas and draw text
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = font;
    ctx.fillText(text, 0, measure.actualBoundingBoxAscent);
};

// initialize the font picker
FontPicker.initialize({
    localFonts: false,
    language: "en",
});

const input = document.getElementById("font");
const fontPicker = FontPicker.attach(input);

// open font picker
fontPicker.set("Roboto");
drawToCanvas("Hello World!", 100, "Roboto");

// add event listener
fontPicker.addEventListener("input", (e) => {
    const family = e.target.value;
    FontPicker.loadFont(family).then(() => {
        drawToCanvas("Hello World!", 100, family);
    });
});
