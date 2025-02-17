# Getting Started



## Install Via Package managers:

::: code-group
```sh [npm]
npm i honey-toast --save
```

```sh [pnpm]
pnpm add honey-toast
```

```sh [yarn]
yarn add honey-toast
```
:::

## Usage Example:
This code snippet will help you to create a basic notification with default configuration. 

```js
import toast from 'honey-toast';
import 'honey-toast/dist/style.css';

toast.notify("Hi There!")
```

::: info
You can create more advanced notification using optional configurations as second parameter. Or you can even use [the Playground](https://github.com/rbrahul/honey-toast-doc) to create and try out different Notifications. There you can also copy the generated code.
:::


## Inject directly to the webpage via CDN:
```html
<link href="https://cdn.jsdelivr.net/npm/honey-toast@latest/dist/style.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/honey-toast@latest/dist/toast.umd.min.js"></script>
...
<script>
    toast.notify("Hi There!")
</script>
```


#### Create different type of notifications using simpler api:

```js
toast.success("Your information have been udpated!")
toast.info("Email has been delivered!")
toast.warn("Stock is limited")
toast.error("Ooops, something went wrong")
```


#### Create more advanced toast notification with tons of options:
Please have a look into our the [api references](/api-references.md) to find the complete list of options.

```js
import toast from 'honey-toast';
import 'honey-toast/dist/style.css';


const notification = toast.notify({
        title: 'Hi, there!',
        message: 'Thank you for subscribing our service.',
        buttons: [
            {
                iconUrl: 'YOUR_ICON_DIR/close.svg',
                label: 'Cancel',
                classes: [],
                onClick: () => {
                    console.log('Canceling...');
                },
            },
            {
                iconUrl: 'YOUR_ICON_DIR/tick.svg',
                classes: [],
                label: 'Confirm',
                onClick: () => {
                    console.log('Confirming...');
                },
            },
        ]
        },
        {
            duration: 3000,
            position: 'top-right',
            type: 'success',
            animation: 'slide',
            hasProgressBar: false,
            offset: {x: 30, y: 30},
            classNames: [],
        });
    
```


#### Updating existing notification in different circumstances:

```js
const notification = toast.notify("Your requst is being processed", {hasProgressBar: true});
// once you need to update the status
notification.update("Request has been processed", {type: "success"})

// you may want to show error message if request was not handled correctly
notification.update("Ooops! Something went wrong", {type: "error"});
```


**Closing notifications:**

```js
const notification = toast.notify("Hi There!");
// close once you need
notification.close();

// to close all notifications:
notification.closeAll();
``` 



Check out the API reference documentation for [full list of options](/api-references.md)
