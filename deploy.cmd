copy ./ims.js ./dist/ims.js
git add -A
git commit -m "deploy"
git push origin master
git subtree push --prefix dist origin gh-pages
