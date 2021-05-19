#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy app to /docs
cp dist/* ../docs -r

# deploy /docs to Github Pages
cd ..
git add docs/
git commit -m 'deploy'
git push

# back into /app
cd app