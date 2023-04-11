import * as google from "./google-fonts.js";
import translations from "./translations.js";

let initialized = false;
const loadedFonts = {};

// default options
const options = {
    language: "en",
    variants: true,
    recents: 3,
    localFontsUrl: "/fonts/",
    localFontsType: "woff",
    localFonts: {},
    googleFonts: google.fonts,
    default: {
        family: "Roboto",
        weight: "400",
        style: "normal",
    },
};

let modal;
let openedPicker;
let selectedFont;

// data storage for favorites and recents
let data = JSON.parse(localStorage.getItem("font_picker_data")) ?? { fav: [], rec: [] };
const storeData = () => localStorage.setItem("font_picker_data", JSON.stringify(data));

/**
 * @function toFontString
 * @description Stringify a font object to a font string
 * @memberof FontPicker
 * @param {object} f font object
 * @returns {string} font string
 */
const toFontString = (f) => {
    const variant = f.style === "italic" ? `${f.weight}i` : f.weight;
    return options.variants ? `${f.family}:${variant}` : f.family;
};

/**
 * @function fromFontString
 * @description Parse a font string to a font object
 * @memberof FontPicker
 * @param {string|object} s font string or object
 * @returns {object} font object
 */
const fromFontString = (s) => {
    const parsed = {family: null, weight: "400", style: "normal"};
    if(typeof s === "string") {
        const [family, variant] = s.split(":");
        if(family) parsed.family = family;
        if(variant) {
            parsed.weight = variant.replace("i", "");
            parsed.style = variant.includes("i") ? "italic" : "normal";
        }
    } else {
        Object.assign(parsed, s);
    }
    return parsed;
};

// make favourites and recents the first items in the picker
const sortFonts = () => {
    [...data.fav, ...data.rec].forEach((font) => {
        const element = document.querySelector(`#fp__fonts > [data-family="${font}"]`);
        if(element) element.parentElement.prepend(element);
    });
};

// when a heart button is pressed, add or remove the font from the favourites
const onHeartClick = function(e) {
    const family = this.parentElement.dataset.family;
    const favourite = this.classList.toggle("fp__fav");

    if(favourite) {
        data.fav.push(family);
    } else {
        data.fav = data.fav.filter((f) => f !== family);
    }

    storeData();
    sortFonts();

    favourite && this.parentElement.scrollIntoView({ block: "center" });
};

// create a heart button
const createHeart = () => {
    const button = document.createElement("span");
    button.className = "float-end fp__heart";
    button.setAttribute("role", "button");
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg>`;
    button.addEventListener("click", onHeartClick);
    return button;
};

const updatePreview = () => {
    const preview = document.getElementById("fp__preview");
    preview.style.fontFamily = selectedFont.dataset.family;
    preview.style.fontWeight = selectedFont.dataset.weight;
    preview.style.fontStyle = selectedFont.dataset.style;
};

// select a font item from the picker
const onVariantClick = (e) => {
    const fpVariants = document.getElementById("fp__variants");

    if(e.target.innerText === "Italic") {
        // toggle italic
        const active = e.target.classList.toggle("btn-info");
        e.target.classList.toggle("btn-secondary", !active);
    } else {
        // unselect the current variant
        const current = fpVariants.querySelector(".btn-primary");
        current.classList.remove("btn-primary");
        current.classList.add("btn-secondary");

        // select the new variant
        e.target.classList.add("btn-primary");
        e.target.classList.remove("btn-secondary");
    }

    // update the selected font
    const variant = fpVariants.querySelector(".btn-primary").innerText;
    const isItalic = fpVariants.querySelector(".btn-info");

    selectedFont.dataset.weight = variant;
    selectedFont.dataset.style = isItalic ? "italic" : "normal";

    updatePreview();
};

const selectFont = (font) => {
    if(selectedFont) {
        if(selectedFont === font) return; // already selected
        selectedFont.classList.remove("fp__selected");

        // remove heart if it is not a favourite
        const heart = selectedFont.querySelector(".fp__heart");
        if(!heart.classList.contains("fp__fav")) heart.remove();
    }

    // make selected and add a heart button
    font.classList.add("fp__selected");
    if(!font.querySelector(".fp__heart")) {
        font.appendChild(createHeart());
    }

    // make variants visible
    const fpVariants = document.getElementById("fp__variants");
    fpVariants.classList.toggle("d-none", !options.variants);
    fpVariants.innerHTML = "";

    const filtered = font.dataset.variants.split(",").filter((v) => !v.endsWith("i"));
    let variants = [ "Italic", ...filtered ];

    if(options.variants) {
        for(const variant of variants) {
            const badge = document.createElement("button");
            badge.className = "badge rounded-pill btn";
            badge.innerText = variant;

            if(font.dataset.weight === variant) badge.classList.add("btn-primary");
            else if(variant === "Italic" && font.dataset.style === "italic") badge.classList.add("btn-info");
            else badge.classList.add("btn-secondary");

            fpVariants.appendChild(badge);
            badge.addEventListener("click", onVariantClick);
        }
    }

    selectedFont = font;
    updatePreview();
};

// open a font picker from its input
const openPicker = (input) => {
    if(!modal) createModal();
    openedPicker = input;

    const { family, weight, style } = fromFontString(input.value);
    const item = document.querySelector(`#fp__fonts > [data-family="${family}"]`);
    item.dataset.weight = weight;
    item.dataset.style = style;
    selectFont(item);

    sortFonts();
    modal.show();
};

