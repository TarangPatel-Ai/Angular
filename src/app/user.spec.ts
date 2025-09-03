import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('testuser', 'test@example.com', 1234567890)).toBeTruthy();
  });
});
