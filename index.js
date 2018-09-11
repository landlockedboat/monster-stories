'use strict';

module.exports.generateDungeon = require('./dungeon-generator');
module.exports.generateMonster = require('./monster-generator').generateRandomMonster;
module.exports.generateMonsterFamily = require('./monster-generator').generateRandomMonsterFamily;
module.exports.generateMonsterName = require('./name-generator').generateRandomMonsterName;
module.exports.generateDungeonName = require('./name-generator').generateRandomDungeonName;
module.exports.generateStory = require('./story-generator');
