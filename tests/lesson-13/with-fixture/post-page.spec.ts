import { test } from '../../../pom/fixtures/index.fixture';
import { before } from 'node:test';

test.beforeAll(() => {
  console.log('beforeAll');
})

test.beforeEach(() => {
  console.log('beforeEach');
})

test.afterAll(() => {
  console.log('afterAll');
})

test.afterEach(() => {
  console.log('afterEach');
})


test('Media page text1', async ({ dashboardPage1 }) => {
  console.log('code test media page');
});