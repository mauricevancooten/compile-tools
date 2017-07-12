# Compiling Tools

Simple examples of compile tools using NPM scripts.

## Requirements

Nodejs

## ESLint

Helps to detect errors and potential problems in your JavaScript. Watches all JavaScript files for changes.

### Instructions

1. Install Node modules `npm install`
2. Lint JavaScript `npm run compile:js`

## Sass

Basic Sass configuration and setup, uses node-sass to compile Sass to CSS. Watches all Sass files for changes.

### Instructions

1. Install Node modules `npm install`
2. Watch for changes and compile SCSS to CSS `npm run compile:sass`

## Sass Singularity GS

Sass configuration and setup, includes importing of Sass libraries using Eyeglass; Breakpoint and SingularityGS. Watches all Sass files for changes.

### Instructions

1. Install Node modules `npm install`
2. Watch for changes and compile SCSS to CSS `npm run compile:sass`

## SVG Sprite / Sass SVG Sprite

Automated SVG spriting.

### Instructions

1. Install Node modules `npm install`
2. compile Sprite `npm run sprite`

## Browserify / ESLint Browserify / ESLint Browserify Minifyify

Browserify lets you require modules in the browser and bundles all your dependencies. Example with ESLint lints JavaScript before bundling and the example with Minifyify compresses JavaScript after bundling and maintains a sourcemap for easier debugging in the browser. Watches all JavaScript files for changes.

### Instructions

1. Install Node modules `npm install`
2. compile JavaScript `npm run compile:js`

## Critical

Critical extracts & inlines critical-path (above-the-fold) CSS from HTML.

### Instructions

1. Install Node modules `npm install`

2. compile JavaScript `npm run critical`

## Browser-sync

Browser-sync updates the browser automatically every time you save a change to your project files.

### Instructions

1. Install Node modules `npm install`

2. Sync browser `npm run browser-sync`

## Licence

Licensed under MIT Licence
