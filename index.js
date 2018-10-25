const chalk = require('chalk');

console.log(chalk.blue("Hello world!"));
console.log(chalk.green("My name is ") + chalk.underline.bold.white("Jae Ellis"));
console.log(chalk.bgYellowBright.black("I am not very good at making stories, ") + chalk.bgWhiteBright.red("but i do love the chalk package!!"));
console.log(chalk.bgBlack.red("This would be good for error messages and stuff.."));
console.log(chalk.bgGreenBright.black("This could be used for a 'Good job user.'"));
console.log(chalk.underline.red("I am already out of things to say.. ='(''''''''  "));