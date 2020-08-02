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
const secret = "JYUR6LB0uVhEHPPS2xFB0ZBSLcWmB6xPJ9QurzQOQ5U";

const unsplash = new Unsplash({ accessKey, secret });

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

unsplash.search.photos(options.search, 1, 5, { orientation: "portrait" })
  // .then(toJson)
  .then(res => res.json())
  .then(res => {
  	for (var i = 0; i < res.results.length; i++) {
  		console.log(res.results[i].urls.full);
  	};
  });