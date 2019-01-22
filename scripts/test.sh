#! /bin/sh

if [ ! -d ".test" ]
then
  npm run build:test
fi

if [ -d ".cache" ]
then
  npm run cache load
fi

jest