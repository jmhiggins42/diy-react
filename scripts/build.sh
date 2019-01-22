#! /bin/sh

./scripts/prebuild.sh "$1"
npm run lint:src
tsc -b src