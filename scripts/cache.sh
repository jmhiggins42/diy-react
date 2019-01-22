#! /bin/sh

if [ "$1" = "load" ]
then
  PREFIX=".test/"
  SUFFIX="/__snapshots__"
  LIST=$(find .cache -name *.snap)
  RE="^.cache\/(.*)\/.*\.snap"
elif [ "$1" = 'save' ] || [ "$1" = "" ]
then
  if [ ! -d ".test" ]
  then
    npm run test
  fi
  PREFIX=".cache/"
  LIST=$(find .test/client/ -name __snapshots__)
  RE="^.test\/(.*)\/__snapshots__$"
else
  exit 1
fi

for fromdir in "$LIST"
do
  if [[ $fromdir =~ $RE ]]
  then
    todir="$PREFIX${BASH_REMATCH[1]}$SUFFIX"
    mkdir -p $todir
    if [ "$1" == 'load' ]
    then
      cp $fromdir $todir
    else
      cp -r $fromdir/. $todir
    fi
  else
    echo "FAIL: $fromdir"
  fi
done

if [ "$1" = "load" ]
then
  npm run clean cache
fi
