for /r %%g in (*.html) do (
  echo ^<!DOCTYPE html^> >%%g
  echo ^<head^> >>%%g
  echo   ^<meta http-equiv=^"refresh^" content=^"0; url=https://spuds.casa/%%~ng^"^> >>%%g
  echo ^</head^> >>%%g
  echo ^</html^>" >>%%g
)
for /r %%g in (*.ico,*.png,*.jpg,*.jpeg,*.webp,*.gif,*.ase,*.css,*.js) do del "%%g"

mkdir src
for /d %%g in (*) do (
  move %%g %%~dpgsrc\%%~nxg
)
for %%g in (*) do (
  (echo "%%g" | find /i "husk.bat" 1>NUL) || (  
    move %%g %%~dpgsrc\%%~nxg
  )
)