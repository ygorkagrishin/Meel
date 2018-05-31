'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const del = require('del');
const browserSync = require('browser-sync');

