#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m "deploy $(date)"
git remote add origin git@github.com:Harmos274/Harmos274.github.io.git
git push -f origin master
cd -
