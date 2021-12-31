#! /bin/sh

git add .
date=`date '+%Y-%m-%d'`
git commit -m "docs: ${date}"
git push origin master
