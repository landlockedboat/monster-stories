'use strict';

// Not using the 'gender' variable. I have to explicit it by naming it
// '_', if not ESLint complains.
exports.generateRandomMonsterName = _ => {
	const prefixes = [];
	const infixes = [];
	const suffixes = [];

	// Gender neutral prefixes
	prefixes[0] =
		['Un', 'Ku', 'Ra', 'Bo'];
	// Gender neutral infixes
	infixes[0] =
		['vol', 'ryo', 'ka', 'bika'];
	// Gender neutral suffixes
	suffixes[0] =
		['dor', 'lia', 'rup', 'gon'];

	// Only doing gender neutral for the moment

	let name = '';
	name += prefixes[0][Math.floor(Math.random() * prefixes[0].length)];
	name += infixes[0][Math.floor(Math.random() * infixes[0].length)];
	name += suffixes[0][Math.floor(Math.random() * suffixes[0].length)];
	return name;
};

exports.generateRandomDungeonName = () => {
	const firstNames =
		['Brook', 'House', 'Bastion', 'Barrack', 'Cavern', 'Cave'];
	const connectors =
		['Below', 'Above', 'Near', 'of', 'by'];
	const secondNames =
		['River', 'Sea', 'Forest', 'Hills'];

	let name = '';
	name += 'The ';
	name += firstNames[Math.floor(Math.random() * firstNames.length)];
	name += ' ';
	name += connectors[Math.floor(Math.random() * connectors.length)];
	name += ' the ';
	name += secondNames[Math.floor(Math.random() * secondNames.length)];
	return name;
};
