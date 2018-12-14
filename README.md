# HttpXmlToJsonConverter

Http service that performs XML to JSON conversion. 
It is written on Node JS and uses npm. 
All dependencies, configuration and scripts are in package.json. 

#### Run service

```
npm start 
```

#### Generate docs

```
npm run docsgen
```

#### Build and run docker

```
npm run docker:build
npm run docker:run 
```

#### Usage example 
```
curl -X GET http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/xml/simple.xml | tee example.xml
curl -X POST -H "Content-Type: text/xml" -d @example.xml  localhost:80 | tee example.json
```