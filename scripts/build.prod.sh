#! /bin/sh

cp src/public/index.prod.html dist/public/index.html
cp node_modules/react/umd/react.production.min.js dist/public/js
cp node_modules/react-dom/umd/react-dom.production.min.js dist/public/js