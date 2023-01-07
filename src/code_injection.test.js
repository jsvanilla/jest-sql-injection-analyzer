const request = require('supertest');

class CodeInjectionTest {
  async testCodeInjection() {
    const injection = "'; console.log('code injected!!'); --";
    const response = await request(app).get(`/users?name=${injection}`)

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  }

  async run() {
    await this.testCodeInjection()
  }
}