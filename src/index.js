import readline from "readline";
import os from "os";
import fs from "fs";
import Calculator from "./calculator";
import { validateArguments } from "./validator";

console.log(
  "Welcome to the simple calculator! Please enter: <register> <operation> <value>:"
);

const calculator = new Calculator();
const startCalculator = async () => {
  const file = getFileVariable();

  try {
    const args = await getArguments(file);
    args.forEach(arg => {
      try {
        validateArguments(arg);
        const argLength = arg.length;

        switch (argLength) {
          case 1:
            return quit();
          case 2:
            console.log(calculator.evaluateRegister(arg[1]));
            break;
          default:
            calculator.addOperation(arg);
        }
      } catch (operatonErr) {
        console.error(`${operatonErr.message}\n`);
      }
    });
  } catch (err) {
    console.error(`An error occurred when getting arguments: ${err.message}\n`);
    return quit();
  }

  if (file) {
    quit();
  } else {
    startCalculator();
  }
};

const getFileVariable = () => {
  // File path appended directly to npm start script
  const [filePath] = process.argv.slice(2);
  // File name appended as environment variable
  const fileName = process.env.fileName;
  return filePath || fileName;
};

const getArguments = file => {
  if (file) {
    return getFileArguments(file);
  } else {
    return getCommandLineArguments();
  }
};

const getCommandLineArguments = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    try {
      rl.question("", input => {
        const args = input.split(" ");
        rl.close();
        resolve([args]);
      });
    } catch (err) {
      throw "An error occurred when getting calculator arguments";
    }
  });
};

const getFileArguments = filePath =>
  new Promise(resolve => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      return resolve(data.split(os.EOL).map(line => line.split(" ")));
    });
  });

const quit = () => {
  console.log("\nAdios!");
  process.exit(0);
};

startCalculator();
