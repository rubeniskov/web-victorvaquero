var keystone = require('keystone');
var Types = keystone.Field.Types;
var localStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'data/gallery',
    publicPath: '/gallery',
  },
})

var Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true },
  plural: 'Albums',
  singular: 'Album',
});

Gallery.add({
  name: { type: String, required: true },
  publishedDate: { type: Types.Date, default: Date.now },
  images: { type: Types.File, storage: localStorage },
});

Gallery.track = true;
Gallery.defaultSort = 'name';
Gallery.defaultColumns = 'name, publishedDate';
Gallery.register();
