# Sample Repo for vscode fallback issue

See https://github.com/microsoft/vscode/issues/192810 

## Steps to reproduce

1. Clone this repo: `git clone git@github.com:GordonSmith/vscode-issue-192810.git`
2. Install deps: `npm install`
3. Create a self signed cert:  `npm run create-cert`
4. Start the server: `npm start`
5. See it fail: `npm run test1`
6. See it work: `npm run test2`

