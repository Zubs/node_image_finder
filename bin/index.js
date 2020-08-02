#!/usr/bin/env node

// Require Packages
const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');

const options = yargs
	.usage("Usage: -n <name>")
	.option("n", {
		alias: "name",
		describe: "Search Parameter",
		type: "string",
		demandOption: true
	})
	.argv;

const greeting = chalk.blue.bold('I am Zubair');

const boxenOptions = {
	padding: 5,
	margin: 5,
	borderStyle: "round",
	borderColor: "green",
	backgroundColor: "#123456"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

console.log(`Hello, ${options.name}!`)