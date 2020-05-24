function getActiveTab() {
    return browser.tabs.query({active: true, currentWindow: true});
  }

browser.management.getSelf()
    .then(data => {   
        console.log(data);
        getActiveTab().then(tabs => {
            console.log(tabs[0].id)
            browser.tabs.sendMessage(tabs[0].id, data.installType) 
        })
    })
