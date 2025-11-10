import { defineConfig, devices } from '@playwright/test';
import './register-aliases';
import { config } from 'dotenv';
config();
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './',//'./tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'], // Hiển thị từng test (TCS1, Login article, ...)
    ['html', { open: 'always' }], // Tự động mở giao diện HTML sau khi chạy xong
  ],
  //  'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://192.168.1.9:40010',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: {
      mode: 'on',
      size: { width: 1000, height: 1000 }
    }
  },
  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'Mobile web',
    //   use: { ...devices['iPhone 15 Pro Max'] },
    // },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        // viewport: {
        //   width: 400,
        //   height: 400
        // }
        // locale: 'en-CB',
        // timezoneId: 'Europe/Paris',
        // permissions: ["camera"]
        //colorScheme: 'dark',
      },
      dependencies: ['Set up VPN']

    },
    {
      name: "Set up VPN",
      testMatch: /global-setup\.ts/,//tìm file này ở trong project 
      testDir: './global-settings',//Phạm vi, vị trí  muốn chỉ chạy test ở đâu 
      teardown: 'Clean up VPN'
    },
    {
      name: "Clean up VPN",
      testMatch: /global-teardown\.ts/,//tìm file này ở trong project 
      testDir: './global-settings'//Phạm vi, vị trí  muốn chỉ chạy test ở đâu 
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  metadata: {
    tsconfig: 'tsconfig.json',
  },
});
