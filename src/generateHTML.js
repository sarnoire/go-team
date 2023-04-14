const Handlebars = require('handlebars');
const fs = require('fs');

const template = Handlebars.compile(fs.readFileSync('./src/template.hbs', 'utf8'));

module.exports = function(teamMembers) {
  const html = template({ teamMembers });
  fs.writeFileSync('team.html', html);
};
