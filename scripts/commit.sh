#! /bin/sh

git add .
date=`date '+%Y-%m-%d %H:%M:%S'`
git commit -m "update ${date}"
git push origin master
