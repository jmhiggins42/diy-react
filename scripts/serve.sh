#! /bin/sh

npm run build

if [ "$NODE_ENV" = "production" ]
then
  npm run serve:prod
else
  npm run serve:dev
fi
