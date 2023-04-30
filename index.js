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
      case 'Manager':
        // prompt user for manager-specific information and push to teamMembers array
        inquirer.prompt({
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
        }).then(managerAnswer => {
          teamMembers[teamMembers.length - 1].officeNumber = managerAnswer.officeNumber;
          promptUser();
        });
        break;
      case 'Engineer':
        // prompt user for engineer-specific information and push to teamMembers array
        inquirer.prompt({
          type: 'input',
          name: 'github',
          message: "What is the engineer's GitHub username?",
        }).then(engineerAnswer => {
          teamMembers[teamMembers.length - 1].github = engineerAnswer.github;
          promptUser();
        });
        break;
      case 'Intern':
        // prompt user for intern-specific information and push to teamMembers array
        inquirer.prompt({
          type: 'input',
          name: 'school',
          message: "What is the intern's school?",
        }).then(internAnswer => {
          teamMembers[teamMembers.length - 1].school = internAnswer.school;
          promptUser();
        });
        break;
      case 'Finish':
        // generate HTML and exit application
        generateHTML(teamMembers);
        break;
    }
  });
}

// prompt user for team manager information to start the application
inquirer.prompt({
  type: 'input',
  name: 'name',
  message: "What is the team manager's name?",
}).then(managerAnswer => {
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: "What is the team manager's ID?",
  }).then(idAnswer => {
    inquirer.prompt({
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
    }).then(emailAnswer => {
      inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      }).then(officeNumberAnswer => {
        const teamMember = {
          name: managerAnswer.name,
          id: idAnswer.id,
          email: emailAnswer.email,
          officeNumber: officeNumberAnswer.officeNumber,
        };
        teamMembers.push(teamMember);
        promptUser();
      });
    });
  });
});
