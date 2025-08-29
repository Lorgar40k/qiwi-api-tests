import { test, expect } from '@playwright/test';

const agentId = process.env.QIWI_AGENT_ID || 'acme';
const pointId = process.env.QIWI_POINT_ID || '00001';

// 🔹 1. Get all payments
test('Get all payments (basic)', async ({ request }) => {
  const res = await request.get(`/partner/payout/v1/agents/${agentId}/points/${pointId}/payments`);
  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(Array.isArray(data)).toBeTruthy();
  if (data.length > 0) {
    expect(data[0]).toHaveProperty('paymentId');
    expect(data[0]).toHaveProperty('status');
    expect(data[0]).toHaveProperty('amount');
  }
});

// 🔹 2. Get payments with limit=1
test('Get payments with limit=1', async ({ request }) => {
  const res = await request.get(`/partner/payout/v1/agents/${agentId}/points/${pointId}/payments?limit=1`);
  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data.length).toBe(1);
});

// 🔹 3. Unauthorized request
test('Unauthorized request returns 401', async ({ request }) => {
  const res = await request.get(
    `/partner/payout/v1/agents/${agentId}/points/${pointId}/payments`,
    { headers: { Accept: 'application/json' } } // без токена
  );
  expect(res.status()).toBe(401);

  const err = await res.json();
  expect(err).toHaveProperty('errorCode');
  expect(err).toHaveProperty('userMessage');
});

// 🔹 4. Get balance
test('Get Balance', async ({ request }) => {
  const res = await request.get(`/partner/payout/v1/agents/${agentId}/points/${pointId}/balance`);
  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data).toHaveProperty('balance');
  expect(Number(data.balance.value)).toBeGreaterThan(0);
});

// 🔹 5. Execute payment (нужен существующий paymentId)
test.skip('Execute Payment', async ({ request }) => {
  const paymentId = process.env.QIWI_PAYMENT_ID;
  expect(paymentId, 'QIWI_PAYMENT_ID env variable must be set').toBeTruthy();

  const res = await request.post(`/partner/payout/v1/agents/${agentId}/points/${pointId}/payments/${paymentId}/execute`);
  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data).toHaveProperty('paymentId');
  expect(data.amount.value).not.toBe('0.00');
});
