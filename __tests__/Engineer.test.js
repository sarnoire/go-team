const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties when called with the "new" keyword', () => {
      const obj = new Engineer('John', 1, 'john@test.com');

      expect(obj).toEqual({ name: 'John', id: 1, email: 'john@test.com' });
    });

    it('should throw an error if provided with an empty name', () => {
      const cb = () => new Engineer('', 1, 'john@test.com');

      expect(cb).toThrowError('Name cannot be empty');
    });

    it('should throw an error if provided with an invalid email', () => {
      const cb = () => new Engineer('John', 1, 'invalid_email');

      expect(cb).toThrowError('Invalid email address');
    });
  });

  describe('getName', () => {
    it('should return the name of the Engineer', () => {
      const obj = new Engineer('John', 1, 'john@test.com');

      expect(obj.getName()).toEqual('John');
    });
  });

  describe('getId', () => {
    it('should return the id of the Engineer', () => {
      const obj = new Engineer('John', 1, 'john@test.com');

      expect(obj.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the Engineer', () => {
      const obj = new Engineer('John', 1, 'john@test.com');

      expect(obj.getEmail()).toEqual('john@test.com');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const obj = new Engineer('John', 1, 'john@test.com');

      expect(obj.getRole()).toEqual('Engineer');
    });
  });
});
