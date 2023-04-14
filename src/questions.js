module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a valid name.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the employee's ID?",
    validate: (input) => {
      if (!Number.isInteger(Number(input))) {
        return 'Please enter a valid integer for the ID.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email address?",
    validate: (input) => {
      if (!/\S+@\S+\.\S+/.test(input)) {
        return 'Please enter a valid email address.';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'role',
    message: "What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number?",
    when: (answers) => answers.role === 'Manager',
    validate: (input) => {
      if (!Number.isInteger(Number(input))) {
        return 'Please enter a valid integer for the office number.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
    when: (answers) => answers.role === 'Engineer',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a valid GitHub username.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the name of the intern's school?",
    when: (answers) => answers.role === 'Intern',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a valid school name.';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'addMore',
    message: 'Would you like to add another employee?',
    default: false,
  },
];
