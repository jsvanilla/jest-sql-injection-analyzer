const TestSqlInjection = require("./sql_injection.test")

class SqlAnalizer {
  constructor(app, urlRequests = []){
    this.app = app;
    this.defaultUrlRequests = ["/users?name="];
    this.urlRequests = [...urlRequests,...this.defaultUrlRequests];
    this.testSqlInjection = (app, urlRequests) => new TestSqlInjection();
  }

  SqlInjection() {
    
  }

  CodeInjection() {
    
  }

  searchVulnerabilities() {
    this.runTest1();
    this.runTest2();
  }
}
  
module.exports = SqlAnalizer;