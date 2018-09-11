'use strict';

const monsters = require('./monster-generator');
const names = require('./name-generator');

function Dungeon(name, foundingYear) {
	this.name = name;
	this.foundingYear = foundingYear;

	this.habitants = [];
}

function yearlyMonsterActions(monster, dungeon, year) {
	if (!monster.alive) {
		return;
	}

	const marriageProbability = 0.2;

	if (!monster.married && Math.random() <= marriageProbability) {
		for (let i = 0; i < dungeon.habitants.length; i++) {
			if (monster.canMarryWith(dungeon.habitants[i]) &&
				dungeon.habitants[i].canMarryWith(monster)) {
				monster.marryTo(dungeon.habitants[i], year);
				dungeon.habitants[i].marryTo(monster, year);
			}
		}
	}

	if (Math.random() * monster.age > 70) {
		monster.die(year);
	}

	++monster.age;
}

function generateDungeonStory(dungeon) {
	dungeon.habitants = dungeon.habitants.concat(
		monsters.generateRandomMonsterFamily(dungeon.foundingYear));

	dungeon.habitants.forEach(hab => {
		hab.story.push(
			'_PRON_ was one of the first settlers of the dungeon');
	});

	const fy = dungeon.foundingYear;

	const migrantProbability = 0.02;
	for (let i = fy; i < fy + 200; i++) {
		if (Math.random() <= migrantProbability) {
			const migrants = monsters.generateRandomMonsterFamily(i);
			dungeon.habitants = dungeon.habitants.concat(migrants);
		}

		dungeon.habitants.forEach(hab => {
			yearlyMonsterActions(hab, dungeon, i);
		});
	}
}

module.exports = () => {
	const name = names.generateRandomDungeonName();
	const foundingYear = Math.floor(Math.random() * 250);

	const dungeon = new Dungeon(name, foundingYear);

	generateDungeonStory(dungeon);

	return dungeon;
};
