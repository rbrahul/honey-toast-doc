---
outline: deep
---

# API References


## Methods to Create Toasts:
These methods are available on the instance of the library. To find the methods available on the instance of the created toast please have a look in the `ToastEntry` API reference.


| Method Name | Description |
|-------------|-------------|
| `notify(content: ToastContent, options?: ToastOptions):ToastEntry` | Displays and returns the toast|
| `info(content: ToastContent, options?: ToastOptions):ToastEntry` | Displays and returns the toast of type `info`. |
| `success(content: ToastContent, options?: ToastOptions):ToastEntry` | Displays and returns the toast of type `success` |
| `warn(content: ToastContent, options?: ToastOptions):ToastEntry` | Displays and returns the toast of type `warning` |
| `error(content: ToastContent, options?: ToastOptions):ToastEntry` | Displays and returns the toast with type `error` |
| `closeAll()` | Will close all the toast notifications |


## ToastContent
It is used as the first parameter of the `notify()`,`success()`, `info()`, `warn()`, `error()` and `update()` methods.

For Example:

```js
toast.notify(content: ToastContent, options?: ToastOptions)
```

ToastContent can be either one of the following type:

`string` , `{
    title?: Title;
    message?: ToastMessage;
    buttons?: Button[];
}` or  `HTMLElement`



## List of Options (ToastOptions):

Options are optional. 

| Option Name | Type |Description | Default Value |
|-------------|--------------|-------------|---------------|
| `position` | `top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `center` |Position of the toast on the screen | `top-right` |
| `animation` | `slide`, `bounce`, `fade`, `zoom` | Animation that will be applied once the Toast appears and disappears | `slide` |
| `type` |`default`, `success`, `info`,`warning`, `error` |Type of the Toast| `default` |
| `design` | `minimal`, `standard`, `colorful`,`gradient` | Design of the Toast | `minimal` |
| `theme` | `light`, `dark`, `system` | Color mode of the Toast | `light` |
| `duration` | `number` |Duration in millisecond for which the toast is visible | `3000` |
| `autoClose` | `boolean` |If the Toast should closed automatically once Duration is elapsed | `true` |
| `hasProgressBar` | `boolean` |If the Toast should have a progressbar | `false` |
| `progress` | `number` | If the Progress Bar is visible then it will be used as starting position of the progress. Value must be between 0 to 100| `0` |
| `isCloseable` |`boolean`| If the Toast should have the close icon | `true` |
| `container` | `HTMLElement` | Container where the all Toasts will be mounted | `document.body`|
| `classNames` | `string[]` | A list of classes which will be added on the Toast | `[]`|
| `hasIcon` | `boolean` | If the Toast should have Icon visible | `true`|
| `icon` | `{url: string, classes: string[], size: "small or medium or large"}` | Size of the Icon of the Toast | `small`|
| `offset` | `{x: number, y: number}` | Gap from the nearest edges or the Container. `x` and `y` values are treated as `px` | `{x:30, y:30}`|
|`onShow` | () => void| Will be called once the Toast is appread in the screen after finising Animation|
|`onClose` | () => void| Will be called once the Toast is removed from the DOM|




## Methods and Properties exposed by the Toast:
The Toast implements the `ToastEntry` interface which offers following methods and Properties:

| Method/Property Name | Description | Type |
|-------------|-------------|----------------|
| `update(content: ToastContent, options?: ToastOptions)` | Updates the existing toast with new `ToastContent` and can modify the UI and behavior of that toast by passing configurations as `ToastOptions`| `() => {}` |
| `close()` | Closes the toast that was created earlier| `() => {}` |
| `closeAll()` | Will close all the toast notifications | `() => {}` |
| `mountedIn` | It is the container Element of type `HTMLElement` that contains the Toast | `HTMLElement` |
| `element` | The reference of the DOM Node of the Toast|  `HTMLElement` |
| `options` | The options applied on the Toast |`ToastEntry`|
