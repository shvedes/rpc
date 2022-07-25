const RPC = require('discord-rpc');
const client = new RPC.Client({transport: "ipc"});

const activity = {
    details: "", // Top text
    state: "", // Botoom text
    assets: {
        large_image: "", // Large image
        large_text: "", // Large text
        small_image: "", // Small image
        small_text: "", // Small text
    },
    buttons: [
        {
            "label": "", //  Button Label
            "url": "", // URL
        },
        {
            "label": "", // Button label
            "url": "", // Button label
        }
    ],


// Timestamp. If you don't need it, you can remove these two lines

    timestamps: {start: Date.now()},
    instance: true,
};

client.on('ready', () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
    console.log('Done');
});

client.login({clientId: ''}); // Client ID