// set the value of the input element
const setPicker = (input, _font, fire = false) => {
    const font = fromFontString(_font);
    loadFont(font.family);

    input.value = toFontString(font);
    input.style.fontFamily = font.family;
    input.style.fontWeight = font.weight;
    input.style.fontStyle = font.style;

    // add to recents
    data.rec = data.rec.filter((f) => f !== font.family);
    while(data.rec.length >= options.recents) data.rec.shift();
    data.rec.push(font.family);
    storeData();

    fire && input.dispatchEvent(new Event("input"));
};

// when search input changes
const onSearchInput = (e) => {
    const filter = e.target.value.toLowerCase().trim();
    const fonts = document.querySelectorAll("#fp__fonts > div");
    fonts.forEach((font) => {
        const name = font.dataset.family.toLowerCase();
        font.classList.toggle("hide-s", !name.includes(filter));
    });
};

// when a font category badge is clicked
const onBadgeClick = (e) => {
    const active = e.target.classList.toggle("btn-primary");
    e.target.classList.toggle("btn-secondary", !active);

    const category = e.target.innerText;
    const fonts = document.querySelectorAll("#fp__fonts > div");
    fonts.forEach((font) => {
        if(font.dataset.category == category) {
            font.classList.toggle("hide-c", !active);
        }
    });
};

// when the language select changes
const onLangChange = (e) => {
    const lang = e.target.value;
    const fonts = document.querySelectorAll("#fp__fonts > div");

    fonts.forEach((font) => {
        const fontLang = font.dataset.subsets.split(",");
        const hide = !fontLang.includes(lang) && lang !== "all";
        font.classList.toggle("hide-l", hide);
    });
};

// when a font item is clicked and double clicked
const onFontClick = function(e) {
    selectFont(this);
};

const onFontDblClick = function(e) {
    setPicker(openedPicker, {
        family: this.dataset.family,
        weight: this.dataset.weight,
        style: this.dataset.style,
    }, true);
    modal.hide();
};

const selectNext = (offset) => {
    const children = Array.from(selectedFont.parentElement.children);
    const siblings = children.filter(s => {
        return !s.classList.contains("hide-s") && !s.classList.contains("hide-c") && !s.classList.contains("hide-l");
    });

    const index = siblings.indexOf(selectedFont);
    const next = siblings[index + offset];
    if(next) {
        selectFont(next);
        next.scrollIntoView({ block: "center" });
    }
};

const selectNextStyle = (offset) => {
    const parent = document.getElementById("fp__variants");
    const children = Array.from(parent.children);
    const index = children.indexOf(parent.querySelector(".btn-primary"));
    const next = children[index + offset];
    if(next) {
        next.click();
    }
};

