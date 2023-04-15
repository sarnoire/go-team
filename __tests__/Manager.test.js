const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties when called with the "new" keyword', () => {
      const obj = new Manager('Jane', 1, 'jane@test.com');

      expect(obj).toEqual({ name: 'Jane', id: 1, email: 'jane@test.com' });
    });

    it('should throw an error if provided with an empty name', () => {
      const cb = () => new Manager('', 1, 'jane@test.com');

      expect(cb).toThrowError('Name cannot be empty');
    });

    it('should throw an error if provided with an invalid email', () => {
      const cb = () => new Manager('Jane', 1, 'invalid_email');

      expect(cb).toThrowError('Invalid email address');
    });
  });

  describe('getName', () => {
    it('should return the name of the Manager', () => {
      const obj = new Manager('Jane', 1, 'jane@test.com');

      expect(obj.getName()).toEqual('Jane');
    });
  });

  describe('getId', () => {
    it('should return the id of the Manager', () => {
      const obj = new Manager('Jane', 1, 'jane@test.com');

      expect(obj.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the Manager', () => {
      const obj = new Manager('Jane', 1, 'jane@test.com');

      expect(obj.getEmail()).toEqual('jane@test.com');
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      const obj = new Manager('Jane', 1, 'jane@test.com');

      expect(obj.getRole()).toEqual('Manager');
    });
  });
});
