# JavaScript Event
HTML events are **"things"** that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can **"react"** on these events.

## HTML Events
* An HTML web page has finished loading
* An HTML input field was changed
* An HTML button was clicked
### Example:
```html
<element event="some JavaScript">
```

## Common HTML Events
|Event|Description|
|-----|-----------|
|onchange|An HTML element has been changed|
|onclick|The user clicks an HTML element|
|onmouseover|The user moves the mouse over an HTML element|
|onmouseout|The user moves the mouse away from an HTML element|
|onkeydown|The user pushes a keyboard key|
|onload|The browser has finished loading the page|

## JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:
* Things that should be done every time a page loads
* Things that should be done when the page is closed
* Action that should be performed when a user clicks a button
* Content that should be verified when a user inputs data

Many different methods can be used to let JavaScript work with events:
1. HTML event attributes can execute JavaScript code directly
2. HTML event attributes can call JavaScript functions
3. You can assign your own event handler functions to HTML elements
4. You can prevent events from being sent or being handled