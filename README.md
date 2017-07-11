# gulp-starter-kit

A selection of gulp tasks for working with GOV.UK assets.

This compiles various assets from GOV.UK, this includes the [front-end toolkit](https://github.com/alphagov/govuk_frontend_toolkit) and [elements](https://github.com/alphagov/govuk_elements).


## Scripts

The task folder has various tasks, this is not a complete list and will be expanded overtime.

**clean** - removes current public folder

**copy** - moves not compiled folders from assets i.e images/fonts

**js** - lints and moves JavaScript files

**serve** - a http server, which can be used outside of your app to serve assets

**Sass** - lint, auto-prefix and compile Sass to minified CSS.

**watch** - looks for changes on JavaScript and Sass etc to recompile

## Using

```
npm install
gulp local
```

This will run an express server on http with port 8090.


## Usage Notes

This is just an example of your build assets working with gov-uk assets and will be updated over time.