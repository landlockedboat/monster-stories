# monster-stories

> Get random dungeons and very interesting stories about the monsters living in them :paw_prints:

[![Build Status](https://travis-ci.org/vikepic/ecoprint.svg?branch=master)](https://travis-ci.org/vikepic/ecoprint) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Install

```
$ npm install monster-stories
```

## Usage

```js
const monsterStories = require('monster-stories');

monsterStories.generateDungeon();
//=> Dungeon {
//			name: 'The Cave Above the Sea',
//			foundingYear: 139,
//			habitants:
//			 [ Monster {
//					 gender: 2,
//					 name: 'Raryolia',
//					 age: 79,
//					 married: true,
//					 alive: false,
//					 so: [Object],
//					 canMarryWith: [Function],
//					 marryTo: [Function],
//					 die: [Function],
//					 story: [Array],
//					 pronoun: 'he' },
//			...
```

## API

### monsterStories.generateDungeon()

Generates a random dungeon with some monsters in it.

### monsterStories.generateMonster()

Generates a random monster.

### monsterStories.generateMonsterFamily()

Generates a random monster family.

### monsterStories.generateMonsterName()

Generates a random monster name.

### monsterStories.generateDungeonName()

Generates a random dungeon name.

### monsterStories.generateStory(dungeon, monsterIndex = -1)

Generates a story, given a `dungeon`

#### dungeon

The dungeon to extract the story of.

#### monsterIndex

The monster to get the story of. Leave at -1 to get a random valid monster index.

## License

MIT © [vikepic](https://vikepic.github.io)
