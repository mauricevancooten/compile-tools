# Build Tools

Simple examples of build tools using NPM scripts.

## Requirements

Nodejs

## JSHint

Helps to detect errors and potential problems in your JavaScript. Watches all JavaScript files for changes.

### Instructions

1. Install Node modules `npm install`
2. Lint JavaScript `npm run build:js`

## Sass

Basic Sass configuration and setup, uses node-sass to compile Sass to CSS. Watches all Sass files for changes.

### Instructions

1. Install Node modules `npm install`
2. Watch for changes and compile SCSS to CSS `npm run build:sass`

## Sass Singularity GS

Sass configuration and setup, includes importing of Sass libraries using Eyeglass; Breakpoint and SingularityGS. Watches all Sass files for changes.

### Instructions

1. Install Node modules `npm install`
2. Watch for changes and compile SCSS to CSS `npm run build:sass`

## SVG Sprite / Sass SVG Sprite

Automated SVG spriting.

### Instructions

1. Install Node modules `npm install`
2. Build Sprite `npm run sprite`

## Browserify / JSHint Browserify / JSHint Browserify Minifyify

Browserify lets you require modules in the browser and bundles all your dependencies. Example with JSHint lints JavaScript before bundling and the example with Minifyify compresses JavaScript after bundling and maintains a sourcemap for easier debugging in the browser. Watches all JavaScript files for changes.

### Instructions

1. Install Node modules `npm install`
2. Build JavaScript `npm run build:js`

## Livereload

Livereload updates the browser automatically every time you save a change to your project files.

### Instructions

1. Install Node modules `npm install`
2. Build JavaScript `npm run livereload`

## License

MIT License