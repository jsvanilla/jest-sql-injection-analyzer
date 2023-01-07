const TestSqlInjection = require("./sql_injection.test")
const TestCodeInjection = require("./code_injection.test")

class SupertestInjection {
  constructor(app, urlRequests = []){
    this.app = app;
    this.defaultUrlRequests = ["/users?name="];
    this.urlRequests = [...urlRequests,...this.defaultUrlRequests];
    this.testSqlInjection = () => new TestSqlInjection();
    this.testCodeInjection = () => new TestCodeInjection();
  }

  async SqlInjection() {
    await this.testSqlInjection.run(this.app, this.urlRequests);
  }

  async CodeInjection() {
    await this.testCodeInjection.run(this.app, this.urlRequests);
  }

  async searchVulnerabilities() {
    await this.testSqlInjection.run(this.app, this.urlRequests);
    await this.testCodeInjection.run(this.app, this.urlRequests);
  }
}
  
module.exports = SupertestInjection;