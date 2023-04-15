const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const questions = require('./src/questions');

const teamMembers = [];

function promptUser() {
  inquirer.prompt(questions).then(answers => {
    const { name, id, email, officeNumber } = answers;
    const teamMember = { name, id, email, officeNumber };
    teamMembers.push(teamMember);

    switch (answers.role) {
      case 'Engineer':
        // prompt user for engineer-specific information and push to teamMembers array
        promptUser();
        break;
      case 'Intern':
        // prompt user for intern-specific information and push to teamMembers array
        promptUser();
        break;
      case 'Finish':
        // generate HTML and exit application
        generateHTML(teamMembers);
        break;
    }
  });
}

// prompt user for team manager information to start the application
promptUser();