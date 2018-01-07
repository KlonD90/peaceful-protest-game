#!/bin/bash

NODE_ENV=production npm run build
rm ../admin3/front-app/assets/protest/assets/*
echo 'removed previous assets'
cp dist/assets/* ../admin3/front-app/assets/protest/assets
echo 'copy new assets'
cp dist/bundle.js ../admin3/front-app/assets/js/
echo 'copy bundle'
cp dist/polyfill.js ../admin3/front-app/assets/js/
echo 'copy polyfill'
NODE_ENV=development npm run build