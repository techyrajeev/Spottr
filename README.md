# KulrSpottr

## Description
A responsive single page web application using react, redux, jest, enzyme, webpack, express, scss, google-material design icons.
This project does not use libraries such as jquery, bootstrap.
Also backend has not been used in this project, all application states are stored in browser memory.

### See live version -

[KulrSpottr](https://kulr-spottr.herokuapp.com/)

## Tools and Technologies used
* **ReactJs**: To create user interace views
* **Redux**: For application state management on client side
* **Webpack** : As module bundler and static assest generator, to covert jsx, and es6 code to vanilla javascript with the help of babel
* **Express** : to serve the generated module bundle via node.js based server
* **Jest and Enzyme** : for unit testing
* **Scss** : For styling the user interface
* **Html** : for markup and layout
* **babel** : To use latest es6 features and jsx to js transpilation
* **npm** : To use nodejs based packages and run node scripts
* **nodejs** : for node run time envoriment and express server
* **localStorage** : in browser memory to store app's state
* **Google material icons** : for using font based icons in the project
* **Other tools** : Vim, and Chrome, firefox, Chrome dev tools, redux-dev tools

## Project structure and layout
### Layout: 
Two column responsive layout, mobile friendly

* Header
* Footer
* Sidebar
* Content

### Header & Footer:
Just display the static content.

### Sidebar:
* It contains the leader-board ( Hall of fame ) where top 10 players name along with their scroe in descending order is displayed.

* It can be collapsed/expanded when clicked on leader-board header.

* It only shows the top 10 players.

* It is updated as soon as new player is added to the leaderboard after finishing the game.

### Conent:
* It contains the components where current game being played and current level player has reached is shown.

* When user has ended the game or reached the maximum possible game level then player form is shown to enter the player name.

* Player may or may not enter the information. If player enters the name then his/her score is saved on leader-board list and displayed on leader-board.

* Player may start the new game again after entering the player name or skipping it from this page.

### Base Requirement:
node : 6.x.x or above 
npm : 3.x.x or above

### Steps to run this project:

First Go to Project directory

```
cd ~/Spotter
```
then

### 1. Install dependencies
 
```
npm install
```
### 2. Run the test cases
 
It will run the test cases written for this project from 'test' directory.
```
npm run test
```
### 3. Run the project
```
 npm run start
```

### 4. See running project in local browser 
Open the [localhost](http://localhost:8080/) in browser

### 5. See live running project   
Open the [KulrSpottr](https://kulr-spottr.herokuapp.com/) in browser


## Other important scripts to run
### 1. Run the project via webpack-dashboard
 
```
npm run dash
```
### 2. Run the game play bot
 
It will run the game playing script to win the game automatically.

It will select each cell one by and in case found the correct cell it will continue to the next

level. This process will be continued untill all levels are finished. I have used test driven approach for this.

```
npm run gameplaybot
```
