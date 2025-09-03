import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('Test Product', 9.99, 'Test Description', 'test.jpg')).toBeTruthy();
  });
});
