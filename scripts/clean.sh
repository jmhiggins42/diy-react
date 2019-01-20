#! /bin/bash

for dir in dist/app dist/client dist/public/js dist/public/bundle.js dist/public/bundle.js.map
do
  rm -fr $dir
done
