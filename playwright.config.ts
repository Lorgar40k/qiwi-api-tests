import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://api.qiwi.com',
    extraHTTPHeaders: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.QIWI_TOKEN || ''}`,
    },
  },
});
