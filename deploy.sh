#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
# cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

cp -rf docs/.vitepress/dist/* ./
git init
git add -A
git commit -m 'deploy'
git push
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:liushuiyuan001/liushuiyuan001.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -