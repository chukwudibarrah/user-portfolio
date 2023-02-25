import inquirer from "inquirer"
import fs from "fs"

import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What do you do in your spare time?',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
  ])



const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I currently live in ${answers.location}.</p>
    <p class="lead">My favourite thing to do: ${answers.bio}.</p>
    <h3 class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">GitHub username: ${answers.username}</li>
      <li class="list-group-item">Connect with me on LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync(`${response.name}.html`, generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));