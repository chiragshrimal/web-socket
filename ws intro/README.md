### install dependency 

```
npm init -y 
npx install typescript 
npm tsc --init 

```
### set the path in the tsconfig.json file 

```
rootDir: ./src
outDir: ./dist

```
### make the src folder in the root directory 

```

src/index.ts

```

### set the script 

```
"dev":"tsc -b  && node ./dist/index.js"

```

### for running the code 

```
npm run dev 

```

###  install dependency for ws 

```

npm install ws @types/ws

```

