const request = require('supertest');


class SqlInjectionTest {
  constructor(app, urlRequests){
    this.app = app;
    this.urlRequests = urlRequests;
    this.injections = [
      "'; DROP TABLE users; --",
      "'; SELECT * FROM users WHERE 1 = 1; --",
      "'; DELETE FROM users WHERE 1 = 1; --",
      "'; ROLLBACK; --",
      "' OR 1=1 --",
      "' AND 1=0 --",
      "' UNION SELECT * FROM users; --",
      "' OR SUBSTRING(email, 1, 1) = 'a'; --",
      "' OR CONCAT(first_name, ' ', last_name) = 'John Smith'; --"
    ];
  }

  async test1(urlRequest, injection) {
    const response = await request(this.app).get(`${urlRequest}${injection}`);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  }

  async run() {
    this.urlRequests.forEach((url) => {
      this.injections.forEach(async (injection) => {
        await this.test1();
      });
    });
    
  }
}

module.exports = SqlInjectionTest;