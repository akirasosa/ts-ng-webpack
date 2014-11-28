#!/bin/sh

rm -rf out || exit 0;
mkdir out;
gulp build

(
cd out
git init
git config user.name "Travis-CI"
git config user.email "travis@example.com"
cp ../CNAME .
cp ../index.html .
cp -rf ../dist .
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
)
