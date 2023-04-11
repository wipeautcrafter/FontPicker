#!/bin/bash

if ! command -v esbuild &> /dev/null
then
    echo "Error: ESBuild could not be found!"
    echo "Installation: npm install -g esbuild"
    exit 1
fi

if ! command -v jsdoc &> /dev/null
then
    echo "Error: JSDoc could not be found!"
    echo "Installation: npm install -g jsdoc"
    exit 1
fi

echo ""
echo "[1/2] Creating documentation:"
echo ""

rm -rf docs/*
jsdoc lib/fontpicker.js -d docs

echo ""
echo "[2/2] Building minified library:"
echo ""

rm -rf dist/*
copy="/* Copyright $(date +'%Y') EvoStack. All rights reserved. */"

esbuild lib/fontpicker.js --bundle --format=esm --outfile=dist/fontpicker.js
esbuild lib/fontpicker.js --bundle --minify --format=esm --outfile=dist/fontpicker.min.js
echo "$copy" | cat - dist/fontpicker.js > temp && mv temp dist/fontpicker.js
echo "$copy" | cat - dist/fontpicker.min.js > temp && mv temp dist/fontpicker.min.js
