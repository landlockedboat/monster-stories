import test from 'ava';
import monsterStories from '.';

test('Dungeon generator works', t => {
	t.truthy(monsterStories.generateDungeon());
});

test('Story generator works', t => {
	const d = monsterStories.generateDungeon();
	t.truthy(monsterStories.generateStory(d));
});
