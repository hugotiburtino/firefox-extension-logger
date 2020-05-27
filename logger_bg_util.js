function getTabs() {
    return browser.tabs.query({currentWindow: true});
}

browser.management.getSelf()
    .then(data => {   
        getTabs().then((tabs) => {
            for(let tab of tabs) {
                browser.tabs.sendMessage(tab.id, data.installType)
            }
        })
    })
