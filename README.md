# Table of Contents

1. App structure
2. Development
3. Technology Decisions

## App Structure

### Root

> src/index.html
> src/js/app.js

### Middleware

> /server

These files are responsible for making rest calls to the Next Trip Api Application.
Graphql allows us to control the data we pull from those calls which therefore cuts
down on loading times, data transfer amounts and allows for real time data.

### Node Modules

This project uses webpack, reactjs, npm node modules as base libraries. those technologies can be looked
up individually in more detail.
React js is the front end framework
node modules is the location for 3rd party packages not made in house.
Webpack allows us to control build processes, scripts, etc.

### Leftover

> src/assets

assets just contains the fonts and images used in our application for the moment.

## Development

### Installation

```
npm install
cd server
npm install

```

### To Run Application

```
	cd server
	npm start
	cd../
	npm run dev
```

open the mentioned url in the browser

## Technology decisions

### Graphql

graphql allows us to use javascript
to control our data, which makes transitioning between our data layer and front end seamless.

### Styled components

We use a 3rd party library named styled components to style our application. It is written much the same as scss with the exeption it
exists within javascript strings and allows us to easily use our application logic to influence our styles.

### Functional components & react hooks

Reactjs supports a class structure and a functional component structure. React has made it clear they are pushing forward with
functional components and while supporting classes, will most likely not be furthering work on them. Functional components allow us
to use react hooks in order to achieve the same functionality as classes but actually be more self contained and easier to understand
where data flows to and from.
