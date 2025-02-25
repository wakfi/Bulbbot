const { append } = require("../../../utils/AutoModUtils");

module.exports = async (client, message, args) => {
	const part = args[1];
	const item = args[2];

	if (!part)
		return message.channel.send(
			await client.bulbutils.translate("event_message_args_missing_list", message.guild.id, {
				arg: "part:string",
				arg_expected: 3,
				arg_provided: 1,
				usage: "`website`, `invites` or `words`",
			}),
		);

	if (!item)
		return message.channel.send(
			await client.bulbutils.translate("event_message_args_missing_list", message.guild.id, {
				arg: "part:string",
				arg_expected: 3,
				arg_provided: 2,
				usage: "`website`, `invites`, `words`, `mentions` or `messages`",
			}),
		);

	if (!["website", "invites", "words", "words_token"].includes(part.toLowerCase()))
		return message.channel.send(
			await client.bulbutils.translate("event_message_args_unexpected_list", message.guild.id, {
				arg: item,
				arg_expected: "part:string",
				usage: "`website`, `invites`, `words` or `words_token`",
			}),
		);

	const error = await append(message.guild.id, part.toLowerCase(), item);
	if (error === 1) return message.channel.send(await client.bulbutils.translate("automod_already_in_database", message.guild.id, { item }));

	message.channel.send(await client.bulbutils.translate("automod_added_to_the_database", message.guild.id, { part, item }));
};
