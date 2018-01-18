# Messing around with Typescript and Vue


## To do

- Populate the template dynamically (from blocks)

    - <v-view-renderer :block="template.rows[0][0]"></v-view-renderer> - Need a better/more expressive way to access these.
    - Need to finish up the rest of the view renderers
    - Need to start populating block data.
    
- Get a database up and running



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint the Typescript
npm run lint

# run the tests
npm test

# run the tests on changes
npm run test:watch

# run the test suite and generate a coverage report
npm run coverage

# run the tests on Teamcity
npm run ci:teamcity

# run the tests on Jenkins
npm run ci:jenkins

# build for production with minification
npm run build

# clean the production build
npm run clean
```
