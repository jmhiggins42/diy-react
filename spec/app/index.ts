import * as request from 'supertest';

import app from '../../src/app';

describe('API Server', () => {
  it('should handle GET requests', async () => {
    const response = await request(app).get('/api');
    expect(response).toBeTruthy();
    expect(response.status).toBe(200);
  });
});
