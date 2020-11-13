# Instructions

# download project

# prerequisites -

- download and install nodejs , mongodb

# configuration

- make sure `inside src/config/index.js` - passed your `ADMIN_CRED` this `email` and `password` be your admin credential to login api so token produced by this apis your to create agent

- configure your email to send to other src/config/index.js inside MAIL_CONFIG/HOST_CONFIG/AUTH

# install dependencies and dev-dependencies.

## windows

- npm i
- npm i -D

## Ubuntu

- npm i && npm i --save -dev
- add package.json scrip-> start ="start": "DEBUG=app:\* nodemon --exec babel-node src/index.js" instead of default one

# start project

- npm start

# documentation url - swagger

this is where you can test apis-

- http://localhost:8000/api/v1/swagger-docs/

- note - please go with flow of apis otherwise you'll not get access to apis
