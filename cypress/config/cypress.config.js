import { createLevelCiTasks } from '@level-ci/a11y-cypress/tasks';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    baseUrl: 'http://localhost:1342',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on('task', createLevelCiTasks(config));
    }
  }
});
