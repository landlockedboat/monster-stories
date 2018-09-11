'use strict';

const names = require('./name-generator');

function Monster(gender, name, age) {
	this.gender = gender;
	this.name = name;
	this.age = age;

	this.married = false;
	this.alive = true;
	this.so = {};

	this.canMarryWith = function (monster) {
		if (this === monster) {
			// You cannot marry yourself
			return false;
		}

		if (this.married || !this.alive) {
			return false;
		}

		if (this.age < 20 || this.age > 70) {
			// Invalid age
			return false;
		}

		return true;
	};

	this.marryTo = function (monster, year = -1) {
		this.married = true;
		this.so = monster;

		if (year === -1) {
			this.story.push('_PRON_ was married to _SONA_ before coming to ' +
				'the dungeon');
			return;
		}

		this.story.push('_PRON_ married _SONA_ the year ' + year);
		this.story.push('_PRON_ was ' + this.age + ' years old');
	};

	this.die = function (year) {
		this.alive = false;

		this.story.push('_NAME_ died the year ' + year);
		this.story.push('_PRON_ was ' + this.age + ' years old');
	};

	this.story = [];

	switch (this.gender) {
		case 0:
			this.pronoun = 'they';
			this.story.push('_PRON_ was gender neutral');
			break;
		case 1:
			this.pronoun = 'she';
			this.story.push('_PRON_ was a girl monster');
			break;
		case 2:
			this.pronoun = 'he';
			this.story.push('_PRON_ was a boy monster');
			break;
		default:
			throw new Error('Unexpected value for gender: ' + this.gender);
	}
}

function generateRandomMonster(minimumAge = 5, maxAge = 50, year = -1) {
	// 0 -> gender neutral
	// 1 -> girl
	// 2 -> boy
	const gender = Math.floor(Math.random() * 3);
	const name = names.generateRandomMonsterName(gender);
	const extraAge = Math.max(maxAge - minimumAge, 0);
	const age = Math.floor(Math.random() * extraAge) + minimumAge;

	const monster = new Monster(gender, name, age);
	monster.story.push(
		'_PRON_ was ' + monster.age + ' when _PRON_ arrived to the dungeon ' +
		'the year ' + year);

	return monster;
}

// Had to export it this way in order to be able to use it
// on generateRandomMonsterFamily
module.exports.generateRandomMonster = generateRandomMonster;
module.exports.generateRandomMonsterFamily = year => {
	const adults = [];
	const children = [];
	let family = [];

	const numberOfAdults = Math.floor((Math.random() * 3) + 1);

	for (let i = 0; i < numberOfAdults; i++) {
		adults[i] = generateRandomMonster(20, 50, year);
	}

	// Let's decide who marries who
	for (let i = 0; i < adults.length; i++) {
		for (let j = 0; j < adults.length; j++) {
			if (adults[i].canMarryWith(adults[j]) &&
				adults[j].canMarryWith(adults[i])) {
				// I declare you married
				// you may kiss the bride
				adults[i].marryTo(adults[j]);
				adults[j].marryTo(adults[i]);
				break;
			}
		}
	}
	family = family.concat(adults);
	family = family.concat(children);
	return family;
};