const onKeyPress = (e) => {
    if(!modal?._isShown) {
        if(e.target.classList.contains("fp__input") && (e.key === "Enter" || e.key === " ")) {
            openPicker(e.target);
            e.preventDefault();
        }
        return;
    }

    if(e.key === "Escape") {
        modal.hide();
        e.preventDefault();
        return;
    }

    const searchBox = document.getElementById("fp__search");
    const langBox = document.getElementById("fp__languages");
    if(searchBox.matches(":focus") || langBox.matches(":focus")) {
        if(e.key === "Enter") {
            searchBox.blur();
            langBox.blur();
            e.preventDefault();
        }
        return;
    }

    if(e.key === "Enter") {
        onFontDblClick.call(selectedFont);
        e.preventDefault();
    } else if(e.key === "ArrowUp") {
        selectNext(-1);
        e.preventDefault();
    } else if(e.key === "ArrowDown") {
        selectNext(1);
        e.preventDefault();
    } else if(e.key === "ArrowLeft" && options.variants) {
        selectNextStyle(-1);
        e.preventDefault();
    } else if(e.key === "ArrowRight" && options.variants) {
        selectNextStyle(1);
        e.preventDefault();
    } else if(e.ctrlKey && e.key === "i" && options.variants) {
        document.querySelector("#fp__variants > :nth-child(1)").click();
        e.preventDefault();
    } else if(e.ctrlKey && e.key === "f") {
        selectedFont.querySelector(".fp__heart").click();
        e.preventDefault();
    } else if(e.key === "/") {
        document.getElementById("fp__search").focus();
        e.preventDefault();
    } else if(/[a-z]/.test(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const fonts = Array.from(document.querySelectorAll("#fp__fonts > div"));
        const first = fonts.find(f => !f.classList.contains("hide-s") && !f.classList.contains("hide-c") && !f.classList.contains("hide-l") && f.dataset.family.toLowerCase().startsWith(e.key));
        if(first) {
            selectFont(first);
            first.scrollIntoView({ block: "center" });
        }
    }
};

// create the modal
const createModal = () => {
    // insert the modal HTML and a small stylesheet into the document
    document.head.insertAdjacentHTML("beforeend", `<style>.hide-s, .hide-c, .hide-l { display: none; } #fp__preview { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; } .fp__font-item { color: var(--bs-dark); } .fp__font-item:hover { background: var(--bs-gray-300); } .fp__font-item.fp__selected { color: var(--bs-light); background: var(--bs-primary); } .fp__heart>svg { fill: none; stroke: var(--bs-light); height: 1em; } .fp__heart:hover>svg { fill: var(--bs-light); } .fp__heart.fp__fav>svg { stroke: var(--bs-danger); fill: var(--bs-danger); } .fp__selected>.fp__heart.fp__fav>svg { stroke: var(--bs-light); fill: var(--bs-light); }</style>`);
    document.body.insertAdjacentHTML("beforeend", `<div class="modal fade" id="fp__modal" tabindex="-1"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="fp__title"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="row g-2 py-2 px-3 border border-bottom"><div class="col-sm-6"><input class="form-control" id="fp__search"></div><div class="col-sm-6"> <select class="form-select" id="fp__languages"></select></div><div class="col-12 d-flex flex-wrap gap-2 justify-content-center" id="fp__categories"></div><div class="col-12 text-center fs-5" id="fp__preview" contenteditable spellcheck="false"></div></div><div class="modal-body pt-2" id="fp__fonts"></div><div class="py-2 px-3 border-top border-bottom d-flex flex-wrap gap-2 justify-content-center" id="fp__variants"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" id="fp__cancel"></button><button type="button" class="btn btn-primary" id="fp__pick"></button></div></div></div></div>`);

    // keep references to often used elements
    const fpModal = document.getElementById("fp__modal");
    const fpLanguages = document.getElementById("fp__languages");
    const fpCategories = document.getElementById("fp__categories");
    const fpFonts = document.getElementById("fp__fonts");
    const fpPick = document.getElementById("fp__pick");
    const fpCancel = document.getElementById("fp__cancel");
    const fpSearch = document.getElementById("fp__search");

    // translate title and preview text
    document.getElementById("fp__title").innerText = translations[options.language].selectFont;
    document.getElementById("fp__preview").innerText = translations[options.language].sampleText;

    // populate language select element
    const languageOptions = [
        ["all", translations[options.language].allLangs],
        ...Object.entries(google.languages),
    ];

    for (const [value, text] of languageOptions) {
        const option = document.createElement("option");
        option.value = value;
        option.innerText = text;
        fpLanguages.appendChild(option);
    }

    fpLanguages.addEventListener("change", onLangChange);

    // create category filter badges
    for (const category of google.categories) {
        const badge = document.createElement("button");
        badge.className = "badge rounded-pill btn btn-primary";
        badge.innerText = category;
        fpCategories.appendChild(badge);

        badge.addEventListener("click", onBadgeClick);
    }

    // make input searchable
    fpSearch.placeholder = translations[options.language].search;
    fpSearch.addEventListener("input", onSearchInput);

    // when fonts are scrolled into view, load them
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                const fontItem = entry.target;
                const family = fontItem.dataset.family;

                loadFont(family);
                observer.unobserve(fontItem);
            }
        });
    });

    // populate font list with all fonts
    const fontList = { ...options.localFonts || {}, ...options.googleFonts || {} };

    for (const [family, font] of Object.entries(fontList)) {
        const fontItem = document.createElement("div");
        fontItem.className = "px-3 py-1 my-1 fp__font-item rounded-pill user-select-none";
        fontItem.setAttribute("role", "button");

        const fontName = document.createElement("span");
        fontName.className = "fs-6";
        fontName.innerText = family;
        fontName.style.fontFamily = family;

        fontItem.appendChild(fontName);
        fpFonts.appendChild(fontItem);

        fontItem.dataset.family = family;
        fontItem.dataset.variants = font.variants;
        fontItem.dataset.weight = "400";
        fontItem.dataset.style = "normal";
        fontItem.dataset.category = font.category;
        fontItem.dataset.subsets = font.subsets ?? "";

        // if favourite, add heart button
        if (data.fav.includes(family)) {
            const heartButton = createHeart();
            heartButton.classList.add("fp__fav");
            fontItem.appendChild(heartButton);
        }

        observer.observe(fontItem);
        fontItem.addEventListener("click", onFontClick);
        fontItem.addEventListener("dblclick", onFontDblClick);
    }

    // make the pick button clickable
    fpPick.innerText = translations[options.language].select;
    fpPick.addEventListener("click", () => {
        setPicker(openedPicker, {
            family: selectedFont.dataset.family,
            weight: selectedFont.dataset.weight,
            style: selectedFont.dataset.style,
        }, true);
        modal.hide();
    });

    // make the cancel button clickable
    fpCancel.innerText = translations[options.language].cancel;
    fpCancel.addEventListener("click", () => {
        modal.hide();
    });

    // on open, scroll to selected font
    fpModal.addEventListener("shown.bs.modal", () => {
        selectedFont.scrollIntoView({ block: "center" });
    });

    modal = new bootstrap.Modal(fpModal);
};

