# Firefox-Extension Logger

It logs only if an extension installed as temporary is reloaded

## Requirements
* Allow 'management' at manifest.json
* Add logger_bg_util.js as a background script
* Add as logger.js as first content script
```
...
  "permissions": [
    "management"
  ],
  "background": {
    "scripts": ["logger_bg_util.js"]
  },
  "content_scripts": [
    {
      "js": ["logger.js"]
    }
  ]  
...
```

## How to use
* Install the extension as temporary
* Instantiate a Logger
* Call the log method
Example:
```
const logger  = new Logger()

logger.log("Reading content of body")
const body = document.getElementsByTagName('body')[0].innerText;

```

__Version__: 0.1.0 snapshot

__Note__: the logging is at this version asynchronous, that means, logs with console.log may come first even though they are later on the script
