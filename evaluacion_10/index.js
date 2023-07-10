import * as controller from './modulos/controller.js';
import chalk from 'chalk';
const sum = controller.suma(20, 60);
const mul = controller.multiplica(60, 4);
console.log(sum);
console.log(chalk.green(mul));