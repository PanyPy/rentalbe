## Description <a href="https://xplace.herokuapp.com/graphql" target="_blank"><img src="https://xplace-badge.herokuapp.com/last.svg"/></a>
If you don't have the appetite to download the code feel free to use [https://rentalbe.herokuapp.com/graphql](https://rentalbe.herokuapp.com/) as BE server (this is just the server, it's not mean to look nice in your web browser).


Note:
- This server is just an example, DO NOT expect to include best practices (the architecture is pretty good tho).
- Tests may be missing.
- Config variables/files may be missing.
- Some code duplication may be found.
- Not all the types would be declared.
- Filters are just being applied in the front-end.
- I shouldn't had to deploy directly to master.
- Env config shouldn't be uploaded.
- I created as rentalbe/rentalfe instead of rental_be/rental_fe .
- And other... :)

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
```bash
$ npm install
```
Note: tested using node v16 -> `nvm use 16`

## Running the app
You will need to have MongoDB installed or set your `.env` file as `MONGO_DB="mongodb+srv://todo:todo@cluster0.iyu4d.mongodb.net/rental"`
(yes, I know this is not a good practice. I just want to save you some work, this is not a real world project anyway)


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
