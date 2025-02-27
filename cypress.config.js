
/*
const { defineConfig } = require("cypress");


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',// for html reports
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports
   
    },
  },
  
});

*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome, mocha-junit-reporter",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/test-results.xml"
    }
  },
  env: {
    cucumberJsonReport: "cypress/reports/cucumber/cucumber-report.json"
  }
});



