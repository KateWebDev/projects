const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const groupCSS = require("gulp-group-css-media-queries");

const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const include = require("gulp-include");
const comments = require("gulp-strip-css-comments");
const babel = require("gulp-babel");

const avif = require("gulp-avif");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const sprite = require("gulp-svg-sprite");

const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const fs = require("fs");

var replace = require("gulp-replace-path");

function styles() {
  return src("app/scss/style.scss")
    .pipe(scss())
    .pipe(groupCSS())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
        grid: false,
      })
    )
    .pipe(dest("app/css"))
    .pipe(comments()) //Убирает комментарии
    .pipe(concat("style.min.css"))
    .pipe(
      scss({
        outputStyle: "compressed", //сжимает файл
      })
    )

    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", "app/js/script.js"])
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src(["app/images/src/**/*.*", "!app/images/src/**/*.svg"])
    .pipe(newer("app/images"))
    .pipe(avif({ quality: 70 }))

    .pipe(src("app/images/src/**/*.*"))
    .pipe(newer("app/images"))
    .pipe(webp())
    .pipe(src("app/images/src/**/*.*"))
    .pipe(newer("app/images"))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest("app/images"))
    .pipe(browserSync.stream());
}

function spritesvg() {
  return src("app/images/**/*.svg")
    .pipe(
      sprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest("app/images"));
}

function fonts() {
  return src("app/fonts/src/**/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"))
    .pipe(browserSync.stream());
}

function pages() {
  return src("app/pages/**/*.html")
    .pipe(
      include({
        includePaths: "app/components",
      })
    )
    .pipe(replace("../images", "images"))
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });

  //watch(['app/scss/style.scss'], styles);
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/script.js"], scripts);
  watch(["app/images/src"], images);
  watch(["app/components/**/*.*", "app/pages/**/*.*"], pages);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}

function cleanFolderDist(done) {
  if (fs.existsSync("dist")) {
    return src("dist").pipe(clean());
  }
  done();
}

function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/css/style.css",
      "app/js/script.min.js",
      "app/js/script.js",
      "app/images/**/*.*",
      "app/fonts/*.*",
      "app/**/*.html",
      "!app/components/*",
      "!app/pages/*",
      "!app/images/src/**/*.*",
      "!app/images/stack/*",
    ],
    {
      base: "app",
    }
  ).pipe(dest("dist"));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watcher = watcher;
exports.images = images;
exports.spritesvg = spritesvg;
exports.fonts = fonts;
exports.pages = pages;

exports.building = building;
exports.cleanFolderDist = cleanFolderDist;

exports.build = series(cleanFolderDist, building);
exports.default = parallel(styles, scripts, images, fonts, pages, watcher);
