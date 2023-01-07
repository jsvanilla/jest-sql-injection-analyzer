const TestSqlInjection = require("./sql_injection.test")
const TestCodeInjection = require("./code_injection.test")

class SupertestInjection {
  constructor(app, urlRequests = []){
    this.app = app;
    this.defaultUrlRequests = ["/users?name="];
    this.urlRequests = [...urlRequests,...this.defaultUrlRequests];
    this.testSqlInjection = (app, urlRequests) => new TestSqlInjection(app, urlRequests);
    this.testCodeInjection = (app, urlRequests) => new TestCodeInjection(app, urlRequests);
  }

  async SqlInjection() {
    await this.testSqlInjection(this.app, this.urlRequests);
  }

  async CodeInjection() {
    await this.testCodeInjection(this.app, this.urlRequests);
  }

  async searchVulnerabilities() {
    await this.testSqlInjection(this.app, this.urlRequests);
    await this.testCodeInjection(this.app, this.urlRequests);
  }
}
  
module.exports = SupertestInjection;