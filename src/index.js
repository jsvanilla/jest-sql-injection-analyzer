const testSqlInjection = require("./sql_injection.test")

const runTest = () => new testSqlInjection()

class SqlAnalizer {
  constructor(app, urlRequests){
    this.app = app;
    this.urlRequests = urlRequests;
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