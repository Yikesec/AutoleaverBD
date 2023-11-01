module.exports = class AutoLeaveGroups {
    constructor() {
        this.whyAmIHere = false; // A flag questioning my existence in this virtual realm... (￣へ￣)
        this.notSoBadPeeps = []; // The "bearable" ones... Surprisingly, they exist. ┐(￣ヮ￣)┌
    }

    // Basic plugin stuff with a dash of existential dread...
    getName() { return 'AutoLeaveGroups'; } // "Leave me alone"... the plugin
    getDescription() { return "Automatically ditches group chats, because reality bites... (¬_¬)"; }
    getVersion() { return '1.2.3'; } // As if versions make a difference to my social life... (ﾉ≧∀≦)ﾉ
    getAuthor() { return 'Kobayashiiiiii on discord (・–・;)ゞ'; } // It's just me... and my shadow. (´･_･`)

    load() {
        this.logError("Ah great, what's loading now? More ways to ignore messages... ε(┬┬﹏┬┬)3");
    }

    start() {
        this.whyAmIHere = true;
        // Joy. I'm 'interacting'... kinda. (¬_¬)ﾉ
        BdApi.showToast("Avoiding society... AutoLeaveGroups is hiding in the corner. (︶︹︺)", {type: "success"});
    }

    stop() {
        this.whyAmIHere = false;
        // Guess I have to go back to dealing with humans... Why though? (ಥ﹏ಥ)
        BdApi.showToast("Back to the jungle... AutoLeaveGroups is now socially awkward again. (๑•́ ₃ •̀๑)", {type: "error"});
    }

    observer(changes) {
        if (!this.whyAmIHere) return; // Ignoring the world, one change at a time... (＿ﾉ乙(､ﾝ､)＿)

        // Someone's trying to talk to me... Do I have to respond? ┐(￣ヘ￣)┌
        if (changes.addedNodes && changes.addedNodes.some(node => this.nodeIsMessage(node))) {
            let message = this.getMessageFromNode(node);
            if (message.author.id === myUserId && this.isLeaveCommand(message.content)) {
                // Oh, it's just me... talking to myself... again. （￣へ￣）
                this.leaveAllGroupsExcept(message.channelId);
            }
        }
    }

    // More method madness here... Now with extra 'meh' (－‸ლ)

    addToWhitelist(groupId) {
        // Fine. I'll keep this one. For now... (ノ_＜)
        if (!this.notSoBadPeeps.includes(groupId)) {
            this.notSoBadPeeps.push(groupId);
            this.logError(`Group [${groupId}] isn't terrible. Don't get any weird ideas. ʕ ಡ ﹏ ಡ ʔ`);
        }
    }

    removeFromWhitelist(groupId) {
        // Changed my mind. You're out! Bye! ヽ(｀⌒´メ)ノ
        const index = this.notSoBadPeeps.indexOf(groupId);
        if (index > -1) {
            this.notSoBadPeeps.splice(index, 1);
            this.logError(`Kicked group [${groupId}] off my not-so-crappy list. (╯°□°）╯︵ ┻━┻`);
        }
    }

    // Special error logger – because misery loves company...
    logError(message) {
        console.error(`This sucks: ${message} – Just like my social skills... (¬_¬)`);
    }
}

// The typical me trying to make sense of all these variables...
const myUserId = 'YourUserID'; // Stuck in this virtual identity crisis... ┐(￣ー￣)┌
const prefix = '!'; // It's like yelling, but not... (｡◕‿◕｡)
const command = 'leavegroups'; // A digital cry for "leave me alone!"... ( ˘︹˘ )
const leaveMessage = 'Fading away like my will to socialize... (T_T)'; // My adieu to virtual strangers... (ノД`)・゜・。
