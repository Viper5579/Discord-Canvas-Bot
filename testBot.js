const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ] 
});

client.once('ready', () => {
    console.log('Logged in as ' + client.user.tag);
    client.destroy();
});

client.login('MTE0NjQ5Mjc5MjQ4MzM1MjY4Nw.Gmht5T.Y_pB_MERtJLPg3fWq8wkM6JRnAhp2dZeyu5MZs');
