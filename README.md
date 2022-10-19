# Vanilla JavaScript and JQuery Projects

These are JavaScript projects I coded by using Vanilla JavaScript or JQuery. I aim to improve my skill in JavaScript fundametals, DOM manipulation or JQuery. So, very litter styling has been made on some web apps.

## Table of contents

- [Projects](#Projects)

  - [1.Bookmark-Tracker](#1.Bookmark-Tracker)
  - [13.Space-Invader](#13.Space-Invader)
  - [14.Drop-Dwon-Menu](#14.Drop-Down-Menu)

- [Author](#Author)

## Projects

### 1.Bookmark Tracker

_Last Update: October 19, 2022 (refactoring code)_

This Chrome extension enable a user to save the current tab url or manually type a url and save it in the local storage.

![screenshoot](https://github.com/Isaactangky/JavaScript-small-projects/blob/f976192526878f6462529db3d85ae944670e1ad2/1.%20Chrome%20Extension/Screenshot-chrome-extension.png?raw=true)

#### My Process:

1. render list of bookmarks in the ul element
2. get current browser tab url string and save it when clicking the save button
3. get value from input element and save it when the "save input" button clicked
4. build manifest.json file to compile as a Chrome extension

#### Functions or Concepts Applied / learned:

- creating Goole Chrome extension, working with the "chrome.tabs.query" api, DOM

### 13.Space Invader

_August 31, 2022_

#### Challenges:

This is a classic space invader game. There are a group of alien invaders invading from the top of the space. The user has the ability to move the shooter to fight laser to eliminate the invaders. The user wins when all the invaders are killed and loses when the invader touch the shooter or the invaders pass through the bottom border.

#### My Process:

1. Create a list of 'div's and append them to the div grid
2. Create a function to draw and remove the invaders
3. Create shooter for users, function for user to move the shooter and add event listener to Document to the function moveShooter
4. Create function to move the invaders and set the corresponding timeInterval
5. Create function for shooting laser and setting logics in eliminating the invaders, and pass it to another event listener of Document
6. Add the conditions for "GAME OVER" and "WIN"
7. Adjust the timer interval

#### Functions or Concepts Applied / learned:

- querySelector(), querySelectorAll(), addEventListener(), classList.contains(), .onclick(), classList.add(), classList.remove(), setTimeout(), setTimeInterval()

#### Live Site URL:

[Add live site URL here](https://your-live-site-url.com)

### 14.Drop Dwon Menu

_September 6, 2022_

#### Challenges:

This is a menu that shows a sub menu when the user mouse over a menu item. This is a function that I would like to incorporate in my personal website.

#### My Process:

1. Create navigation bar with a unordered list
2. Add simple design to the menu and add hover effects
3. Nesting another menu in the "Projects" section
4. Set position for the sub menu to absolute, to seperate it from the page
5. Inside the script, add "mouseover" and "mouseout" event listeners to the list item, the display of the sub menu is set to "block" when "mouseover", and "none" when "mouseout"
6. After finishing the version with JS script, I notice that the desire function can be achieved by simple css :hover selector. The JS version is commented out.

#### Functions or Concepts Applied / learned:

- mouseover event, mouseout event, querySelector(), querySelectorAll(), addEventListener(), classList.add(), classList.remove()

#### Live Site URL:

[Add live site URL here](https://your-live-site-url.com)
