const { config } = require('dotenv');
const { get } = require('env-var');

config();

const port = get('PORT').required().asPortNumber();
const public_path = get('PATH').required().asString();

module.exports = {
	port,
	public_path,
};
