var keystone = require('keystone');
// var transform = require('model-transform');
var Types = keystone.Field.Types;

var Skill = new keystone.List('Skill', {
  autokey: {
    from: 'name',
    path: 'key',
    unique: true
  },
  rest: {
      // query: {
      //     where: ['state', 'published'],
      //     sort: ['-publishedDate'],
      //     populate: ['author', '-password']
      // },
      path: "/skill"
  }
});

Skill.add({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  }
});

Skill.track = true;
// Skill.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Skill.register();
