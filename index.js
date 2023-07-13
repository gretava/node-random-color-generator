// Import the color library, hue and luminosity
import chalk from 'chalk';
import randomColor from 'randomcolor';

// USe argv to get user input
const hue = process.argv[2];
const luminosity = process.argv[3];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// const randomColor = Math.floor(Math.random() * 16777215).toString(16);

// Using chalk, color the pattern
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold('#####       ' + color + '       #####'));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
