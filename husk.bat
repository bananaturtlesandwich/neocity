for /r %%g in (*.html) do (
	echo ^<!DOCTYPE html^> >%%g
	echo ^<head^> >>%%g
	echo   ^<meta http-equiv=^"refresh^" content=^"0; url=https://spuds.casa/%%~ng^"^> >>%%g
	echo ^</head^> >>%%g
	echo ^</html^>" >>%%g
)
for /r %%g in (*.ico,*.png,*.jpg,*.jpeg,*.webp,*.gif,*.ase,*.css,*.js) do del %%g