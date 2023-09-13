const vscode = require('vscode');
// const fetch = require("node-fetch");
const https = require("https");

function activate(context) {
    console.log('Congratulations, your extension "extension" is now active!');

    context.subscriptions.push(vscode.commands.registerCommand('xxx.yyy', async () => {

        const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

        const agent = new https.Agent({ rejectUnauthorized: false });

        await config.update("http.proxySupport", "fallback", true);

        const response = await fetch("https://127.0.0.1:8080/", { agent })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(`Network response was not ok.  ${response.statusText}`);
            })
            .catch(error => {
                console.log(error);
                return { error: error.message };
            });

        vscode.window.showInformationMessage(response);
    }));
}

function deactivate() { }

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}
