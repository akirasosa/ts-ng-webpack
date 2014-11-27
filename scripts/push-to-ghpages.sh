#!/bin/sh

rm -rf dist
gulp build
cp -rf dist dist.bk
git checkout gh-pages
rm -rf dist
mv dist.bk dist
git add dist
hash=$(git rev-parse --short master)
git commit -m "release ${hash}"
git push
git checkout master
