#! /bin/sh

mkdir -p dist/public/js

if [ "$NODE_ENV" = "production" ]
then
  ./scripts/build.prod.sh
else
  ./scripts/build.dev.sh
fi
