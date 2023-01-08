const request = require('supertest');

class CodeInjectionTest {
  constructor(){
    this.injections = []
    // `${console.log('code injected!!')}`
    //  { "$gt": "" }
    //  ' || 'a'=='a
    //  ' || (function(){ var date=new Date(); do{curDate = new Date();}while(curDate-date<10000);})() || '
    //  " || (function(){ var date=new Date(); do{curDate = new Date();}while(curDate-date<10000);})() || "
  }
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