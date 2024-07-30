# experiments-with-latest-node-js
Experiments with latest version of Node.js.

# Install Node.js nightly

Ref: https://github.com/nvm-sh/nvm/issues/1053#issuecomment-281178829

```sh
$ NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm ls-remote

$ NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm install <version>
For example:
    $ NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm install v23.0.0-nightly20240730890760b8e5
```

Run the script:
```sh
$ npm start

<OR>

$ ./index.ts

<OR>

$ NODE_NO_WARNINGS=1 node --experimental-strip-types index.ts
```