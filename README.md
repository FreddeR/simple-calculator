# Simple Calculator

This is a simple calculator built in Node.js. The calculator can receive input through the command line or through being provided with a file.

If the calculator is provided with a file, the expected format is one calculator argument per line (see example below).

`exampleFile`

```
test add 2
test2 add 5
test multiply 4
test multiply test2
print test
print test2
```

## How to run it

Below you'll find instructions and pre-requisites for how to run the simple calculator.

A requirements for the calculator assignment was to be able to run it on a Widows computer. Since I don't know what applications are installed on the host machine, there are two way of running this calculator. Either you can [run it with Node](#running-with-node), or you can [run it in a Docker container](#running-with-docker)

### Running with Node

In order to be able to run this calculator with node, you need to have [Node.js](https://nodejs.org/en/download/) installed on your machine. Once installed, you open your command line tool, navigate to the root of the calculator repo and run the following command to install necessary calculator dependencies:

`npm install`

#### Running the calculator with command line inputs

In order to run the calculator and be able to enter command line inputs, you run the following command:

`make run`

#### Running the calculator with a file

In order to run the calculator with a file containing pre-specified calculator arguments, run the following command:

`make run filePath=<filePath>`

### Running with Docker

In order to run the simple caluclator with Docker you need to have [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows) installed.

#### Running the calculator with command line inputs

In order to run the calculator and be able to enter command line inputs, you run the following command:

`make run-docker`

#### Running the calculator with a file

In order to run the calculator with a file containing pre-specified calculator arguments, you need to do the following:

1. Place the file in the root catalog of the calculator repository.
2. Run: `make run-docker fileName=<fileName>`
