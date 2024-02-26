#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');
const terminalLink = require('terminal-link');
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js');
require('dotenv').config();

global.fetch = fetch;

const unsplash = Unsplash.createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

const options = yargs
	.usage("Usage: -s <search> -o <orientation>")
	.option("s", {
		alias: "search",
		describe: "Search Parameter",
		type: "string",
		demandOption: true
	})
	.option("o", {
		alias: "orientation",
		describe: "Image Orientation",
		type: "string",
		demandOption: false,
		default: "portrait",
		choices: ["landscape", "portrait", "squarish"]
	})
	.argv;

const greeting = chalk.blue.bold('NodeJS CLI image searcher');

const boxenOptions = {
	padding: 3,
	margin: 1,
	borderStyle: "round",
	borderColor: "green",
	backgroundColor: "#f2f2f2"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

console.log(`Your Search For ${options.search} returned: `);

unsplash.search.getPhotos({ query: options.search, page: 1, perPage: 10, orientation: options.orientation })
  .then(res => {
	  if (res.type === 'success') {
			for (let i = 0; i < res.response.results.length; i++) {
				let link = terminalLink(chalk.red.bold(res.response.results[i].alt_description), res.response.results[i].urls.full);
				let downloadLink = terminalLink(chalk.yellow.bold('Download'), res.response.results[i].links.download)
				console.log(`${link}.\t${downloadLink}`);
			}
	  } else {
		  console.log(chalk.red.bold('An error occurred while fetching images'));
	  }
  })
