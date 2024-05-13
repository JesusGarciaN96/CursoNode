const { port, path } = require('./config/env.js');
const { server } = require('./server/server.js');

(async () => {
	server({
		port,
		path,
	});
})();
