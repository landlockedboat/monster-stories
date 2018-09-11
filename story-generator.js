'use strict';

module.exports = (dungeon, protagonistId = -1) => {
	let story = [];
	if (protagonistId === -1) {
		protagonistId = Math.floor(Math.random() * dungeon.habitants.length);
	}

	const protagonist = dungeon.habitants[protagonistId];

	story.push('there was once a monster called _NAME_');
	story.push('who lived in a dungeon named "_DNAM_"');
	story.push('_NAME_ was cute');
	story = story.concat(protagonist.story);

	for (let i = 0; i < story.length; i++) {
		story[i] = story[i]
			.replace(/_PRON_/gi, protagonist.pronoun)
			.replace(/_NAME_/gi, protagonist.name)
			.replace(/_SONA_/gi, protagonist.so.name)
			.replace(/_DNAM_/gi, dungeon.name)
			.replace(/_FYEA_/gi, dungeon.founding_year);
	}

	return story;
};
