#!/usr/bin/env -S NODE_NO_WARNINGS=1 node --experimental-strip-types
// -S                         => helps to pass the arguments / environment variables
// NODE_NO_WARNINGS=1         => helps to suppress the warnings from Node.js' end if we are using any experimental features
// --experimental-strip-types => helps to strip the types from the TypeScript code

import {
    fixedMessage,
    logFixedMessage,
    logMessage
} from './utils/utils.ts';

logFixedMessage();

const text:string = `${Math.random()} - ${fixedMessage}`;
logMessage(text);
