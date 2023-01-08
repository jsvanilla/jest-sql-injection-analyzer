const request = require('supertest');
const arraySql = require('./arraySql');


class SqlInjectionTest {
  constructor(){
    this.injections = arraySql;
  }

  async test1(app, urlRequest, injection) {
    const response = await request(app).get(`${urlRequest}${injection}`);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  }

  async run(app, urlRequests) {
    urlRequests.forEach((url) => {
      this.injections.forEach(async (injection) => {
        await this.test1(app, url, injection);
      });
    });
    
  }
}

module.exports = SqlInjectionTest;