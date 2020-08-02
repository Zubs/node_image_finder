#!/usr/bin/env node

// Require Packages
const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');
const axios = require('axios');

// Require api to get images


// Unsplash secrets
const accessKey = EDj4JRAKSNFoiMPql56IILacsbCl8tyrGSxLWh50IXc;
const secretKey = JYUR6LB0uVhEHPPS2xFB0ZBSLcWmB6xPJ9QurzQOQ5U;

const options = yargs
	.usage("Usage: -s <search>")
	.option("s", {
		alias: "search",
		describe: "Search Parameter",
		type: "string",
		demandOption: true
	})
	.argv;

const greeting = chalk.blue.bold('NodeJS CLI image searcher');

const boxenOptions = {
	padding: 3,
	margin: 1,
	borderStyle: "round",
	borderColor: "green",
	backgroundColor: "#123456"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

console.log(`Your Search For ${options.search} returned: `);

const url = ``;

console.log(url);

// axios.get(url, {
// 	headers: {
// 		Accept: "application/json"
// 	}
// })
// .then(res => {
// 	console.log(res.data);
// });

// for (var i = 0; i <= Things.length; i++) {
// 	console.log(Things[i]);
// };