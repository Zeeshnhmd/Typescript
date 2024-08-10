## Compile TS file

`tsc index`

_No need to add file name (index) if you have set "target": "es6" in tsconfig file_

## Watch mode

`tsc --watch`

## Create a tsconfig.json file

`tsc --init`

## Replace js extension to ts extension using this command in powershell

`Get-ChildItem -Recurse -Filter *.js | Rename-Item -NewName { $_.Name -replace '\.js$','.ts' }`
