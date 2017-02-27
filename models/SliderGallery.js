var keystone = require('keystone');
var Types = keystone.Field.Types;
var localStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'data/slider',
		publicPath: '/slider'
	}
})

var SliderGalleryItem = new keystone.List('SliderGalleryItem', {
	autokey: {
		from: 'name',
		path: 'key',
		unique: true
	},
	rest: {
		query: {
			where: [
				'state', 'published'
			],
			//     sort: ['-publishedDate'],
			//     populate: ['author', '-password']
		},
		path: "/slider-gallery-items"
	},
	plural: 'SliderGalleryItems',
	singular: 'SliderGalleryItem'
});

SliderGalleryItem.add({
	name: {
		type: String,
		required: true
	},
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
		index: true
	},
	header: {
		type: String
	},
	title: {
		type: String
	},
	subtitle: {
		type: String
	},
	image: {
		type: Types.File,
		storage: localStorage
	}
});

SliderGalleryItem.track = true;
SliderGalleryItem.defaultSort = 'name';
SliderGalleryItem.defaultColumns = 'name, publishedDate';
SliderGalleryItem.register();
