const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties when called with the "new" keyword', () => {
      const obj = new Intern('Chris', 1, 'chris@test.com');

      expect(obj).toEqual({ name: 'Chris', id: 1, email: 'chris@test.com' });
    });

    it('should throw an error if provided with an empty name', () => {
      const cb = () => new Intern('', 1, 'chris@test.com');

      expect(cb).toThrowError('Name cannot be empty');
    });

    it('should throw an error if provided with an invalid email', () => {
      const cb = () => new Intern('Chris', 1, 'invalid_email');

      expect(cb).toThrowError('Invalid email address');
    });
  });

  describe('getName', () => {
    it('should return the name of the Intern', () => {
      const obj = new Intern('Chris', 1, 'chris@test.com');

      expect(obj.getName()).toEqual('Chris');
    });
  });

  describe('getId', () => {
    it('should return the id of the Intern', () => {
      const obj = new Intern('Chris', 1, 'chris@test.com');

      expect(obj.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the Intern', () => {
      const obj = new Intern('Chris', 1, 'chris@test.com');

      expect(obj.getEmail()).toEqual('chris@test.com');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const obj = new Intern('Chris', 1, 'chris@test.com');

      expect(obj.getRole()).toEqual('Intern');
    });
  });
});
