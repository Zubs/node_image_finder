#!/usr/bin/env node

// Require Packages
const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');
const axios = require('axios');

// Require api to get images
const fetch = require('node-fetch');
global.fetch = fetch;

const Unsplash = require('unsplash-js').default;

// Unsplash secrets
const accessKey = "EDj4JRAKSNFoiMPql56IILacsbCl8tyrGSxLWh50IXc";
const secretKey = "JYUR6LB0uVhEHPPS2xFB0ZBSLcWmB6xPJ9QurzQOQ5U";

const unsplash = new Unsplash({ accessKey });

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

unsplash.search.photos(options.search, 1, 5, { orientation: "portrait" })
  // .then(toJson)
  // .then(json => {
  //   console.log(json);
  // })
  .then(res => {
  	console.log(res.url);
  })

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