/**
 * @function loadFont
 * @description Load a font by name
 * @memberof FontPicker
 * @param {string|object} _font font object
 * @returns {Promise} promise that resolves when font is loaded
 */
const loadFont = (_font) => {
    // parse font name
    const font = fromFontString(_font);
    const name = font.family;

    // return existing promise
    if (loadedFonts.hasOwnProperty(name)) {
        return loadedFonts[name];
    }

    let promise;
    const googleFont = options.googleFonts[name];
    if (googleFont) {
        // Load Google font
        const family = `${encodeURIComponent(name)}:${googleFont.variants}&display=swap`;
        const url = "https://fonts.googleapis.com/css?family=" + family;
        const link = document.createElement("link");
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);

        // set promise that waits for font to load
        promise = new Promise((resolve) => {
            link.addEventListener("load", () => {
                const shorthand = `1em "${name}"`;
                document.fonts.load(shorthand).then(resolve);
            });
        });
    } else {
        // Load local font
        const fontUrl = `${options.localFontsUrl}${font}.${options.localFontsType}`;
        const fontFace = new FontFace(font, `url(${fontUrl})`);

        // add font and set promise that waits for font to load
        promise = document.fonts.add(fontFace).load(font);
    }

    loadedFonts[name] = promise;
    return promise;
};

/**
 * @function initialize
 * @description Initialize the font picker
 * @memberof FontPicker
 * @param {Object} _options
 * @param {string} _options.language font picker language
 * @param {boolean} _options.variants use font variants?
 * @param {number} _options.recents number of recent fonts to show
 * @param {string} _options.localFontsUrl url to local fonts
 * @param {string} _options.localFontsType local font type extension
 * @param {Object?} _options.localFonts local fonts object
 * @param {Object?} _options.googleFonts google fonts object
 * @param {string} _options.defaultFont default font
 */

const initialize = (_options) => {
    // ensure the font picker is not initialized twice
    if(initialized) {
        throw new TypeError("Font picker has already been initialized.");
    }

    Object.assign(options, _options);
    window.addEventListener("keydown", onKeyPress);

    initialized = true;
};

/**
 * @function create
 * @description Create a font picker and return it
 * @memberof FontPicker
 * @returns {HTMLInputElement} font picker
 */

const create = () => {
    const input = document.createElement("input");
    return attach(input);
};

/**
 * @function attach
 * @description Attach a font picker to an input element
 * @memberof FontPicker
 * @param {HTMLInputElement} input
 * @returns {HTMLInputElement} font picker
 */

const attach = (input) => {
    if (!initialized) {
        throw new TypeError("Font picker has not been initialized yet.");
    }

    input.type = "text";
    input.classList.add("form-select", "fp__input");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("role", "button");

    input.open = () => openPicker(input);
    input.setFont = (font, fire) => setPicker(input, font, fire);
    input.getFont = () => fromFontString(input.value);

    input.addEventListener("click", input.open);
    setPicker(input, input.value || options.default, false);

    return input;
};

/**
 * @namespace FontPicker
 */
const FontPicker = {
    loadFont,
    initialize,
    create,
    attach,
    fromFontString,
    toFontString,
};

export default FontPicker;
