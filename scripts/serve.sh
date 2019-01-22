#! /bin/sh

if [ ! -d "dist" ]
then
  npm run build
fi

if [ "$1" = "production" ] || [ "$1" = "prod" ]
then
  ./scripts/prebuild.sh "$1"
  NODE_ENV=production npm run serve
else
  NODE_ENV=development npm run serve
fi
