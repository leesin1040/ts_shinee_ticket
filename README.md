<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

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

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## api명세

| Catogory | Catogory     | Method | URL                      | Request Body                                                                                                                                                                                                                                                 | Response Headers | Response Body - 성공 | Response Body - 실패 | 비고     |
| -------- | ------------ | ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ------------------ | ------------------ | ------ |
| user     | 회원가입         | POST   | /user/signup             | {
"name":"테스트용",
"email":"test@test.com",
"password":"123123",
"phone":"010-0000-0000"
}                                                                                                                                                                     |                  |                    |                    | 완료     |
| user     | 로그인          | POST   | /user/login              | {
"email":"test@test.com",
"password":"123123"
}                                                                                                                                                                                                             |                  |                    |                    | 완료     |
| user     | 기업등록         | POST   | /user/business           | 비즈니스                                                                                                                                                                                                                                                         | jwt token        |                    |                    | 완료     |
| user     | 내 정보 조회      | GET    | /user/me                 |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 완료     |
| user     | 회원탈퇴         | DELETE | /user/withdraw           |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
|          |              |        |                          |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| show     | 콘서트 목록 조회    | GET    | /show                    | 비즈니스                                                                                                                                                                                                                                                         | jwt token        |                    |                    | 완료     |
| show     | 콘서트 등록       | POST   | /show                    | {
"showTitle": "2012 샤이니 월드",
"showContent": "더 줘",
"showDate": ["2012-07-21", "2012-07-22"],
"showRunningTime": 120,
"showPlace": "올림픽공원 체조경기장",
"artists": ["온유", "태민","키", "민호","종현"],
"showGenres": ["콘서트", "공연"],
"showImg": ["이미지1.jpg", "이미지2.jpg"]
} | jwt token        |                    |                    | 완료     |
| show     | 콘서트 이름으로 검색  | GET    | /show/search?keyword=검색어 |                                                                                                                                                                                                                                                              |                  |                    |                    | 완료     |
| show     | 콘서트 상세조회     | GET    | /show/:showId            |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 완료     |
| show     | 콘서트 수정       | PATCH  | /show/:showId            |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 완료     |
| show     | 콘서트 삭제       | DELETE | /show/:showId            |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 완료     |
| review   | 리뷰 조회        | GET    | /show/:showId            |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| review   | 리뷰 등록        | POST   | /review/:showId          |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| review   | 리뷰 수정        | PATCH  | /review/:reviewId        |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| review   | 리뷰 삭제        | DELETE | /review/:reviewId        |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
|          |              |        |                          |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| seat     | 좌석 등록(기업)    | POST   | /seat/:showId            | 공연별 좌석등록 - csv 파일로 업로드                                                                                                                                                                                                                                       | jwt token        |                    |                    | 완료     |
| seat     | 좌석 조회        | GET    | /seat/:showId            | 공연별 좌석조회                                                                                                                                                                                                                                                     | jwt token        |                    |                    | 완료     |
| seat     | 좌석 삭제(기업)    | DELETE | /seat/:showId            | 전체 삭제                                                                                                                                                                                                                                                        | jwt token        |                    |                    | 완료     |
|          |              |        |                          |                                                                                                                                                                                                                                                              |                  |                    |                    |        |
| book     | (나의)모든 예매 조회 | GET    | /book/list               |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 필수     |
| book     | 예매하기         | POST   | /book                    |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 필수-진행중 |
| book     | 예매조회(개인)     | GET    | /book/:bookId            |                                                                                                                                                                                                                                                              | jwt token        |                    |                    | 필수     |
| book     | 예매취소         | PATCH  | /book/:bookId            |                                                                                                                                                                                                                                                              | jwt token        |                    |                    |        |
