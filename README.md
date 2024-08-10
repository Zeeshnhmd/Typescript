## Compile TS file

```cmd
tsc index
```

_No need to add file name (index) if you have set "target": "es6" in tsconfig file_

## Watch mode

```cmd
tsc --watch
```

## Create a tsconfig.json file

```cmd
tsc --init
```

## Replace js extension to ts extension using this command in powershell

```powersheel
Get-ChildItem -Recurse -Filter *.js | Rename-Item -NewName { $_.Name -replace '\.js$','.ts' }
```
