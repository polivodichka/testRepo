export function logMsgAfterSomeTime(msg: string, ms: number) {
    setTimeout(function () {
        console.log(msg, 'was logged after %s seconds', ms / 1000);
    }, ms);
}

export function logOnInterval(ms: number) {
    setInterval(function () {
        console.log('this message was logged after %s seconds', ms / 1000);
    }, ms);
}