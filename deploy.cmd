echo %cd%
pause
copy "%cd%\ims.js" "%cd%\dist/ims.js"
pause
git add -A
git commit -m "deploy"
git push origin master
git subtree push --prefix dist origin gh-pages
