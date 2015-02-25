# spicee front-end templates

The dev code can be found in the `src` directory

The following technologies are used:

- [Browserify](http://browserify.org/) (CommonJS `require()`)
- [Stylus](http://learnboost.github.io/stylus/) (CSS preprocessor)
- [Jade](http://jade-lang.com/) (HTML preprocessor)

## Requirements to build the code

- [Node.js](http://nodejs.org)
- [Gulp](http://gulpjs.com/) (Streaming build system) installed globaly `npm install -g gulp`

## Installation of dev env

```
$ npm install
```

## Font icons

The font icons are used for most of the UX graphic. They are generated via [Icomoon App](http://icomoon.io/app/), which is an online tool to generate your own font-icon set, allowing to add SVG into fonts. 

### Adding icon to the font icons

- The current setting to load in Icomoon App is `./icomoon-selection.json` to get the current set loaded
- Add any icon on the proposed libraries or import a .svg file into the Icomoon App
- Download the new set
- In the previously downloaded directory, copy `./style.css` into spicee project in `./src/style/icons.styl`
- In the previously downloaded directory, copy all fonts from `./fonts/*` into spicee project in `./dist/css/fonts/`
- Run `$ gulp`
