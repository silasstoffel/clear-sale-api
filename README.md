# Customer API
[![Package][Express-image]][Express-url]
[![Technology][node-image]][node-url]
[![Technology][typescript-image]][typescript-url]
[![Package][Swagger-image]][Swagger-url]
[![Technology][Docker-image]][Docker-url]
[![Technology][MongoDbimage]][MongoDburl]

[Express-url]: https://www.npmjs.com/package/Express
[Express-image]: https://img.shields.io/badge/Express-green?style=for-the-badge&logo=Express&logoColor=black

[node-url]: https://nodejs.org/
[node-image]: https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=Node.js&logoColor=black

[typescript-url]: https://www.typescriptlang.org
[typescript-image]: https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=TypeScript&logoColor=white

[Swagger-url]: https://swagger.io/
[Swagger-image]: https://img.shields.io/badge/Swagger-green?style=for-the-badge&logo=Swagger&logoColor=black

[Docker-url]: https://www.docker.com/
[Docker-image]: https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=Docker&logoColor=white

[MongoDburl]: https://www.postgresql.org/
[MongoDbimage]: https://img.shields.io/badge/Mongodb-green?style=for-the-badge&logo=Mongodb&logoColor=black


Backend technical challenge from Clear Sale.

# Requirements
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose)
 - [Node v18.17](https://nodejs.org/en/)
 - [MongoDB v6](https://www.mongodb.com/)

## About

This project has the propose to create a simple RestFULL API with the CRUD operations.

## Setup

**Install dependencies:**
```shell
# it's necessary (required)
npm i
```

**Helper para linux/macOs (já faz tudo o que precisa):**

```shell
# linux/macOs
$ sh ./scripts/shell.sh

# or
$ sh ./scripts/dev.sh #show real-time log (nodemon)
```
[http://localhost:8000/health-check](http://localhost:8000/health-check)


## Tests

Execute os comandos:

```shell
# accessing node container
$ sh ./scripts/shell.sh

# run test
npm run test

# test with coverage report
npm run test:coverage
```
## Techs

This project was created using the following principle and techniques:

- Clean Architecture
- SOLID
- RESTful
- Object Calisthenics
- Repositories
- Tests
- GitHub Actions (Build, Test and code analyses)
- Sonar Cloud
