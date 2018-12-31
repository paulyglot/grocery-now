const proxy = require('http-proxy-middleware')
module.exports = function(app) {
	app.use(proxy('/api/', { target: 'http://localhost:3002/' }))
	app.use(proxy('/api/logout/', { target: 'http://localhost:3002/' }))
}