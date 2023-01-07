const request = require('supertest');


class SqlInjectionTest {
  constructor(app, urlRequests = []){
    this.app = app;
    this.defaultUrlRequests = ["/users?name="];
    this.urlRequests = [...urlRequests,...this.defaultUrlRequests];
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
  async test1(urlRequest, injections) {
    const injection = "'; DROP TABLE users; --";
    const response = await request(app).get(`/users?name=${injection}`);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  }

  async run() {
    outerArray.forEach(() => {
      innerArray.forEach(async () => {
        await this.test1();
      });
    });
    
  }
}

module.exports = SqlInjectionTest;