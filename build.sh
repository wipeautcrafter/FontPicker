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
esbuild lib/fontpicker.js --bundle --minify --format=esm --outfile=dist/fontpicker.min.js

year=`date +'%Y'`
echo "/* Copyright $year EvoStack. All rights reserved. */" > dist/fontpicker2.min.js
cat dist/fontpicker.min.js >> dist/fontpicker2.min.js
mv dist/fontpicker2.min.js dist/fontpicker.min.js
