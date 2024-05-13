const express = require('express');

const server = options => {
	const app = express();

	const { port, public_path = 'public' } = options;
	const staticPath = `../../${public_path}/index.html`;

	// Para manejar los middleware se usa el método "use"
	app.use(express.static(public_path));

	// Definición de rutas (ruta raiz "/")
	app.get('/', (req, res) => {
		const content = path.join(__dirname + staticPath);
		res.sendFile(content);
	});

	app.listen(port, () => console.log(`Listening on ${port}`));
};

module.exports = {
	server,
};
