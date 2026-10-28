import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.lacoste.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36',
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    // cypress.config.ts, inside e2e:
  setupNodeEvents(on, config) {
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'chrome') {
       launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      }
     return launchOptions;
    });
   return config;
  },
  },
});
