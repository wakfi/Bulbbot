const Event = require("../structures/Event");

module.exports = class extends (
	Event
) {
	constructor(...args) {
		super(...args, {});
	}

	run(channel) {
		// TODO
		// log somewhere
		console.log(`Chanel deleted: <#${channel.id}> (${channel.type})`);
	}
};
