#! /bin/bash

for loc in dist server.js webpack.dev.config.js webpack.prod.config.js
do
  rm -fr $loc
done
