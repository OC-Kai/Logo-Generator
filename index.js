//imports inquirer, fs, and shapes.js

const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require('./lib/shapes');

console.log("Welcome to the logo generator! Please reply to the following prompts below to generate a unique logo:")

//function to generate logo

function createLogo(answers) {
    let logo;
    if (answers.shape === 'Circle') {
        logo =  new circle(answers.color, answers.text, answers.textColor);
    } else if (answers.shape === 'Square') {
        logo = new square(answers.color, answers.text, answers.textColor);
    } else if (answers.shape === 'Triangle') {
        logo = new triangle(answers.color, answers.text, answers.textColor);
    }
    return logo.render();
}

//inquirer prompt

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
            message: 'Please choose a shape for your logo.'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Please enter between 2 to 3 letters for your logo.',
            validate: function (input) {
                const letters = input.trim();
                if (letters.length < 2 || letters.length > 3) {
                  return 'Please enter between 2 and 3 letters.';
                }
                return true;
              },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color for your text.'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter either a color name or a hex code'
        }


    ])
        .then((answers) => {
            const generateLogo = createLogo(answers);
            fs.writeFile("logo.svg", generateLogo, (err) => {
                err ? console.log(err) : console.log("Logo.svg successfully created!")
            })
        })
