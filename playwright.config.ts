import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://ehr.stg.yonalink.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },
  projects: [
    { name: 'chrome', use: { browserName: 'chromium', channel: 'chrome', ...devices['Desktop Chrome'] } },
    { name: 'edge', use: { browserName: 'chromium', channel: 'msedge', ...devices['Desktop Edge'] } },
  ],
});
