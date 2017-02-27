exports.create = {
	User: [
		{
			'name.full': 'Victor Vaquero',
			email: process.env.APP_ADMIN_USER || 'admin@admin.com',
			password: process.env.APP_ADMIN_PASS || 'admin',
			isAdmin: true
		}
	]
};
