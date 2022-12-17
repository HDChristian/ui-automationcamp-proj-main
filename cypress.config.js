const { defineConfig } = require("ui-automationcamp-proj-main");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Adding baseURL and Custom specPattern path to this project
    baseUrl: 'https://ui-automation-camp.vercel.app',
    specPattern: 'cypress-ui-autocamp-store/e2e/test/**/*.cy.{js,jsx,ts,tsx}',

    // Adding reporter for this project
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
    },
    // Adding this command for the security error returning in Chrome browser
    chromeWebSecurity: false, 
  },
  env: {
    environment: "QA",
  }
});
