/* Copyright 2023 EvoStack. All rights reserved. */
// lib/google-fonts.js
var categories = ["serif", "sans-serif", "display", "handwriting", "monospace"];
var languages = {
  arabic: "Arabic",
  bengali: "Bengali",
  "chinese-hongkong": "Chinese (Hong Kong)",
  "chinese-simplified": "Chinese (Simplified)",
  "chinese-traditional": "Chinese (Traditional)",
  cyrillic: "Cyrillic",
  "cyrillic-ext": "Cyrillic Extended",
  devanagari: "Devanagari",
  greek: "Greek",
  "greek-ext": "Greek Extended",
  gujarati: "Gujarati",
  gurmukhi: "Gurmukhi",
  hebrew: "Hebrew",
  japanese: "Japanese",
  kannada: "Kannada",
  khmer: "Khmer",
  korean: "Korean",
  latin: "Latin",
  "latin-ext": "Latin Extended",
  malayalam: "Malayalam",
  myanmar: "Myanmar",
  oriya: "Oriya",
  sinhala: "Sinhala",
  tamil: "Tamil",
  telugu: "Telugu",
  thai: "Thai",
  tibetan: "Tibetan",
  vietnamese: "Vietnamese"
};
var fonts = {
  ABeeZee: {
    category: "sans-serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Abel: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Abhaya Libre": {
    category: "serif",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext,sinhala"
  },
  "Abril Fatface": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Aclonica: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Acme: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Actor: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Adamina: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Advent Pro": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "greek,latin,latin-ext"
  },
  "Aguafina Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Akaya Kanadaka": {
    category: "display",
    variants: "400",
    subsets: "kannada,latin,latin-ext"
  },
  "Akaya Telivigala": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,telugu"
  },
  Akronim: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Aladin: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Alata: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Alatsi: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Aldrich: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Alef: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "hebrew,latin"
  },
  Alegreya: {
    category: "serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Alegreya SC": {
    category: "serif",
    variants: "400,400i,500,500i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Alegreya Sans": {
    category: "sans-serif",
    variants: "100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Alegreya Sans SC": {
    category: "sans-serif",
    variants: "100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  Aleo: {
    category: "serif",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Alex Brush": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Alfa Slab One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Alice: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Alike: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Alike Angular": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Allan: {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  Allerta: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Allerta Stencil": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Allison: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Allura: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Almarai: {
    category: "sans-serif",
    variants: "300,400,700,800",
    subsets: "arabic"
  },
  Almendra: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Almendra Display": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Almendra SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Alumni Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Amarante: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Amaranth: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "Amatic SC": {
    category: "handwriting",
    variants: "400,700",
    subsets: "cyrillic,hebrew,latin,latin-ext,vietnamese"
  },
  Amethysta: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Amiko: {
    category: "sans-serif",
    variants: "400,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Amiri: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "arabic,latin,latin-ext"
  },
  Amita: {
    category: "handwriting",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Anaheim: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Andada Pro": {
    category: "serif",
    variants: "400,500,600,700,800,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Andika: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Andika New Basic": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Angkor: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Annie Use Your Telescope": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Anonymous Pro": {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,greek,latin,latin-ext"
  },
  Antic: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Antic Didone": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Antic Slab": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Anton: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Antonio: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "latin,latin-ext"
  },
  Arapey: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Arbutus: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Arbutus Slab": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Architects Daughter": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Archivo: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Archivo Black": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Archivo Narrow": {
    category: "sans-serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Are You Serious": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Aref Ruqaa": {
    category: "serif",
    variants: "400,700",
    subsets: "arabic,latin,latin-ext"
  },
  "Arima Madurai": {
    category: "display",
    variants: "100,200,300,400,500,700,800,900",
    subsets: "latin,latin-ext,tamil,vietnamese"
  },
  Arimo: {
    category: "sans-serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese"
  },
  Arizonia: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Armata: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Arsenal: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Artifika: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Arvo: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  Arya: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Asap: {
    category: "sans-serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Asap Condensed": {
    category: "sans-serif",
    variants: "400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Asar: {
    category: "serif",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  Asset: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Assistant: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "hebrew,latin,latin-ext"
  },
  Astloch: {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  Asul: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin"
  },
  Athiti: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Atkinson Hyperlegible": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Atma: {
    category: "display",
    variants: "300,400,500,600,700",
    subsets: "bengali,latin,latin-ext"
  },
  "Atomic Age": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Aubrey: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Audiowide: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Autour One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Average: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Average Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Averia Gruesa Libre": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Averia Libre": {
    category: "display",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin"
  },
  "Averia Sans Libre": {
    category: "display",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin"
  },
  "Averia Serif Libre": {
    category: "display",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin"
  },
  "Azeret Mono": {
    category: "monospace",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  B612: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "B612 Mono": {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "Bad Script": {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,latin"
  },
  Bahiana: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Bahianita: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bai Jamjuree": {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Bakbak One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Ballet: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Baloo 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "devanagari,latin,latin-ext,vietnamese"
  },
  "Baloo Bhai 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "gujarati,latin,latin-ext,vietnamese"
  },
  "Baloo Bhaijaan 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  "Baloo Bhaina 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext,oriya,vietnamese"
  },
  "Baloo Chettan 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext,malayalam,vietnamese"
  },
  "Baloo Da 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "bengali,latin,latin-ext,vietnamese"
  },
  "Baloo Paaji 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "gurmukhi,latin,latin-ext,vietnamese"
  },
  "Baloo Tamma 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "kannada,latin,latin-ext,vietnamese"
  },
  "Baloo Tammudu 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext,telugu,vietnamese"
  },
  "Baloo Thambi 2": {
    category: "display",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext,tamil,vietnamese"
  },
  "Balsamiq Sans": {
    category: "display",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Balthazar: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Bangers: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Barlow: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Barlow Condensed": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Barlow Semi Condensed": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Barriecito: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Barrio: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Basic: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Baskervville: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Battambang: {
    category: "display",
    variants: "100,300,400,700,900",
    subsets: "khmer,latin"
  },
  Baumans: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Bayon: {
    category: "sans-serif",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Be Vietnam Pro": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bebas Neue": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Belgrano: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Bellefair: {
    category: "serif",
    variants: "400",
    subsets: "hebrew,latin,latin-ext"
  },
  Belleza: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Bellota: {
    category: "display",
    variants: "300,300i,400,400i,700,700i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Bellota Text": {
    category: "display",
    variants: "300,300i,400,400i,700,700i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  BenchNine: {
    category: "sans-serif",
    variants: "300,400,700",
    subsets: "latin,latin-ext"
  },
  Benne: {
    category: "serif",
    variants: "400",
    subsets: "kannada,latin,latin-ext"
  },
  Bentham: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Berkshire Swash": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Besley: {
    category: "serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  "Beth Ellen": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Bevan: {
    category: "display",
    variants: "400,400i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Display": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Inline Display": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Inline Text": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Stencil Display": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Stencil Text": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Big Shoulders Text": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bigelow Rules": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Bigshot One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Bilbo: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bilbo Swash Caps": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  BioRhyme: {
    category: "serif",
    variants: "200,300,400,700,800",
    subsets: "latin,latin-ext"
  },
  "BioRhyme Expanded": {
    category: "serif",
    variants: "200,300,400,700,800",
    subsets: "latin,latin-ext"
  },
  Birthstone: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Birthstone Bounce": {
    category: "handwriting",
    variants: "400,500",
    subsets: "latin,latin-ext,vietnamese"
  },
  Biryani: {
    category: "sans-serif",
    variants: "200,300,400,600,700,800,900",
    subsets: "devanagari,latin,latin-ext"
  },
  Bitter: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Black And White Picture": {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin"
  },
  "Black Han Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin"
  },
  "Black Ops One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Blinker: {
    category: "sans-serif",
    variants: "100,200,300,400,600,700,800,900",
    subsets: "latin,latin-ext"
  },
  "Bodoni Moda": {
    category: "serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  Bokor: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Bona Nova": {
    category: "serif",
    variants: "400,400i,700",
    subsets: "cyrillic,cyrillic-ext,greek,hebrew,latin,latin-ext,vietnamese"
  },
  Bonbon: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Bonheur Royale": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Boogaloo: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Bowlby One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Bowlby One SC": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Brawler: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Bree Serif": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Brygada 1918": {
    category: "serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Bubblegum Sans": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Bubbler One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Buda: {
    category: "display",
    variants: "300",
    subsets: "latin"
  },
  Buenard: {
    category: "serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  Bungee: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bungee Hairline": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bungee Inline": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bungee Outline": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Bungee Shade": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Butcherman: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Butterfly Kids": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Cabin: {
    category: "sans-serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Cabin Condensed": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Cabin Sketch": {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  "Caesar Dressing": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Cagliostro: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Cairo: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,900",
    subsets: "arabic,latin,latin-ext"
  },
  Caladea: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Calistoga: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Calligraffitti: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Cambay: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "devanagari,latin,latin-ext"
  },
  Cambo: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Candal: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Cantarell: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "Cantata One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Cantora One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Capriola: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Caramel: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Carattere: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Cardo: {
    category: "serif",
    variants: "400,400i,700",
    subsets: "greek,greek-ext,latin,latin-ext"
  },
  Carme: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Carrois Gothic": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Carrois Gothic SC": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Carter One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Castoro: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Catamaran: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,tamil"
  },
  Caudex: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "greek,greek-ext,latin,latin-ext"
  },
  Caveat: {
    category: "handwriting",
    variants: "400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "Caveat Brush": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Cedarville Cursive": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Ceviche One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Chakra Petch": {
    category: "sans-serif",
    variants: "300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Changa: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "arabic,latin,latin-ext"
  },
  "Changa One": {
    category: "display",
    variants: "400,400i",
    subsets: "latin"
  },
  Chango: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Charm: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Charmonman: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Chathura: {
    category: "sans-serif",
    variants: "100,300,400,700,800",
    subsets: "latin,telugu"
  },
  "Chau Philomene One": {
    category: "sans-serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Chela One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Chelsea Market": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Chenla: {
    category: "display",
    variants: "400",
    subsets: "khmer"
  },
  Cherish: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Cherry Cream Soda": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Cherry Swash": {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  Chewy: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Chicle: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Chilanka: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,malayalam"
  },
  Chivo: {
    category: "sans-serif",
    variants: "300,300i,400,400i,700,700i,900,900i",
    subsets: "latin,latin-ext"
  },
  Chonburi: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Cinzel: {
    category: "serif",
    variants: "400,500,600,700,800,900",
    subsets: "latin,latin-ext"
  },
  "Cinzel Decorative": {
    category: "display",
    variants: "400,700,900",
    subsets: "latin"
  },
  "Clicker Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Coda: {
    category: "display",
    variants: "400,800",
    subsets: "latin,latin-ext"
  },
  "Coda Caption": {
    category: "sans-serif",
    variants: "800",
    subsets: "latin,latin-ext"
  },
  Codystar: {
    category: "display",
    variants: "300,400",
    subsets: "latin,latin-ext"
  },
  Coiny: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,tamil,vietnamese"
  },
  Combo: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Comfortaa: {
    category: "display",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  Comforter: {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Comforter Brush": {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Comic Neue": {
    category: "handwriting",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin"
  },
  "Coming Soon": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Commissioner: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Concert One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Condiment: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Content: {
    category: "display",
    variants: "400,700",
    subsets: "khmer"
  },
  "Contrail One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Convergence: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Cookie: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Copse: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Corben: {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  Corinthia: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Cormorant: {
    category: "serif",
    variants: "300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cormorant Garamond": {
    category: "serif",
    variants: "300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cormorant Infant": {
    category: "serif",
    variants: "300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cormorant SC": {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cormorant Unicase": {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cormorant Upright": {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Courgette: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Courier Prime": {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Cousine: {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese"
  },
  Coustard: {
    category: "serif",
    variants: "400,900",
    subsets: "latin"
  },
  "Covered By Your Grace": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Crafty Girls": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Creepster: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Crete Round": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Crimson Pro": {
    category: "serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Croissant One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Crushed: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Cuprum: {
    category: "sans-serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Cute Font": {
    category: "display",
    variants: "400",
    subsets: "korean,latin"
  },
  Cutive: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Cutive Mono": {
    category: "monospace",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "DM Mono": {
    category: "monospace",
    variants: "300,300i,400,400i,500,500i",
    subsets: "latin,latin-ext"
  },
  "DM Sans": {
    category: "sans-serif",
    variants: "400,400i,500,500i,700,700i",
    subsets: "latin,latin-ext"
  },
  "DM Serif Display": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "DM Serif Text": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Damion: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Dancing Script": {
    category: "handwriting",
    variants: "400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Dangrek: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Darker Grotesque": {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "David Libre": {
    category: "serif",
    variants: "400,500,700",
    subsets: "hebrew,latin,latin-ext,vietnamese"
  },
  "Dawning of a New Day": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Days One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Dekko: {
    category: "handwriting",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  "Dela Gothic One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,greek,japanese,latin,latin-ext,vietnamese"
  },
  Delius: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Delius Swash Caps": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Delius Unicase": {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin"
  },
  "Della Respira": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Denk One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Devonshire: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Dhurjati: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  "Didact Gothic": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  Diplomata: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Diplomata SC": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Do Hyeon": {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin"
  },
  Dokdo: {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  Domine: {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "latin,latin-ext"
  },
  "Donegal One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Dongle: {
    category: "sans-serif",
    variants: "300,400,700",
    subsets: "korean,latin,latin-ext,vietnamese"
  },
  "Doppio One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Dorsa: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Dosis: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "latin,latin-ext,vietnamese"
  },
  DotGothic16: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Dr Sugiyama": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Duru Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Dynalight: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "EB Garamond": {
    category: "serif",
    variants: "400,500,600,700,800,400i,500i,600i,700i,800i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Eagle Lake": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "East Sea Dokdo": {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  Eater: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Economica: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Eczar: {
    category: "serif",
    variants: "400,500,600,700,800",
    subsets: "devanagari,latin,latin-ext"
  },
  "El Messiri": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "arabic,cyrillic,latin,latin-ext"
  },
  Electrolize: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Elsie: {
    category: "display",
    variants: "400,900",
    subsets: "latin,latin-ext"
  },
  "Elsie Swash Caps": {
    category: "display",
    variants: "400,900",
    subsets: "latin,latin-ext"
  },
  "Emblema One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Emilys Candy": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Encode Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Encode Sans Condensed": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Encode Sans Expanded": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Encode Sans SC": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Encode Sans Semi Condensed": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Encode Sans Semi Expanded": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  Engagement: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Englebert: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Enriqueta: {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "latin,latin-ext"
  },
  Ephesis: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Epilogue: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Erica One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Esteban: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Estonia: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Euphoria Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Ewert: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Exo: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Exo 2": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Expletus Sans": {
    category: "display",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "latin,latin-ext"
  },
  Explora: {
    category: "handwriting",
    variants: "400",
    subsets: "cherokee,latin,latin-ext,vietnamese"
  },
  Fahkwang: {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Fanwood Text": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Farro: {
    category: "sans-serif",
    variants: "300,400,500,700",
    subsets: "latin,latin-ext"
  },
  Farsan: {
    category: "display",
    variants: "400",
    subsets: "gujarati,latin,latin-ext,vietnamese"
  },
  Fascinate: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Fascinate Inline": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Faster One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Fasthand: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Fauna One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Faustina: {
    category: "serif",
    variants: "300,400,500,600,700,800,300i,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Federant: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Federo: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Felipa: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Fenix: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Festive: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Finger Paint": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Fira Code": {
    category: "monospace",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  "Fira Mono": {
    category: "monospace",
    variants: "400,500,700",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  "Fira Sans": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Fira Sans Condensed": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Fira Sans Extra Condensed": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Fjalla One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Fjord One": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Flamenco: {
    category: "display",
    variants: "300,400",
    subsets: "latin"
  },
  Flavors: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Fleur De Leah": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Flow Block": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Flow Circular": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Flow Rounded": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Fondamento: {
    category: "handwriting",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Fontdiner Swanky": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Forum: {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "Francois One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Frank Ruhl Libre": {
    category: "serif",
    variants: "300,400,500,700,900",
    subsets: "hebrew,latin,latin-ext"
  },
  Fraunces: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Freckle Face": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Fredericka the Great": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Fredoka One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Freehand: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  Fresca: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Frijole: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Fruktur: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Fugaz One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Fuggles: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Fuzzy Bubbles": {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "GFS Didot": {
    category: "serif",
    variants: "400",
    subsets: "greek"
  },
  "GFS Neohellenic": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "greek"
  },
  Gabriela: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin"
  },
  Gaegu: {
    category: "handwriting",
    variants: "300,400,700",
    subsets: "korean,latin"
  },
  Gafata: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Galada: {
    category: "display",
    variants: "400",
    subsets: "bengali,latin"
  },
  Galdeano: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Galindo: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Gamja Flower": {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  Gayathri: {
    category: "sans-serif",
    variants: "100,400,700",
    subsets: "latin,malayalam"
  },
  Gelasio: {
    category: "serif",
    variants: "400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Gemunu Libre": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "latin,latin-ext,sinhala"
  },
  Genos: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cherokee,latin,latin-ext,vietnamese"
  },
  "Gentium Basic": {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Gentium Book Basic": {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Geo: {
    category: "sans-serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Georama: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Geostar: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Geostar Fill": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Germania One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Gideon Roman": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Gidugu: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  "Gilda Display": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Girassol: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Give You Glory": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Glass Antiqua": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Glegoo: {
    category: "serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Gloria Hallelujah": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Glory: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Gluten: {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Goblin One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Gochi Hand": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Goldman: {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Gorditas: {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  "Gothic A1": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "korean,latin"
  },
  Gotu: {
    category: "sans-serif",
    variants: "400",
    subsets: "devanagari,latin,latin-ext,vietnamese"
  },
  "Goudy Bookletter 1911": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Gowun Batang": {
    category: "serif",
    variants: "400,700",
    subsets: "korean,latin,latin-ext,vietnamese"
  },
  "Gowun Dodum": {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin,latin-ext,vietnamese"
  },
  Graduate: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Grand Hotel": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Grandstander: {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Gravitas One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Great Vibes": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Grechen Fuemen": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Grenze: {
    category: "serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Grenze Gotisch": {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Grey Qo": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Griffy: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Gruppo: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Gudea: {
    category: "sans-serif",
    variants: "400,400i,700",
    subsets: "latin,latin-ext"
  },
  Gugi: {
    category: "display",
    variants: "400",
    subsets: "korean,latin"
  },
  Gupter: {
    category: "serif",
    variants: "400,500,700",
    subsets: "latin"
  },
  Gurajada: {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Gwendolyn: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Habibi: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Hachi Maru Pop": {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Hahmlet: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "korean,latin,latin-ext,vietnamese"
  },
  Halant: {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Hammersmith One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Hanalei: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Hanalei Fill": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Handlee: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Hanuman: {
    category: "serif",
    variants: "100,300,400,700,900",
    subsets: "khmer,latin"
  },
  "Happy Monkey": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Harmattan: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "arabic,latin,latin-ext"
  },
  "Headland One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Heebo: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "hebrew,latin"
  },
  "Henny Penny": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Hepta Slab": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Herr Von Muellerhoff": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Hi Melody": {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  "Hina Mincho": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext,vietnamese"
  },
  Hind: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Hind Guntur": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,telugu"
  },
  "Hind Madurai": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,tamil"
  },
  "Hind Siliguri": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "bengali,latin,latin-ext"
  },
  "Hind Vadodara": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "gujarati,latin,latin-ext"
  },
  "Holtwood One SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Homemade Apple": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Homenaje: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Hurricane: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "IBM Plex Mono": {
    category: "monospace",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "IBM Plex Sans": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "IBM Plex Sans Arabic": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "arabic,cyrillic-ext,latin,latin-ext"
  },
  "IBM Plex Sans Condensed": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "IBM Plex Sans Devanagari": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "cyrillic-ext,devanagari,latin,latin-ext"
  },
  "IBM Plex Sans Hebrew": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "cyrillic-ext,hebrew,latin,latin-ext"
  },
  "IBM Plex Sans KR": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "korean,latin,latin-ext"
  },
  "IBM Plex Sans Thai": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "cyrillic-ext,latin,latin-ext,thai"
  },
  "IBM Plex Sans Thai Looped": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "cyrillic-ext,latin,latin-ext,thai"
  },
  "IBM Plex Serif": {
    category: "serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "IM Fell DW Pica": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "IM Fell DW Pica SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "IM Fell Double Pica": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "IM Fell Double Pica SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "IM Fell English": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "IM Fell English SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "IM Fell French Canon": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "IM Fell French Canon SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "IM Fell Great Primer": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "IM Fell Great Primer SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Ibarra Real Nova": {
    category: "serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "latin,latin-ext"
  },
  Iceberg: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Iceland: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Imbue: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Imperial Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Imprima: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Inconsolata: {
    category: "monospace",
    variants: "200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  Inder: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Indie Flower": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Inika: {
    category: "serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Inknut Antiqua": {
    category: "serif",
    variants: "300,400,500,600,700,800,900",
    subsets: "devanagari,latin,latin-ext"
  },
  "Inria Sans": {
    category: "sans-serif",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Inria Serif": {
    category: "serif",
    variants: "300,300i,400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Inspiration: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Inter: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Irish Grover": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Island Moments": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Istok Web": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Italiana: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Italianno: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Itim: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Jacques Francois": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Jacques Francois Shadow": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Jaldi: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "JetBrains Mono": {
    category: "monospace",
    variants: "100,200,300,400,500,600,700,800,100i,200i,300i,400i,500i,600i,700i,800i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Jim Nightshade": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Jockey One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Jolly Lodger": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Jomhuria: {
    category: "display",
    variants: "400",
    subsets: "arabic,latin,latin-ext"
  },
  Jomolhari: {
    category: "serif",
    variants: "400",
    subsets: "latin,tibetan"
  },
  "Josefin Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Josefin Slab": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i",
    subsets: "latin"
  },
  Jost: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Joti One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Jua: {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin"
  },
  Judson: {
    category: "serif",
    variants: "400,400i,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Julee: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Julius Sans One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Junge: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Jura: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,kayah-li,latin,latin-ext,vietnamese"
  },
  "Just Another Hand": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Just Me Again Down Here": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  K2D: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Kadwa: {
    category: "serif",
    variants: "400,700",
    subsets: "devanagari,latin"
  },
  "Kaisei Decol": {
    category: "serif",
    variants: "400,500,700",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Kaisei HarunoUmi": {
    category: "serif",
    variants: "400,500,700",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Kaisei Opti": {
    category: "serif",
    variants: "400,500,700",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Kaisei Tokumin": {
    category: "serif",
    variants: "400,500,700,800",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Kalam: {
    category: "handwriting",
    variants: "300,400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Kameron: {
    category: "serif",
    variants: "400,700",
    subsets: "latin"
  },
  Kanit: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Kantumruy: {
    category: "sans-serif",
    variants: "300,400,700",
    subsets: "khmer"
  },
  Karantina: {
    category: "display",
    variants: "300,400,700",
    subsets: "hebrew,latin,latin-ext"
  },
  Karla: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext"
  },
  Karma: {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Katibeh: {
    category: "display",
    variants: "400",
    subsets: "arabic,latin,latin-ext"
  },
  "Kaushan Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Kavivanar: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,tamil"
  },
  Kavoon: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Kdam Thmor": {
    category: "display",
    variants: "400",
    subsets: "khmer"
  },
  "Keania One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Kelly Slab": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Kenia: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Khand: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Khmer: {
    category: "display",
    variants: "400",
    subsets: "khmer"
  },
  Khula: {
    category: "sans-serif",
    variants: "300,400,600,700,800",
    subsets: "devanagari,latin,latin-ext"
  },
  Kings: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Kirang Haerang": {
    category: "display",
    variants: "400",
    subsets: "korean,latin"
  },
  "Kite One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Kiwi Maru": {
    category: "serif",
    variants: "300,400,500",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Klee One": {
    category: "handwriting",
    variants: "400,600",
    subsets: "cyrillic,greek-ext,japanese,latin,latin-ext"
  },
  Knewave: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  KoHo: {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Kodchasan: {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Koh Santepheap": {
    category: "display",
    variants: "100,300,400,700,900",
    subsets: "khmer,latin"
  },
  "Kolker Brush": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Kosugi: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Kosugi Maru": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Kotta One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Koulen: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  Kranky: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Kreon: {
    category: "serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext"
  },
  Kristi: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Krona One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Krub: {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Kufam: {
    category: "sans-serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  "Kulim Park": {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,600,600i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Kumar One": {
    category: "display",
    variants: "400",
    subsets: "gujarati,latin,latin-ext"
  },
  "Kumar One Outline": {
    category: "display",
    variants: "400",
    subsets: "gujarati,latin,latin-ext"
  },
  "Kumbh Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext"
  },
  Kurale: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,devanagari,latin,latin-ext"
  },
  "La Belle Aurore": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Lacquer: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Laila: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Lakki Reddy": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,telugu"
  },
  Lalezar: {
    category: "display",
    variants: "400",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  Lancelot: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Langar: {
    category: "display",
    variants: "400",
    subsets: "gurmukhi,latin,latin-ext"
  },
  Lateef: {
    category: "handwriting",
    variants: "400",
    subsets: "arabic,latin"
  },
  Lato: {
    category: "sans-serif",
    variants: "100,100i,300,300i,400,400i,700,700i,900,900i",
    subsets: "latin,latin-ext"
  },
  "League Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Leckerli One": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Ledger: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Lekton: {
    category: "sans-serif",
    variants: "400,400i,700",
    subsets: "latin,latin-ext"
  },
  Lemon: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Lemonada: {
    category: "display",
    variants: "300,400,500,600,700",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  Lexend: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Deca": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Exa": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Giga": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Mega": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Peta": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Tera": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Lexend Zetta": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Libre Barcode 128": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode 128 Text": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode 39": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode 39 Extended": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode 39 Extended Text": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode 39 Text": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Barcode EAN13 Text": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Libre Baskerville": {
    category: "serif",
    variants: "400,400i,700",
    subsets: "latin,latin-ext"
  },
  "Libre Caslon Display": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Libre Caslon Text": {
    category: "serif",
    variants: "400,400i,700",
    subsets: "latin,latin-ext"
  },
  "Libre Franklin": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Licorice: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Life Savers": {
    category: "display",
    variants: "400,700,800",
    subsets: "latin,latin-ext"
  },
  "Lilita One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Lily Script One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Limelight: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Linden Hill": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Literata: {
    category: "serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Liu Jian Mao Cao": {
    category: "handwriting",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  Livvic: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,900,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Lobster: {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Lobster Two": {
    category: "display",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "Londrina Outline": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Londrina Shadow": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Londrina Sketch": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Londrina Solid": {
    category: "display",
    variants: "100,300,400,900",
    subsets: "latin"
  },
  "Long Cang": {
    category: "handwriting",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  Lora: {
    category: "serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Love Light": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Love Ya Like A Sister": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Loved by the King": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Lovers Quarrel": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Luckiest Guy": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Lusitana: {
    category: "serif",
    variants: "400,700",
    subsets: "latin"
  },
  Lustria: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Luxurious Roman": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Luxurious Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "M PLUS 1": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "japanese,latin,latin-ext,vietnamese"
  },
  "M PLUS 1 Code": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "japanese,latin,latin-ext,vietnamese"
  },
  "M PLUS 1p": {
    category: "sans-serif",
    variants: "100,300,400,500,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese"
  },
  "M PLUS 2": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "japanese,latin,latin-ext,vietnamese"
  },
  "M PLUS Code Latin": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "M PLUS Rounded 1c": {
    category: "sans-serif",
    variants: "100,300,400,500,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,japanese,latin,latin-ext,vietnamese"
  },
  "Ma Shan Zheng": {
    category: "handwriting",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  Macondo: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Macondo Swash Caps": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Mada: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,900",
    subsets: "arabic,latin"
  },
  Magra: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Maiden Orange": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Maitree: {
    category: "serif",
    variants: "200,300,400,500,600,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Major Mono Display": {
    category: "monospace",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Mako: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Mali: {
    category: "handwriting",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Mallanna: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Mandali: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Manjari: {
    category: "sans-serif",
    variants: "100,400,700",
    subsets: "latin,latin-ext,malayalam"
  },
  Manrope: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  Mansalva: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Manuale: {
    category: "serif",
    variants: "300,400,500,600,700,800,300i,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Marcellus: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Marcellus SC": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Marck Script": {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Margarine: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Markazi Text": {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  "Marko One": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Marmelad: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Martel: {
    category: "serif",
    variants: "200,300,400,600,700,800,900",
    subsets: "devanagari,latin,latin-ext"
  },
  "Martel Sans": {
    category: "sans-serif",
    variants: "200,300,400,600,700,800,900",
    subsets: "devanagari,latin,latin-ext"
  },
  Marvel: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  Mate: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  "Mate SC": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Maven Pro": {
    category: "sans-serif",
    variants: "400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  McLaren: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mea Culpa": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Meddon: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  MedievalSharp: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Medula One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Meera Inimai": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,tamil"
  },
  Megrim: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Meie Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Meow Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Merienda: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Merienda One": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Merriweather: {
    category: "serif",
    variants: "300,300i,400,400i,700,700i,900,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Merriweather Sans": {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,300i,400i,500i,600i,700i,800i",
    subsets: "cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Metal: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Metal Mania": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Metamorphous: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Metrophobic: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Michroma: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Milonga: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Miltonian: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Miltonian Tattoo": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Mina: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "bengali,latin,latin-ext"
  },
  Miniver: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Miriam Libre": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "hebrew,latin,latin-ext"
  },
  Mirza: {
    category: "display",
    variants: "400,500,600,700",
    subsets: "arabic,latin,latin-ext"
  },
  "Miss Fajardose": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Mitr: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Mochiy Pop One": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin"
  },
  "Mochiy Pop P One": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin"
  },
  Modak: {
    category: "display",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  "Modern Antiqua": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Mogra: {
    category: "display",
    variants: "400",
    subsets: "gujarati,latin,latin-ext"
  },
  Mohave: {
    category: "sans-serif",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext"
  },
  Molengo: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Molle: {
    category: "handwriting",
    variants: "400i",
    subsets: "latin,latin-ext"
  },
  Monda: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Monofett: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Monoton: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Monsieur La Doulaise": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Montaga: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Montagu Slab": {
    category: "serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  MonteCarlo: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Montez: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Montserrat: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Montserrat Alternates": {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Montserrat Subrayada": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin"
  },
  "Moo Lah Lah": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Moon Dance": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Moul: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  Moulpali: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Mountains of Christmas": {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  "Mouse Memoirs": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mr Bedfort": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mr Dafoe": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mr De Haviland": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mrs Saint Delafield": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Mrs Sheppards": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Mukta: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "devanagari,latin,latin-ext"
  },
  "Mukta Mahee": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "gurmukhi,latin,latin-ext"
  },
  "Mukta Malar": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "latin,latin-ext,tamil"
  },
  "Mukta Vaani": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "gujarati,latin,latin-ext"
  },
  Mulish: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Murecho: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,japanese,latin,latin-ext"
  },
  MuseoModerno: {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Mystery Quest": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  NTR: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  "Nanum Brush Script": {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  "Nanum Gothic": {
    category: "sans-serif",
    variants: "400,700,800",
    subsets: "korean,latin"
  },
  "Nanum Gothic Coding": {
    category: "monospace",
    variants: "400,700",
    subsets: "korean,latin"
  },
  "Nanum Myeongjo": {
    category: "serif",
    variants: "400,700,800",
    subsets: "korean,latin"
  },
  "Nanum Pen Script": {
    category: "handwriting",
    variants: "400",
    subsets: "korean,latin"
  },
  Neonderthaw: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Nerko One": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Neucha: {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,latin"
  },
  Neuton: {
    category: "serif",
    variants: "200,300,400,400i,700,800",
    subsets: "latin,latin-ext"
  },
  "New Rocker": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "New Tegomin": {
    category: "serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "News Cycle": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  Newsreader: {
    category: "serif",
    variants: "200,300,400,500,600,700,800,200i,300i,400i,500i,600i,700i,800i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Niconne: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Niramit: {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Nixie One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Nobile: {
    category: "sans-serif",
    variants: "400,400i,500,500i,700,700i",
    subsets: "latin,latin-ext"
  },
  Nokora: {
    category: "sans-serif",
    variants: "100,300,400,700,900",
    subsets: "khmer,latin"
  },
  Norican: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Nosifer: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Notable: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Nothing You Could Do": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Noticia Text": {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Noto Kufi Arabic": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "arabic"
  },
  "Noto Music": {
    category: "sans-serif",
    variants: "400",
    subsets: "music"
  },
  "Noto Naskh Arabic": {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "arabic"
  },
  "Noto Nastaliq Urdu": {
    category: "serif",
    variants: "400,700",
    subsets: "arabic"
  },
  "Noto Rashi Hebrew": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "hebrew"
  },
  "Noto Sans": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,devanagari,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Noto Sans Adlam": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "adlam"
  },
  "Noto Sans Adlam Unjoined": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "adlam"
  },
  "Noto Sans Anatolian Hieroglyphs": {
    category: "sans-serif",
    variants: "400",
    subsets: "anatolian-hieroglyphs"
  },
  "Noto Sans Arabic": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "arabic"
  },
  "Noto Sans Armenian": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "armenian"
  },
  "Noto Sans Avestan": {
    category: "sans-serif",
    variants: "400",
    subsets: "avestan"
  },
  "Noto Sans Balinese": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "balinese"
  },
  "Noto Sans Bamum": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "bamum"
  },
  "Noto Sans Bassa Vah": {
    category: "sans-serif",
    variants: "400",
    subsets: "bassa-vah"
  },
  "Noto Sans Batak": {
    category: "sans-serif",
    variants: "400",
    subsets: "batak"
  },
  "Noto Sans Bengali": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "bengali"
  },
  "Noto Sans Bhaiksuki": {
    category: "sans-serif",
    variants: "400",
    subsets: "bhaiksuki"
  },
  "Noto Sans Brahmi": {
    category: "sans-serif",
    variants: "400",
    subsets: "brahmi"
  },
  "Noto Sans Buginese": {
    category: "sans-serif",
    variants: "400",
    subsets: "buginese"
  },
  "Noto Sans Buhid": {
    category: "sans-serif",
    variants: "400",
    subsets: "buhid"
  },
  "Noto Sans Canadian Aboriginal": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "canadian-aboriginal"
  },
  "Noto Sans Carian": {
    category: "sans-serif",
    variants: "400",
    subsets: "carian"
  },
  "Noto Sans Caucasian Albanian": {
    category: "sans-serif",
    variants: "400",
    subsets: "caucasian-albanian"
  },
  "Noto Sans Chakma": {
    category: "sans-serif",
    variants: "400",
    subsets: "chakma"
  },
  "Noto Sans Cham": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cham"
  },
  "Noto Sans Cherokee": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cherokee"
  },
  "Noto Sans Coptic": {
    category: "sans-serif",
    variants: "400",
    subsets: "coptic"
  },
  "Noto Sans Cuneiform": {
    category: "sans-serif",
    variants: "400",
    subsets: "cuneiform"
  },
  "Noto Sans Cypriot": {
    category: "sans-serif",
    variants: "400",
    subsets: "cypriot"
  },
  "Noto Sans Deseret": {
    category: "sans-serif",
    variants: "400",
    subsets: "deseret"
  },
  "Noto Sans Devanagari": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "devanagari"
  },
  "Noto Sans Display": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Noto Sans Duployan": {
    category: "sans-serif",
    variants: "400",
    subsets: "duployan"
  },
  "Noto Sans Egyptian Hieroglyphs": {
    category: "sans-serif",
    variants: "400",
    subsets: "egyptian-hieroglyphs"
  },
  "Noto Sans Elbasan": {
    category: "sans-serif",
    variants: "400",
    subsets: "elbasan"
  },
  "Noto Sans Elymaic": {
    category: "sans-serif",
    variants: "400",
    subsets: "elymaic"
  },
  "Noto Sans Georgian": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "georgian"
  },
  "Noto Sans Glagolitic": {
    category: "sans-serif",
    variants: "400",
    subsets: "glagolitic"
  },
  "Noto Sans Gothic": {
    category: "sans-serif",
    variants: "400",
    subsets: "gothic"
  },
  "Noto Sans Grantha": {
    category: "sans-serif",
    variants: "400",
    subsets: "grantha"
  },
  "Noto Sans Gujarati": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "gujarati"
  },
  "Noto Sans Gunjala Gondi": {
    category: "sans-serif",
    variants: "400",
    subsets: "gunjala-gondi"
  },
  "Noto Sans Gurmukhi": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "gurmukhi"
  },
  "Noto Sans HK": {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "chinese-hongkong,latin"
  },
  "Noto Sans Hanifi Rohingya": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "hanifi-rohingya"
  },
  "Noto Sans Hanunoo": {
    category: "sans-serif",
    variants: "400",
    subsets: "hanunoo"
  },
  "Noto Sans Hatran": {
    category: "sans-serif",
    variants: "400",
    subsets: "hatran"
  },
  "Noto Sans Hebrew": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "hebrew"
  },
  "Noto Sans Imperial Aramaic": {
    category: "sans-serif",
    variants: "400",
    subsets: "imperial-aramaic"
  },
  "Noto Sans Indic Siyaq Numbers": {
    category: "sans-serif",
    variants: "400",
    subsets: "indic-siyaq-numbers"
  },
  "Noto Sans Inscriptional Pahlavi": {
    category: "sans-serif",
    variants: "400",
    subsets: "inscriptional-pahlavi"
  },
  "Noto Sans Inscriptional Parthian": {
    category: "sans-serif",
    variants: "400",
    subsets: "inscriptional-parthian"
  },
  "Noto Sans JP": {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "japanese,latin"
  },
  "Noto Sans Javanese": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "javanese"
  },
  "Noto Sans KR": {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "korean,latin"
  },
  "Noto Sans Kaithi": {
    category: "sans-serif",
    variants: "400",
    subsets: "kaithi"
  },
  "Noto Sans Kannada": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "kannada"
  },
  "Noto Sans Kayah Li": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "kayah-li"
  },
  "Noto Sans Kharoshthi": {
    category: "sans-serif",
    variants: "400",
    subsets: "kharoshthi"
  },
  "Noto Sans Khmer": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "khmer"
  },
  "Noto Sans Khojki": {
    category: "sans-serif",
    variants: "400",
    subsets: "khojki"
  },
  "Noto Sans Khudawadi": {
    category: "sans-serif",
    variants: "400",
    subsets: "khudawadi"
  },
  "Noto Sans Lao": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "lao"
  },
  "Noto Sans Lepcha": {
    category: "sans-serif",
    variants: "400",
    subsets: "lepcha"
  },
  "Noto Sans Limbu": {
    category: "sans-serif",
    variants: "400",
    subsets: "limbu"
  },
  "Noto Sans Linear A": {
    category: "sans-serif",
    variants: "400",
    subsets: "linear-a"
  },
  "Noto Sans Linear B": {
    category: "sans-serif",
    variants: "400",
    subsets: "linear-b"
  },
  "Noto Sans Lisu": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "lisu"
  },
  "Noto Sans Lycian": {
    category: "sans-serif",
    variants: "400",
    subsets: "lycian"
  },
  "Noto Sans Lydian": {
    category: "sans-serif",
    variants: "400",
    subsets: "lydian"
  },
  "Noto Sans Mahajani": {
    category: "sans-serif",
    variants: "400",
    subsets: "mahajani"
  },
  "Noto Sans Malayalam": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "malayalam"
  },
  "Noto Sans Mandaic": {
    category: "sans-serif",
    variants: "400",
    subsets: "mandaic"
  },
  "Noto Sans Manichaean": {
    category: "sans-serif",
    variants: "400",
    subsets: "manichaean"
  },
  "Noto Sans Marchen": {
    category: "sans-serif",
    variants: "400",
    subsets: "marchen"
  },
  "Noto Sans Masaram Gondi": {
    category: "sans-serif",
    variants: "400",
    subsets: "masaram-gondi"
  },
  "Noto Sans Math": {
    category: "sans-serif",
    variants: "400",
    subsets: "math"
  },
  "Noto Sans Mayan Numerals": {
    category: "sans-serif",
    variants: "400",
    subsets: "mayan-numerals"
  },
  "Noto Sans Medefaidrin": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "medefaidrin"
  },
  "Noto Sans Meetei Mayek": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "meetei-mayek"
  },
  "Noto Sans Meroitic": {
    category: "sans-serif",
    variants: "400",
    subsets: "meroitic"
  },
  "Noto Sans Miao": {
    category: "sans-serif",
    variants: "400",
    subsets: "miao"
  },
  "Noto Sans Modi": {
    category: "sans-serif",
    variants: "400",
    subsets: "modi"
  },
  "Noto Sans Mongolian": {
    category: "sans-serif",
    variants: "400",
    subsets: "mongolian"
  },
  "Noto Sans Mono": {
    category: "monospace",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Noto Sans Mro": {
    category: "sans-serif",
    variants: "400",
    subsets: "mro"
  },
  "Noto Sans Multani": {
    category: "sans-serif",
    variants: "400",
    subsets: "multani"
  },
  "Noto Sans Myanmar": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "myanmar"
  },
  "Noto Sans N Ko": {
    category: "sans-serif",
    variants: "400",
    subsets: "nko"
  },
  "Noto Sans Nabataean": {
    category: "sans-serif",
    variants: "400",
    subsets: "nabataean"
  },
  "Noto Sans New Tai Lue": {
    category: "sans-serif",
    variants: "400",
    subsets: "new-tai-lue"
  },
  "Noto Sans Newa": {
    category: "sans-serif",
    variants: "400",
    subsets: "newa"
  },
  "Noto Sans Nushu": {
    category: "sans-serif",
    variants: "400",
    subsets: "nushu"
  },
  "Noto Sans Ogham": {
    category: "sans-serif",
    variants: "400",
    subsets: "ogham"
  },
  "Noto Sans Ol Chiki": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "ol-chiki"
  },
  "Noto Sans Old Hungarian": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-hungarian"
  },
  "Noto Sans Old Italic": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-italic"
  },
  "Noto Sans Old North Arabian": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-north-arabian"
  },
  "Noto Sans Old Permic": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-permic"
  },
  "Noto Sans Old Persian": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-persian"
  },
  "Noto Sans Old Sogdian": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-sogdian"
  },
  "Noto Sans Old South Arabian": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-south-arabian"
  },
  "Noto Sans Old Turkic": {
    category: "sans-serif",
    variants: "400",
    subsets: "old-turkic"
  },
  "Noto Sans Oriya": {
    category: "sans-serif",
    variants: "100,400,700,900",
    subsets: "oriya"
  },
  "Noto Sans Osage": {
    category: "sans-serif",
    variants: "400",
    subsets: "osage"
  },
  "Noto Sans Osmanya": {
    category: "sans-serif",
    variants: "400",
    subsets: "osmanya"
  },
  "Noto Sans Pahawh Hmong": {
    category: "sans-serif",
    variants: "400",
    subsets: "pahawh-hmong"
  },
  "Noto Sans Palmyrene": {
    category: "sans-serif",
    variants: "400",
    subsets: "palmyrene"
  },
  "Noto Sans Pau Cin Hau": {
    category: "sans-serif",
    variants: "400",
    subsets: "pau-cin-hau"
  },
  "Noto Sans Phags Pa": {
    category: "sans-serif",
    variants: "400",
    subsets: "phags-pa"
  },
  "Noto Sans Phoenician": {
    category: "sans-serif",
    variants: "400",
    subsets: "phoenician"
  },
  "Noto Sans Psalter Pahlavi": {
    category: "sans-serif",
    variants: "400",
    subsets: "psalter-pahlavi"
  },
  "Noto Sans Rejang": {
    category: "sans-serif",
    variants: "400",
    subsets: "rejang"
  },
  "Noto Sans Runic": {
    category: "sans-serif",
    variants: "400",
    subsets: "runic"
  },
  "Noto Sans SC": {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "chinese-simplified,latin"
  },
  "Noto Sans Samaritan": {
    category: "sans-serif",
    variants: "400",
    subsets: "samaritan"
  },
  "Noto Sans Saurashtra": {
    category: "sans-serif",
    variants: "400",
    subsets: "saurashtra"
  },
  "Noto Sans Sharada": {
    category: "sans-serif",
    variants: "400",
    subsets: "sharada"
  },
  "Noto Sans Shavian": {
    category: "sans-serif",
    variants: "400",
    subsets: "shavian"
  },
  "Noto Sans Siddham": {
    category: "sans-serif",
    variants: "400",
    subsets: "siddham"
  },
  "Noto Sans Sinhala": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "sinhala"
  },
  "Noto Sans Sogdian": {
    category: "sans-serif",
    variants: "400",
    subsets: "sogdian"
  },
  "Noto Sans Sora Sompeng": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "sora-sompeng"
  },
  "Noto Sans Soyombo": {
    category: "sans-serif",
    variants: "400",
    subsets: "soyombo"
  },
  "Noto Sans Sundanese": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "sundanese"
  },
  "Noto Sans Syloti Nagri": {
    category: "sans-serif",
    variants: "400",
    subsets: "syloti-nagri"
  },
  "Noto Sans Symbols": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "symbols"
  },
  "Noto Sans Symbols 2": {
    category: "sans-serif",
    variants: "400",
    subsets: "symbols"
  },
  "Noto Sans Syriac": {
    category: "sans-serif",
    variants: "100,400,900",
    subsets: "syriac"
  },
  "Noto Sans TC": {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "chinese-traditional,latin"
  },
  "Noto Sans Tagalog": {
    category: "sans-serif",
    variants: "400",
    subsets: "tagalog"
  },
  "Noto Sans Tagbanwa": {
    category: "sans-serif",
    variants: "400",
    subsets: "tagbanwa"
  },
  "Noto Sans Tai Le": {
    category: "sans-serif",
    variants: "400",
    subsets: "tai-le"
  },
  "Noto Sans Tai Tham": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "tai-tham"
  },
  "Noto Sans Tai Viet": {
    category: "sans-serif",
    variants: "400",
    subsets: "tai-viet"
  },
  "Noto Sans Takri": {
    category: "sans-serif",
    variants: "400",
    subsets: "takri"
  },
  "Noto Sans Tamil": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "tamil"
  },
  "Noto Sans Tamil Supplement": {
    category: "sans-serif",
    variants: "400",
    subsets: "tamil-supplement"
  },
  "Noto Sans Telugu": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "telugu"
  },
  "Noto Sans Thaana": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "thaana"
  },
  "Noto Sans Thai": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "thai"
  },
  "Noto Sans Thai Looped": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "thai"
  },
  "Noto Sans Tifinagh": {
    category: "sans-serif",
    variants: "400",
    subsets: "tifinagh"
  },
  "Noto Sans Tirhuta": {
    category: "sans-serif",
    variants: "400",
    subsets: "tirhuta"
  },
  "Noto Sans Ugaritic": {
    category: "sans-serif",
    variants: "400",
    subsets: "ugaritic"
  },
  "Noto Sans Vai": {
    category: "sans-serif",
    variants: "400",
    subsets: "vai"
  },
  "Noto Sans Wancho": {
    category: "sans-serif",
    variants: "400",
    subsets: "wancho"
  },
  "Noto Sans Warang Citi": {
    category: "sans-serif",
    variants: "400",
    subsets: "warang-citi"
  },
  "Noto Sans Yi": {
    category: "sans-serif",
    variants: "400",
    subsets: "yi"
  },
  "Noto Sans Zanabazar Square": {
    category: "sans-serif",
    variants: "400",
    subsets: "zanabazar-square"
  },
  "Noto Serif": {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Noto Serif Ahom": {
    category: "serif",
    variants: "400",
    subsets: "ahom"
  },
  "Noto Serif Armenian": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "armenian"
  },
  "Noto Serif Balinese": {
    category: "serif",
    variants: "400",
    subsets: "balinese"
  },
  "Noto Serif Bengali": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "bengali"
  },
  "Noto Serif Devanagari": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "devanagari"
  },
  "Noto Serif Display": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Noto Serif Dogra": {
    category: "serif",
    variants: "400",
    subsets: "dogra"
  },
  "Noto Serif Ethiopic": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "ethiopic"
  },
  "Noto Serif Georgian": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "georgian"
  },
  "Noto Serif Grantha": {
    category: "serif",
    variants: "400",
    subsets: "grantha"
  },
  "Noto Serif Gujarati": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "gujarati"
  },
  "Noto Serif Gurmukhi": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "gurmukhi"
  },
  "Noto Serif Hebrew": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "hebrew"
  },
  "Noto Serif JP": {
    category: "serif",
    variants: "200,300,400,500,600,700,900",
    subsets: "japanese,latin"
  },
  "Noto Serif KR": {
    category: "serif",
    variants: "200,300,400,500,600,700,900",
    subsets: "korean,latin"
  },
  "Noto Serif Kannada": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "kannada"
  },
  "Noto Serif Khmer": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "khmer"
  },
  "Noto Serif Lao": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "lao"
  },
  "Noto Serif Malayalam": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "malayalam"
  },
  "Noto Serif Myanmar": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "myanmar"
  },
  "Noto Serif Nyiakeng Puachue Hmong": {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "nyiakeng-puachue-hmong"
  },
  "Noto Serif SC": {
    category: "serif",
    variants: "200,300,400,500,600,700,900",
    subsets: "chinese-simplified,latin"
  },
  "Noto Serif Sinhala": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "sinhala"
  },
  "Noto Serif TC": {
    category: "serif",
    variants: "200,300,400,500,600,700,900",
    subsets: "chinese-traditional,latin"
  },
  "Noto Serif Tamil": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "tamil"
  },
  "Noto Serif Tangut": {
    category: "serif",
    variants: "400",
    subsets: "tangut"
  },
  "Noto Serif Telugu": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "telugu"
  },
  "Noto Serif Thai": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "thai"
  },
  "Noto Serif Tibetan": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "tibetan"
  },
  "Noto Serif Yezidi": {
    category: "serif",
    variants: "400,500,600,700",
    subsets: "yezidi"
  },
  "Noto Traditional Nushu": {
    category: "sans-serif",
    variants: "400",
    subsets: "nushu"
  },
  "Nova Cut": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Flat": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Mono": {
    category: "monospace",
    variants: "400",
    subsets: "greek,latin"
  },
  "Nova Oval": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Round": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Script": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Slim": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Nova Square": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Numans: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Nunito: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Nunito Sans": {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Odibee Sans": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Odor Mean Chey": {
    category: "serif",
    variants: "400",
    subsets: "khmer,latin"
  },
  Offside: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Oi: {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,tamil,vietnamese"
  },
  "Old Standard TT": {
    category: "serif",
    variants: "400,400i,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Oldenburg: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Ole: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Oleo Script": {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Oleo Script Swash Caps": {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Oooh Baby": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Open Sans": {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,300i,400i,500i,600i,700i,800i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese"
  },
  "Open Sans Condensed": {
    category: "sans-serif",
    variants: "300,300i,700",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  Oranienbaum: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Orbitron: {
    category: "sans-serif",
    variants: "400,500,600,700,800,900",
    subsets: "latin"
  },
  Oregano: {
    category: "display",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Orelega One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Orienta: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Original Surfer": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Oswald: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Otomanopee One": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  Outfit: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin"
  },
  "Over the Rainbow": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Overlock: {
    category: "display",
    variants: "400,400i,700,700i,900,900i",
    subsets: "latin,latin-ext"
  },
  "Overlock SC": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Overpass: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Overpass Mono": {
    category: "monospace",
    variants: "300,400,500,600,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Ovo: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Oxanium: {
    category: "display",
    variants: "200,300,400,500,600,700,800",
    subsets: "latin,latin-ext"
  },
  Oxygen: {
    category: "sans-serif",
    variants: "300,400,700",
    subsets: "latin,latin-ext"
  },
  "Oxygen Mono": {
    category: "monospace",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "PT Mono": {
    category: "monospace",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "PT Sans": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "PT Sans Caption": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "PT Sans Narrow": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "PT Serif": {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "PT Serif Caption": {
    category: "serif",
    variants: "400,400i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  Pacifico: {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Padauk: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin,myanmar"
  },
  Palanquin: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Palanquin Dark": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  "Palette Mosaic": {
    category: "display",
    variants: "400",
    subsets: "japanese,latin"
  },
  Pangolin: {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Paprika: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Parisienne: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Passero One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Passion One": {
    category: "display",
    variants: "400,700,900",
    subsets: "latin,latin-ext"
  },
  "Passions Conflict": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Pathway Gothic One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Patrick Hand": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Patrick Hand SC": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Pattaya: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext,thai,vietnamese"
  },
  "Patua One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Pavanam: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,tamil"
  },
  "Paytone One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Peddana: {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Peralta: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Permanent Marker": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Petemoss: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Petit Formal Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Petrona: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Philosopher: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,vietnamese"
  },
  Piazzolla: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  Piedra: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Pinyon Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Pirata One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Plaster: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Play: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  Playball: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Playfair Display": {
    category: "serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Playfair Display SC": {
    category: "serif",
    variants: "400,400i,700,700i,900,900i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  Podkova: {
    category: "serif",
    variants: "400,500,600,700,800",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Poiret One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Poller One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Poly: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin"
  },
  Pompiere: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Pontano Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Poor Story": {
    category: "display",
    variants: "400",
    subsets: "korean,latin"
  },
  Poppins: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "devanagari,latin,latin-ext"
  },
  "Port Lligat Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Port Lligat Slab": {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Potta One": {
    category: "display",
    variants: "400",
    subsets: "japanese,latin,latin-ext,vietnamese"
  },
  "Pragati Narrow": {
    category: "sans-serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Praise: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Prata: {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,vietnamese"
  },
  Preahvihear: {
    category: "sans-serif",
    variants: "400",
    subsets: "khmer,latin"
  },
  "Press Start 2P": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext"
  },
  Pridi: {
    category: "serif",
    variants: "200,300,400,500,600,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Princess Sofia": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Prociono: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Prompt: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "Prosto One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Proza Libre": {
    category: "sans-serif",
    variants: "400,400i,500,500i,600,600i,700,700i,800,800i",
    subsets: "latin,latin-ext"
  },
  "Public Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  "Puppies Play": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Puritan: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  "Purple Purse": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Qahiri: {
    category: "sans-serif",
    variants: "400",
    subsets: "arabic,latin"
  },
  Quando: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Quantico: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  Quattrocento: {
    category: "serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Quattrocento Sans": {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Questrial: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Quicksand: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Quintessential: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Qwigley: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Qwitcher Grypen": {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Racing Sans One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Radley: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Rajdhani: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Rakkas: {
    category: "display",
    variants: "400",
    subsets: "arabic,latin,latin-ext"
  },
  Raleway: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Raleway Dots": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Ramabhadra: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Ramaraja: {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Rambla: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Rammetto One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Rampart One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Ranchers: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Rancho: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Ranga: {
    category: "display",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Rasa: {
    category: "serif",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "gujarati,latin,latin-ext,vietnamese"
  },
  Rationale: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Ravi Prakash": {
    category: "display",
    variants: "400",
    subsets: "latin,telugu"
  },
  "Readex Pro": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "arabic,latin,latin-ext,vietnamese"
  },
  Recursive: {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,900",
    subsets: "cyrillic-ext,latin,latin-ext,vietnamese"
  },
  "Red Hat Display": {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  "Red Hat Mono": {
    category: "monospace",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext"
  },
  "Red Hat Text": {
    category: "sans-serif",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext"
  },
  "Red Rose": {
    category: "display",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Redacted: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Redacted Script": {
    category: "display",
    variants: "300,400,700",
    subsets: "latin,latin-ext"
  },
  Redressed: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Reem Kufi": {
    category: "sans-serif",
    variants: "400,500,600,700",
    subsets: "arabic,latin"
  },
  "Reenie Beanie": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Reggae One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Revalia: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Rhodium Libre": {
    category: "serif",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  Ribeye: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Ribeye Marrow": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Righteous: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Risque: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Road Rage": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Roboto: {
    category: "sans-serif",
    variants: "100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Roboto Condensed": {
    category: "sans-serif",
    variants: "300,300i,400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Roboto Mono": {
    category: "monospace",
    variants: "100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Roboto Slab": {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  Rochester: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Rock 3D": {
    category: "display",
    variants: "400",
    subsets: "japanese,latin"
  },
  "Rock Salt": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "RocknRoll One": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Rokkitt: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  Romanesco: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Ropa Sans": {
    category: "sans-serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Rosario: {
    category: "sans-serif",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Rosarivo: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Rouge Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Rowdies: {
    category: "display",
    variants: "300,400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Rozha One": {
    category: "serif",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  Rubik: {
    category: "sans-serif",
    variants: "300,400,500,600,700,800,900,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,hebrew,latin,latin-ext"
  },
  "Rubik Beastly": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,hebrew,latin,latin-ext"
  },
  "Rubik Mono One": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Ruda: {
    category: "sans-serif",
    variants: "400,500,600,700,800,900",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  Rufina: {
    category: "serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Ruge Boogie": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Ruluko: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Rum Raisin": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Ruslan Display": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Russo One": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  Ruthie: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Rye: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "STIX Two Text": {
    category: "serif",
    variants: "400,500,600,700,400i,500i,600i,700i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  Sacramento: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Sahitya: {
    category: "serif",
    variants: "400,700",
    subsets: "devanagari,latin"
  },
  Sail: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Saira: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Saira Condensed": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Saira Extra Condensed": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Saira Semi Condensed": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Saira Stencil One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Salsa: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Sanchez: {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  Sancreek: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Sansita: {
    category: "sans-serif",
    variants: "400,400i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext"
  },
  "Sansita Swashed": {
    category: "display",
    variants: "300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  Sarabun: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Sarala: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Sarina: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Sarpanch: {
    category: "sans-serif",
    variants: "400,500,600,700,800,900",
    subsets: "devanagari,latin,latin-ext"
  },
  "Sassy Frass": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Satisfy: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Sawarabi Gothic": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext,vietnamese"
  },
  "Sawarabi Mincho": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  Scada: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext"
  },
  "Scheherazade New": {
    category: "serif",
    variants: "400,700",
    subsets: "arabic,latin,latin-ext"
  },
  Schoolbell: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Scope One": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Seaweed Script": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Secular One": {
    category: "sans-serif",
    variants: "400",
    subsets: "hebrew,latin,latin-ext"
  },
  "Sedgwick Ave": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Sedgwick Ave Display": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Sen: {
    category: "sans-serif",
    variants: "400,700,800",
    subsets: "latin,latin-ext"
  },
  Sevillana: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Seymour One": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Shadows Into Light": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Shadows Into Light Two": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Shalimar: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Shanti: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Share: {
    category: "display",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Share Tech": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Share Tech Mono": {
    category: "monospace",
    variants: "400",
    subsets: "latin"
  },
  "Shippori Antique": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "Shippori Antique B1": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "Shippori Mincho": {
    category: "serif",
    variants: "400,500,600,700,800",
    subsets: "japanese,latin,latin-ext"
  },
  "Shippori Mincho B1": {
    category: "serif",
    variants: "400,500,600,700,800",
    subsets: "japanese,latin,latin-ext"
  },
  Shizuru: {
    category: "display",
    variants: "400",
    subsets: "japanese,latin"
  },
  Shojumaru: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Short Stack": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Shrikhand: {
    category: "display",
    variants: "400",
    subsets: "gujarati,latin,latin-ext"
  },
  Siemreap: {
    category: "display",
    variants: "400",
    subsets: "khmer"
  },
  "Sigmar One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Signika: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Signika Negative": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Simonetta: {
    category: "display",
    variants: "400,400i,900,900i",
    subsets: "latin,latin-ext"
  },
  "Single Day": {
    category: "display",
    variants: "400",
    subsets: "korean"
  },
  Sintony: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Sirin Stencil": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Six Caps": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  Skranji: {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  },
  "Slabo 13px": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Slabo 27px": {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Slackey: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Smokum: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Smooch: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Smythe: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Sniglet: {
    category: "display",
    variants: "400,800",
    subsets: "latin,latin-ext"
  },
  Snippet: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Snowburst One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Sofadi One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Sofia: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Solway: {
    category: "serif",
    variants: "300,400,500,700,800",
    subsets: "latin"
  },
  "Song Myung": {
    category: "serif",
    variants: "400",
    subsets: "korean,latin"
  },
  "Sonsie One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Sora: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800",
    subsets: "latin,latin-ext"
  },
  "Sorts Mill Goudy": {
    category: "serif",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Source Code Pro": {
    category: "monospace",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Source Sans 3": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Source Sans Pro": {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,600,600i,700,700i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
  },
  "Source Serif 4": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Source Serif Pro": {
    category: "serif",
    variants: "200,200i,300,300i,400,400i,600,600i,700,700i,900,900i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Space Grotesk": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Space Mono": {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Spartan: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext"
  },
  "Special Elite": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Spectral: {
    category: "serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Spectral SC": {
    category: "serif",
    variants: "200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  "Spicy Rice": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Spinnaker: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Spirax: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Spline Sans": {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext"
  },
  "Squada One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Sree Krushnadevaraya": {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Sriracha: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Srisakdi: {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Staatliches: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Stalemate: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Stalinist One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Stardos Stencil": {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  Stick: {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Stick No Bills": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700,800",
    subsets: "latin,latin-ext,sinhala"
  },
  "Stint Ultra Condensed": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Stint Ultra Expanded": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Stoke: {
    category: "serif",
    variants: "300,400",
    subsets: "latin,latin-ext"
  },
  Strait: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Style Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Stylish: {
    category: "sans-serif",
    variants: "400",
    subsets: "korean,latin"
  },
  "Sue Ellen Francisco": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Suez One": {
    category: "serif",
    variants: "400",
    subsets: "hebrew,latin,latin-ext"
  },
  "Sulphur Point": {
    category: "sans-serif",
    variants: "300,400,700",
    subsets: "latin,latin-ext"
  },
  Sumana: {
    category: "serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Sunflower: {
    category: "sans-serif",
    variants: "300,500,700",
    subsets: "korean,latin"
  },
  Sunshiney: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Supermercado One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Sura: {
    category: "serif",
    variants: "400,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Suranna: {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Suravaram: {
    category: "serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Suwannaphum: {
    category: "serif",
    variants: "100,300,400,700,900",
    subsets: "khmer,latin"
  },
  "Swanky and Moo Moo": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Syncopate: {
    category: "sans-serif",
    variants: "400,700",
    subsets: "latin"
  },
  Syne: {
    category: "sans-serif",
    variants: "400,500,600,700,800",
    subsets: "latin,latin-ext"
  },
  "Syne Mono": {
    category: "monospace",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Syne Tactile": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Tajawal: {
    category: "sans-serif",
    variants: "200,300,400,500,700,800,900",
    subsets: "arabic,latin"
  },
  Tangerine: {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin"
  },
  Taprom: {
    category: "display",
    variants: "400",
    subsets: "khmer,latin"
  },
  Tauri: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Taviraj: {
    category: "serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Teko: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "devanagari,latin,latin-ext"
  },
  Telex: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Tenali Ramakrishna": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  "Tenor Sans": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Text Me One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Texturina: {
    category: "serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Thasadith: {
    category: "sans-serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  "The Girl Next Door": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "The Nautigal": {
    category: "handwriting",
    variants: "400,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  Tienne: {
    category: "serif",
    variants: "400,700,900",
    subsets: "latin"
  },
  Tillana: {
    category: "handwriting",
    variants: "400,500,600,700,800",
    subsets: "devanagari,latin,latin-ext"
  },
  Timmana: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,telugu"
  },
  Tinos: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese"
  },
  "Titan One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Titillium Web": {
    category: "sans-serif",
    variants: "200,200i,300,300i,400,400i,600,600i,700,700i,900",
    subsets: "latin,latin-ext"
  },
  Tomorrow: {
    category: "sans-serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext"
  },
  Tourney: {
    category: "display",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Trade Winds": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Train One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  Trirong: {
    category: "serif",
    variants: "100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    subsets: "latin,latin-ext,thai,vietnamese"
  },
  Trispace: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800",
    subsets: "latin,latin-ext,vietnamese"
  },
  Trocchi: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Trochut: {
    category: "display",
    variants: "400,400i,700",
    subsets: "latin"
  },
  Truculenta: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900",
    subsets: "latin,latin-ext,vietnamese"
  },
  Trykker: {
    category: "serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Tulpen One": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Turret Road": {
    category: "display",
    variants: "200,300,400,500,700,800",
    subsets: "latin,latin-ext"
  },
  "Twinkle Star": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Ubuntu: {
    category: "sans-serif",
    variants: "300,300i,400,400i,500,500i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  "Ubuntu Condensed": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  "Ubuntu Mono": {
    category: "monospace",
    variants: "400,400i,700,700i",
    subsets: "cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext"
  },
  Uchen: {
    category: "serif",
    variants: "400",
    subsets: "latin,tibetan"
  },
  Ultra: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  "Uncial Antiqua": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Underdog: {
    category: "display",
    variants: "400",
    subsets: "cyrillic,latin,latin-ext"
  },
  "Unica One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  UnifrakturCook: {
    category: "display",
    variants: "700",
    subsets: "latin"
  },
  UnifrakturMaguntia: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Unkempt: {
    category: "display",
    variants: "400,700",
    subsets: "latin"
  },
  Unlock: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  Unna: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin,latin-ext"
  },
  Urbanist: {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext"
  },
  VT323: {
    category: "monospace",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Vampiro One": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Varela: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Varela Round": {
    category: "sans-serif",
    variants: "400",
    subsets: "hebrew,latin,latin-ext,vietnamese"
  },
  Varta: {
    category: "sans-serif",
    variants: "300,400,500,600,700",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Vast Shadow": {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Vesper Libre": {
    category: "serif",
    variants: "400,500,700,900",
    subsets: "devanagari,latin,latin-ext"
  },
  "Viaoda Libre": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Vibes: {
    category: "display",
    variants: "400",
    subsets: "arabic,latin"
  },
  Vibur: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Vidaloka: {
    category: "serif",
    variants: "400",
    subsets: "latin"
  },
  Viga: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Voces: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Volkhov: {
    category: "serif",
    variants: "400,400i,700,700i",
    subsets: "latin"
  },
  Vollkorn: {
    category: "serif",
    variants: "400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
    subsets: "cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese"
  },
  "Vollkorn SC": {
    category: "serif",
    variants: "400,600,700,900",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Voltaire: {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Vujahday Script": {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Waiting for the Sunrise": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Wallpoet: {
    category: "display",
    variants: "400",
    subsets: "latin"
  },
  "Walter Turncoat": {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Warnes: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Waterfall: {
    category: "handwriting",
    variants: "400",
    subsets: "latin,latin-ext,vietnamese"
  },
  Wellfleet: {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Wendy One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  WindSong: {
    category: "handwriting",
    variants: "400,500",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Wire One": {
    category: "sans-serif",
    variants: "400",
    subsets: "latin"
  },
  "Work Sans": {
    category: "sans-serif",
    variants: "100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Xanh Mono": {
    category: "monospace",
    variants: "400,400i",
    subsets: "latin,latin-ext,vietnamese"
  },
  Yaldevi: {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "latin,latin-ext,sinhala"
  },
  "Yanone Kaffeesatz": {
    category: "sans-serif",
    variants: "200,300,400,500,600,700",
    subsets: "cyrillic,latin,latin-ext,vietnamese"
  },
  Yantramanav: {
    category: "sans-serif",
    variants: "100,300,400,500,700,900",
    subsets: "devanagari,latin,latin-ext"
  },
  "Yatra One": {
    category: "display",
    variants: "400",
    subsets: "devanagari,latin,latin-ext"
  },
  Yellowtail: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Yeon Sung": {
    category: "display",
    variants: "400",
    subsets: "korean,latin"
  },
  "Yeseva One": {
    category: "display",
    variants: "400",
    subsets: "cyrillic,cyrillic-ext,latin,latin-ext,vietnamese"
  },
  Yesteryear: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  Yomogi: {
    category: "handwriting",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext,vietnamese"
  },
  Yrsa: {
    category: "serif",
    variants: "300,400,500,600,700,300i,400i,500i,600i,700i",
    subsets: "latin,latin-ext,vietnamese"
  },
  "Yuji Boku": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Yuji Hentaigana Akari": {
    category: "handwriting",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "Yuji Hentaigana Akebono": {
    category: "handwriting",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "Yuji Mai": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Yuji Syuku": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Yusei Magic": {
    category: "sans-serif",
    variants: "400",
    subsets: "japanese,latin,latin-ext"
  },
  "ZCOOL KuaiLe": {
    category: "display",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  "ZCOOL QingKe HuangYou": {
    category: "display",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  "ZCOOL XiaoWei": {
    category: "serif",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  "Zen Antique": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,greek,japanese,latin,latin-ext"
  },
  "Zen Antique Soft": {
    category: "serif",
    variants: "400",
    subsets: "cyrillic,greek,japanese,latin,latin-ext"
  },
  "Zen Dots": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  "Zen Kaku Gothic Antique": {
    category: "sans-serif",
    variants: "300,400,500,700,900",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Zen Kaku Gothic New": {
    category: "sans-serif",
    variants: "300,400,500,700,900",
    subsets: "cyrillic,japanese,latin,latin-ext"
  },
  "Zen Kurenaido": {
    category: "sans-serif",
    variants: "400",
    subsets: "cyrillic,greek,japanese,latin,latin-ext"
  },
  "Zen Loop": {
    category: "display",
    variants: "400,400i",
    subsets: "latin,latin-ext"
  },
  "Zen Maru Gothic": {
    category: "sans-serif",
    variants: "300,400,500,700,900",
    subsets: "cyrillic,greek,japanese,latin,latin-ext"
  },
  "Zen Old Mincho": {
    category: "serif",
    variants: "400,700,900",
    subsets: "cyrillic,greek,japanese,latin,latin-ext"
  },
  "Zen Tokyo Zoo": {
    category: "display",
    variants: "400",
    subsets: "latin,latin-ext"
  },
  Zeyada: {
    category: "handwriting",
    variants: "400",
    subsets: "latin"
  },
  "Zhi Mang Xing": {
    category: "handwriting",
    variants: "400",
    subsets: "chinese-simplified,latin"
  },
  "Zilla Slab": {
    category: "serif",
    variants: "300,300i,400,400i,500,500i,600,600i,700,700i",
    subsets: "latin,latin-ext"
  },
  "Zilla Slab Highlight": {
    category: "display",
    variants: "400,700",
    subsets: "latin,latin-ext"
  }
};

// lib/translations.js
var translations = {
  en: {
    selectFont: "Select a font",
    search: "Search",
    allLangs: "All languages",
    favFonts: "Favorite fonts",
    localFonts: "Local fonts",
    googleFonts: "Google fonts",
    select: "Select",
    cancel: "Cancel",
    styles: "styles",
    sampleText: "The quick brown fox jumps over the lazy dog.",
    sampleTextEditable: "Sample text, editable"
  },
  nl: {
    selectFont: "Kies een lettertype",
    search: "Zoek",
    allLangs: "Alle talen",
    favFonts: "Favoriete lettertypen",
    localFonts: "Lokale lettertypen",
    googleFonts: "Google lettertypen",
    select: "Kies",
    cancel: "Annuleer",
    styles: "stijlen",
    sampleText: "Wazig tv-filmpje rond chique skybox.",
    sampleTextEditable: "Voorbeeldtekst, bewerkbaar"
  },
  de: {
    selectFont: "Schriftart w\xE4hlen",
    search: "Suchen",
    allLangs: "Alle Sprachen",
    favFonts: "Favorisierte Schriftarten",
    localFonts: "Lokale Schriftarten",
    googleFonts: "Google Schriftarten",
    select: "W\xE4hlen",
    cancel: "Abbrechen",
    styles: "stile",
    sampleText: "Vogel Quax zwickt Johnys Pferd Bim.",
    sampleTextEditable: "Beispieltext, editierbar"
  },
  es: {
    selectFont: "Seleccionar fuente",
    search: "Buscar",
    allLangs: "Todos los idiomas",
    favFonts: "Fuentes favoritas",
    localFonts: "Fuentes locales",
    googleFonts: "Fuentes de Google",
    select: "Seleccionar",
    cancel: "Cancelar",
    styles: "estilos",
    sampleText: "La cig\xFCe\xF1a tocaba cada vez mejor el saxof\xF3n y el b\xFAho ped\xEDa kiwi y queso",
    sampleTextEditable: "Texto de ejemplo, editable"
  },
  fr: {
    selectFont: "Selectionner une police",
    search: "Rechercher",
    allLangs: "Toutes les langues",
    favFonts: "Polices favorites",
    localFonts: "Polices locales",
    googleFonts: "Polices Google",
    select: "Selectionner",
    cancel: "Annuler",
    styles: "Styles",
    sampleText: "Le vif renard brun saute par-dessus le chien paresseux.",
    sampleTextEditable: 'Texte d"exemple, \xE9ditable'
  }
};
var translations_default = translations;

// lib/fontpicker.js
var initialized = false;
var loadedFonts = {};
var options = {
  language: "en",
  variants: true,
  recents: 3,
  parentElement: document.body,
  localFontsUrl: "/fonts/",
  localFontsType: "woff",
  localFonts: {},
  googleFonts: fonts,
  systemFonts: {
    Arial: {
      category: "sans-serif",
      variants: "400,400i,600,600i"
    },
    "Courier New": {
      category: "monospace",
      variants: "400,400i,600,600i"
    },
    Georgia: {
      category: "serif",
      variants: "400,400i,600,600i"
    },
    Tahoma: {
      category: "sans-serif",
      variants: "400,400i,600,600i"
    },
    "Times New Roman": {
      category: "serif",
      variants: "400,400i,600,600i"
    },
    "Trebuchet MS": {
      category: "sans-serif",
      variants: "400,400i,600,600i"
    },
    Verdana: {
      category: "sans-serif",
      variants: "400,400i,600,600i"
    }
  },
  default: {
    family: "Arial",
    weight: "400",
    style: "normal"
  }
};
var modal;
var openedPicker;
var selectedFont;
var data = JSON.parse(localStorage.getItem("font_picker_data")) ?? { fav: [], rec: [] };
var storeData = () => localStorage.setItem("font_picker_data", JSON.stringify(data));
var toFontString = (f) => {
  const variant = f.style === "italic" ? `${f.weight}i` : f.weight;
  return options.variants ? `${f.family}:${variant}` : f.family;
};
var fromFontString = (s) => {
  const parsed = { family: null, weight: "400", style: "normal" };
  if (typeof s === "string") {
    const [family, variant] = s.split(":");
    if (family)
      parsed.family = family;
    if (variant) {
      parsed.weight = variant.replace("i", "");
      parsed.style = variant.includes("i") ? "italic" : "normal";
    }
  } else {
    Object.assign(parsed, s);
  }
  return parsed;
};
var sortFonts = () => {
  document.querySelectorAll(".fp__top").forEach((e) => e.classList.remove("fp__top"));
  [...data.fav, ...data.rec].forEach((font) => {
    const element = document.querySelector(`#fp__fonts > [data-family="${font}"]`);
    if (element) {
      element.parentElement.prepend(element);
      element.classList.add("fp__top");
    }
  });
};
var onHeartClick = function(e) {
  const family = this.parentElement.dataset.family;
  const favourite = this.classList.toggle("fp__fav");
  if (favourite) {
    data.fav.push(family);
  } else {
    data.fav = data.fav.filter((f) => f !== family);
  }
  storeData();
  sortFonts();
  favourite && this.parentElement.scrollIntoView({ block: "center" });
};
var createHeart = () => {
  const button = document.createElement("span");
  button.className = "float-end fp__heart";
  button.setAttribute("role", "button");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg>`;
  button.addEventListener("click", onHeartClick);
  return button;
};
var updatePreview = () => {
  const preview = document.getElementById("fp__preview");
  preview.style.fontFamily = selectedFont.dataset.family;
  preview.style.fontWeight = selectedFont.dataset.weight;
  preview.style.fontStyle = selectedFont.dataset.style;
};
var onVariantClick = (e) => {
  const fpVariants = document.getElementById("fp__variants");
  if (e.target.innerText === "Italic") {
    const active = e.target.classList.toggle("btn-info");
    e.target.classList.toggle("btn-secondary", !active);
  } else {
    const current = fpVariants.querySelector(".btn-primary");
    current.classList.remove("btn-primary");
    current.classList.add("btn-secondary");
    e.target.classList.add("btn-primary");
    e.target.classList.remove("btn-secondary");
  }
  const variant = fpVariants.querySelector(".btn-primary").innerText;
  const isItalic = fpVariants.querySelector(".btn-info");
  selectedFont.dataset.weight = variant;
  selectedFont.dataset.style = isItalic ? "italic" : "normal";
  updatePreview();
};
var selectFont = (font) => {
  if (selectedFont) {
    if (selectedFont === font)
      return;
    selectedFont.classList.remove("fp__selected");
    const heart = selectedFont.querySelector(".fp__heart");
    if (!heart.classList.contains("fp__fav"))
      heart.remove();
  }
  font.classList.add("fp__selected");
  if (!font.querySelector(".fp__heart")) {
    font.appendChild(createHeart());
  }
  const fpVariants = document.getElementById("fp__variants");
  fpVariants.classList.toggle("d-none", !options.variants);
  fpVariants.innerHTML = "";
  const filtered = font.dataset.variants.split(",").filter((v) => !v.endsWith("i"));
  let variants = ["Italic", ...filtered];
  if (options.variants) {
    for (const variant of variants) {
      const badge = document.createElement("button");
      badge.className = "badge rounded-pill btn";
      badge.innerText = variant;
      if (font.dataset.weight === variant)
        badge.classList.add("btn-primary");
      else if (variant === "Italic" && font.dataset.style === "italic")
        badge.classList.add("btn-info");
      else
        badge.classList.add("btn-secondary");
      fpVariants.appendChild(badge);
      badge.addEventListener("click", onVariantClick);
    }
  }
  selectedFont = font;
  updatePreview();
};
var openPicker = (input) => {
  if (!modal)
    createModal();
  openedPicker = input;
  const { family, weight, style } = fromFontString(input.value);
  const item = document.querySelector(`#fp__fonts > [data-family="${family}"]`);
  if (item) {
    item.dataset.weight = weight;
    item.dataset.style = style;
    selectFont(item);
  }
  sortFonts();
  modal.show();
};
var setPicker = (input, _font, fire = false) => {
  const font = fromFontString(_font);
  loadFont(font.family);
  input.value = toFontString(font);
  input.style.fontFamily = font.family;
  input.style.fontWeight = font.weight;
  input.style.fontStyle = font.style;
  data.rec = data.rec.filter((f) => f !== font.family);
  while (data.rec.length >= options.recents)
    data.rec.shift();
  data.rec.push(font.family);
  storeData();
  fire && input.dispatchEvent(new Event("input"));
};
var onSearchInput = (e) => {
  const filter = e.target.value.toLowerCase().trim();
  const fonts2 = document.querySelectorAll("#fp__fonts > div");
  fonts2.forEach((font) => {
    const name = font.dataset.family.toLowerCase();
    font.classList.toggle("fp__hide-s", !name.includes(filter));
  });
};
var onBadgeClick = (e) => {
  const active = e.target.classList.toggle("btn-primary");
  e.target.classList.toggle("btn-secondary", !active);
  const category = e.target.innerText;
  const fonts2 = document.querySelectorAll("#fp__fonts > div");
  fonts2.forEach((font) => {
    if (font.dataset.category == category) {
      font.classList.toggle("fp__hide-c", !active);
    }
  });
};
var onLangChange = (e) => {
  const lang = e.target.value;
  const fonts2 = document.querySelectorAll("#fp__fonts > div");
  fonts2.forEach((font) => {
    const fontLang = font.dataset.subsets.split(",");
    const hide = !fontLang.includes(lang) && lang !== "all";
    font.classList.toggle("fp__hide-l", hide);
  });
};
var onFontClick = function(e) {
  selectFont(this);
};
var onFontDblClick = function(e) {
  setPicker(openedPicker, {
    family: this.dataset.family,
    weight: this.dataset.weight,
    style: this.dataset.style
  }, true);
  modal.hide();
};
var selectNext = (offset) => {
  const children = Array.from(selectedFont.parentElement.children);
  const siblings = children.filter((s) => {
    return !s.classList.contains("fp__hide-s") && !s.classList.contains("fp__hide-c") && !s.classList.contains("fp__hide-l");
  });
  const index = siblings.indexOf(selectedFont);
  const next = siblings[index + offset];
  if (next) {
    selectFont(next);
    next.scrollIntoView({ block: "center" });
  }
};
var selectNextStyle = (offset) => {
  const parent = document.getElementById("fp__variants");
  const children = Array.from(parent.children);
  const index = children.indexOf(parent.querySelector(".btn-primary"));
  const next = children[index + offset];
  if (next) {
    next.click();
  }
};
var onKeyPress = (e) => {
  if (!modal?._isShown) {
    if (e.target.classList.contains("fp__input") && (e.key === "Enter" || e.key === " ")) {
      openPicker(e.target);
      e.preventDefault();
    }
    return;
  }
  if (e.key === "Escape") {
    modal.hide();
    e.preventDefault();
    return;
  }
  const searchBox = document.getElementById("fp__search");
  const langBox = document.getElementById("fp__languages");
  const previewBox = document.getElementById("fp__preview");
  if (searchBox.matches(":focus") || langBox.matches(":focus") || previewBox.matches(":focus")) {
    if (e.key === "Enter") {
      searchBox.blur();
      langBox.blur();
      previewBox.blur();
      e.preventDefault();
    }
    return;
  }
  if (e.key === "Enter") {
    onFontDblClick.call(selectedFont);
    e.preventDefault();
  } else if (e.key === "ArrowUp") {
    selectNext(-1);
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    selectNext(1);
    e.preventDefault();
  } else if (e.key === "ArrowLeft" && options.variants) {
    selectNextStyle(-1);
    e.preventDefault();
  } else if (e.key === "ArrowRight" && options.variants) {
    selectNextStyle(1);
    e.preventDefault();
  } else if (e.ctrlKey && e.key === "i" && options.variants) {
    document.querySelector("#fp__variants > :nth-child(1)").click();
    e.preventDefault();
  } else if (e.ctrlKey && e.key === "f") {
    selectedFont.querySelector(".fp__heart").click();
    e.preventDefault();
  } else if (e.key === "/") {
    document.getElementById("fp__search").focus();
    e.preventDefault();
  } else if (/[a-z]/.test(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey) {
    const fonts2 = Array.from(document.querySelectorAll("#fp__fonts > div"));
    const filtered = fonts2.filter((f) => !f.classList.contains("fp__hide-s") && !f.classList.contains("fp__hide-c") && !f.classList.contains("fp__hide-l") && f.dataset.family.toLowerCase().startsWith(e.key));
    const first = filtered.find((f) => !f.classList.contains("fp__top")) || filtered[0];
    if (first) {
      selectFont(first);
      first.scrollIntoView({ block: "center" });
    }
  }
};
var createModal = () => {
  document.head.insertAdjacentHTML("beforeend", `<style>.fp__hide-s, .fp__hide-c, .fp__hide-l { display: none; } #fp__preview { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; } .fp__font-item { color: var(--bs-dark); } .fp__font-item:hover { background: var(--bs-gray-300); } .fp__font-item.fp__selected { color: var(--bs-light); background: var(--bs-primary); } .fp__heart>svg { fill: none; stroke: var(--bs-light); height: 1em; } .fp__heart:hover>svg { fill: var(--bs-light); } .fp__heart.fp__fav>svg { stroke: var(--bs-danger); fill: var(--bs-danger); } .fp__selected>.fp__heart.fp__fav>svg { stroke: var(--bs-light); fill: var(--bs-light); }</style>`);
  options.parentElement.insertAdjacentHTML("beforeend", `<div class="modal fade" id="fp__modal" tabindex="-1"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="fp__title"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="row g-2 py-2 px-3 border border-bottom"><div class="col-sm-6"><input class="form-control" id="fp__search"></div><div class="col-sm-6"> <select class="form-select" id="fp__languages"></select></div><div class="col-12 d-flex flex-wrap gap-2 justify-content-center" id="fp__categories"></div><div class="col-12 text-center fs-5" id="fp__preview" contenteditable spellcheck="false"></div></div><div class="modal-body pt-2" id="fp__fonts"></div><div class="py-2 px-3 border-top border-bottom d-flex flex-wrap gap-2 justify-content-center" id="fp__variants"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" id="fp__cancel"></button><button type="button" class="btn btn-primary" id="fp__pick"></button></div></div></div></div>`);
  const fpModal = document.getElementById("fp__modal");
  const fpLanguages = document.getElementById("fp__languages");
  const fpCategories = document.getElementById("fp__categories");
  const fpFonts = document.getElementById("fp__fonts");
  const fpPick = document.getElementById("fp__pick");
  const fpCancel = document.getElementById("fp__cancel");
  const fpSearch = document.getElementById("fp__search");
  document.getElementById("fp__title").innerText = translations_default[options.language].selectFont;
  document.getElementById("fp__preview").innerText = translations_default[options.language].sampleText;
  const languageOptions = [
    ["all", translations_default[options.language].allLangs],
    ...Object.entries(languages)
  ];
  for (const [value, text] of languageOptions) {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = text;
    fpLanguages.appendChild(option);
  }
  fpLanguages.addEventListener("change", onLangChange);
  for (const category of categories) {
    const badge = document.createElement("button");
    badge.className = "badge rounded-pill btn btn-primary";
    badge.innerText = category;
    fpCategories.appendChild(badge);
    badge.addEventListener("click", onBadgeClick);
  }
  fpSearch.placeholder = translations_default[options.language].search;
  fpSearch.addEventListener("input", onSearchInput);
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
  const fontList = {
    ...options.localFonts || {},
    ...options.googleFonts || {},
    ...options.systemFonts || {}
  };
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
    if (data.fav.includes(family)) {
      const heartButton = createHeart();
      heartButton.classList.add("fp__fav");
      fontItem.appendChild(heartButton);
    }
    observer.observe(fontItem);
    fontItem.addEventListener("click", onFontClick);
    fontItem.addEventListener("dblclick", onFontDblClick);
  }
  fpPick.innerText = translations_default[options.language].select;
  fpPick.addEventListener("click", () => {
    setPicker(openedPicker, {
      family: selectedFont.dataset.family,
      weight: selectedFont.dataset.weight,
      style: selectedFont.dataset.style
    }, true);
    modal.hide();
  });
  fpCancel.innerText = translations_default[options.language].cancel;
  fpCancel.addEventListener("click", () => {
    modal.hide();
  });
  fpModal.addEventListener("shown.bs.modal", () => {
    selectedFont?.scrollIntoView({ block: "center" });
  });
  modal = new bootstrap.Modal(fpModal);
};
var loadFont = (_font) => {
  const font = fromFontString(_font);
  const name = font.family;
  if (loadedFonts.hasOwnProperty(name)) {
    return loadedFonts[name];
  }
  let promise;
  const localFont = options.localFonts?.[name];
  const googleFont = options.googleFonts?.[name];
  const systemFont = options.systemFonts?.[name];
  if (localFont) {
    const fontUrl = `${options.localFontsUrl}${font}.${options.localFontsType}`;
    const fontFace = new FontFace(font.family, `url(${fontUrl})`);
    promise = document.fonts.add(fontFace)?.load(font) ?? Promise.reject();
  } else if (googleFont) {
    const family = `${encodeURIComponent(name)}:${googleFont.variants}&display=swap`;
    const url = "https://fonts.googleapis.com/css?family=" + family;
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
    const shorthand = `1em "${name}"`;
    promise = document.fonts.load(shorthand);
  } else if (systemFont) {
    const shorthand = `1em "${name}"`;
    promise = document.fonts.load(shorthand);
  } else {
    promise = Promise.reject("Font not found");
  }
  loadedFonts[name] = promise;
  return promise;
};
var initialize = (_options) => {
  if (initialized) {
    throw new TypeError("Font picker has already been initialized.");
  }
  Object.assign(options, _options);
  window.addEventListener("keydown", onKeyPress);
  initialized = true;
};
var create = () => {
  const input = document.createElement("input");
  return attach(input);
};
var attach = (input) => {
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
var FontPicker = {
  loadFont,
  initialize,
  create,
  attach,
  fromFontString,
  toFontString
};
var fontpicker_default = FontPicker;
export {
  fontpicker_default as default
};
