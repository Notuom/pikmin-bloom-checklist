#!/bin/bash
set -e

next build
next export

git checkout gh-pages
git pull
cd out
cp -r * ../

git add -A
git commit -m "chore: deploy to gh-pages"
git push

cd ..
git checkout main