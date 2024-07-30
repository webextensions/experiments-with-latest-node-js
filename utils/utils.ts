const fixedMessage: string = 'Hello, world!';

const logFixedMessage = (): void => {
    console.log(fixedMessage);
};

const logMessage = (msg: string): void => {
    console.log(msg);
};

export {
    fixedMessage,
    logFixedMessage,
    logMessage
};