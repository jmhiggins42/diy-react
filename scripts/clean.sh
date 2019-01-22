#! /bin/sh

# Options: all, cache, dist, test

if [ "$1" = 'all' ]
then
  FILES_TO_CLEAN="dist .test"
  npm run cache
elif [ "$1" = 'cache' ]
then
  FILES_TO_CLEAN=".cache"
elif [ "$1" = "dist" ]
then
  FILES_TO_CLEAN="dist"
elif [ "$1" = "test" ]
then
  FILES_TO_CLEAN=".test"
  npm run cache
else
  exit 1
fi

for loc in "$FILES_TO_CLEAN"
do
  rm -fr $loc
done
