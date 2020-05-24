# Firefox-Extension Logger

It logs only if the extension is installed as temporary

## Requirements
* Allow 'management' at manifest.json
* Add bg_logger.help.js as a background script
* Add logger.js as as content script  
```
...
  "permissions": [
    "management"
  ],
  "background": {
    "scripts": ["bg_logger_help.js"]
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
