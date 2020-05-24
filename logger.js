class Logger {
    log(msg) {
        browser.runtime.onMessage.addListener(request => {
        if (request == 'development') {
            console.log(msg);
        } 
        })
    }
}
