#1 /bin/sh

rm -fr dist/public/js
mkdir -p dist/public/js

if [ "$1" = "production" ] || [ "$1" = "prod" ] || [ "$1" = "both" ]
then
  cp src/public/index.prod.html dist/public/index.html
  cp node_modules/react/umd/react.production.min.js dist/public/js
  cp node_modules/react-dom/umd/react-dom.production.min.js dist/public/js
fi

if [ "$1" != "production" ] && [ "$1" != "prod" ]
then
  cp src/public/index.dev.html dist/public/index.html
  cp node_modules/react/umd/react.development.js dist/public/js
  cp node_modules/react-dom/umd/react-dom.development.js dist/public/js
fi
