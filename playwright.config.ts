import { defineConfig, devices } from '@playwright/test';
import './register-aliases';
import { config } from 'dotenv';
config();

export default defineConfig({
  testDir: './',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'always' }],
  ],

  use: {
    trace: 'on',
    video: {
      mode: 'on',
      size: { width: 1000, height: 1000 },
    },
  },

  projects: [
    // 🔵 UI TEST (Firefox)
    {
      name: 'ui-firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      dependencies: ['Set up VPN'],
    },

    // 🟢 API TEST
    {
      name: 'api',
      use: {
        extraHTTPHeaders: {
          Accept: 'application/json',
        },
      },
    },

    // ⚙️ VPN SETUP
    {
      name: 'Set up VPN',
      testMatch: /global-setup\.ts/,
      testDir: './global-settings',
      teardown: 'Clean up VPN',
    },

    {
      name: 'Clean up VPN',
      testMatch: /global-teardown\.ts/,
      testDir: './global-settings',
    },
  ],

  metadata: {
    tsconfig: 'tsconfig.json',
  },
});