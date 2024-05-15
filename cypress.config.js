const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    testIsolation: false,
    video: true,
    setupNodeEvents(on, config) {
      allureCypress(on);
      
    },
  },
});
