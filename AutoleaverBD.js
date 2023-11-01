module.exports = class AutoLeaveGroups {
    constructor() {
        this.initialized = false;
        this.whitelist = []; // Sigh, I guess there are a few chats I don't totally hate... (⌒_⌒;)
    }

    getName() { return 'AutoLeaveGroups'; } // What’s in a name? Still gonna be alone... (˘︹˘)
    getDescription() { return "Escape group chats automatically. It's not like I wanted to talk anyway..."; }
    getVersion() { return '1.0.2'; } // Just a number, doesn't make the silence less deafening...
    getAuthor() { return 'Kobayashiiiiii on discord (・–・;)ゞ'; } // Just some loner, you wouldn’t know them...

    load() {
        console.log("Something loaded... Not like anyone notices me. (._.)");
    }

    start() {
        this.initialized = true;
        // Let the world know of my grand achievement... or not. (¬_¬)
        BdApi.showToast("Running away from social interaction... AutoLeaveGroups started.", {type: "success"});
    }

    stop() {
        this.initialized = false;
        // Back to my lonely existence. At least I have my manga... (T_T)
        BdApi.showToast("Fine, I'll face society... AutoLeaveGroups stopped.", {type: "error"});
    }

    observer(changes) {
        if (!this.initialized) return; // If I'm not ready, why bother? (￣。￣)
        
        // Checking for messages... not that anyone would message me. (︶︹︶)
        if (changes.addedNodes && changes.addedNodes.some(node => this.nodeIsMessage(node))) {
            let message = this.getMessageFromNode(node);
            // What's this? A command for me? Must be a mistake... (o_o)
            if (message.author.id === myUserId && this.isLeaveCommand(message.content)) {
                // Someone wants me gone? As expected... I'll leave the groups.
                this.leaveAllGroupsExcept(message.channelId);
            }
        }
    }

    isLeaveCommand(content) {
        // Checking if someone actually spoke to me... (˚Δ˚)b
        let cmd = content.split(' ');
        return cmd[0] === prefix + command; // Command and prefix, like anyone's listening...
    }

    async leaveAllGroupsExcept(channelId) {
        // Time to vanish from some group chats... like a ninja! (ง •̀_•́)ง
        let count = 0;
        let groupChats = await this.getGroupChats(); // Gathering the chats... for a friend.
        for (let group of groupChats) {
            if (group.id !== channelId && !this.whitelist.includes(group.id)) {
                count++;
                await group.send(leaveMessage); // Whispering "Goodbye" into the void...
                await group.leave();
                // Another group gone, another moment of peace... (−_−＃)
                console.log("Left a group: " + group.id);
            }
        }
        // Announcing my departure... Not that anyone cares.
        BdApi.findModuleByProps("sendMessage").sendMessage(channelId, { content: `Fled from [${count}] group chats! ...Yay, I guess. (･_･｡)` });
    }

    // Below are the dark, secret methods of how I interact with groups and messages...
    getGroupChats() {
        // Where are the groups? Not like I want to be there... (¬‿¬)
    }

    getMessageFromNode(node) {
        // Extracting something from something... I'm not even sure what. (ノ_＜)
    }

    nodeIsMessage(node) {
        // Is this a message? Or just another figment of my social awkwardness...
    }

    addToWhitelist(groupId) {
        // It's not like I like this group or anything, b-baka! (˵ ͡° ͜ʖ ͡°˵)
        if (!this.whitelist.includes(groupId)) {
            this.whitelist.push(groupId);
            console.log(`Okay, group [${groupId}] is... tolerable. Don’t get the wrong idea! (¬_¬)`);
        }
    }

    removeFromWhitelist(groupId) {
        // Someone's being kicked out... not that they liked it here anyway. (╥﹏╥)
        const index = this.whitelist.indexOf(groupId);
        if (index > -1) {
            this.whitelist.splice(index, 1);
            console.log(`Removed group [${groupId}] from whitelist. Good riddance... (︶︹︺)`);
        }
    }
}

// My little bubble of variables... A safe space from the world (⊃｡•́‿•̀｡)⊃
const myUserId = 'YourUserID'; // Just a placeholder for my identity in this digital abyss...
const prefix = '!'; // A small sign before my silent screams...
const command = 'leavegroups'; // The word to make me disappear...
const leaveMessage = 'Goodbye, cruel world... (T_T)'; // My parting whisper to the void...
