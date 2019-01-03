# Online Exam UI

## Installation

```bash
# clone the repo
$ git clone git@git.kms-technology.com:PythonTrainingGroup/online-exam-ui.git

# go into app's directory
$ cd online-exam-ui

# install app's dependencies
$ npm install
```

### Basic usage

```bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

### Deployment

You can follow the commands above to run dev environment.

For production: _Comming Soon_

- Docker: You can build a docker image to use in docker repo.

      docker build -t pgoe/online-exam-ui .

### Test

```bash
$ npm test
```

### Test coverage

```bash
$ npm run coverage
```

## Project structure

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
online-exam-ui
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html temlpate
│
├── src/             #project root
│   ├── components/  #contains common components which is used by containers
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── routes.js    #routes config
│
└── package.json
```
