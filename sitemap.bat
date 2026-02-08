echo off
setlocal enabledelayedexpansion
del sitemap.txt
for /r %%g in (*.html) do (
  set file=%%~dpng
  set file=!file:\=/!
  set file=!file:/index=!
  set file=!file:*neocity=!
  echo https://spuds.casa!file!>>sitemap.txt
)