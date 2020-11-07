# nureact920

# nucampsite-920

## Week 1 Prerequisites - JavaScript

- [template literals](codeChallenges/01week/01temp-lit/app.js)
- [objects](codeChallenges/01week/02objects/app.js)
- [class inheritance](codeChallenges/01week/03class-inheritance/app.js)
- [Map](codeChallenges/01week/04map/app.js)
- [Filter](codeChallenges/01week/05filter/app.js)
- [Reduce](codeChallenges/01week/06reduce/app.js)

### Workshop

- [setup](workshops/01week/workshop/notes.md)
- [task1](workshops/01week/workshop/notes.md)
- [task2](workshops/01week/workshop/notes.md)
- [task3](workshops/01week/workshop/notes.md)

## Week 2: Welcome to React

### Exercise: Getting Started with React

- This was done in a previous branch with the following:

```bash
$ mkdir nureact920
$ cd nureact920
$ npx create-react-app@3.4.1 .
```

- this branch is a react app created by running npx.

### Exercise: Initial Configuration

- Please use npm!!!!!
- Add bootstrap, reactstrap, and react-popper with the following version numbers:

```bash
$ npm i bootstrap@4.5.2 reactstrap@8.5.1 react-popper@1.3.6
```

- if you want to see something cool, watch [package.json](package.json) while the packages are loading!
- [index.js](src/index.js) should look like this. See the comments
- [App.js](src/App.js) should look like and running `npm start` should look like the video. Slack me if it doesn't!

### Challenge Question: Syntactic Sugar

- This [file](./learn/codeChallenges/02week/synSugar.md) has my answer/notes on syntactic sugar. Don't read this file until you have answered the question!!

### Exercise: React Components Part 1

- Move [images.zip](public/assets/images.zip) into the `public/assets` folder.
- Create a [Directory.js](src/components/Directory.js) component. See the comments in the file.
- Update the [App.js](src/App.js) component. See comments
- The last part about a 'key' prop is already in place in the last step.

### Exercise: React Components Part 2

- In this exercise, we are moving state 'up' as they say. This is where it gets complicated. Don't just cut and paste. Try to understand what is going on.
- Download [campsites.js](src/shared/campsites.js). Don't just download it, read it! What is in this file? What is going on? Which data structure is CAMPSITES???
- Update [Directory.js](src/components/Directory.js). Don't just cut and paste! Read the code! What is going on???
- Update [App.js](src/App.js)
- Add the pretty fonts with the following: (PLEASE use npm!!!)

```bash
$ npm i typeface-lobster typeface-open-sans
```

- add the import statements in [index.js](src/index.js)
- Update [App.css](src/App.css)

### Workshop

#### Task 1

- Add [CampsiteInfo.js](src/components/CampsiteInfo.js)
- Update [Directory.js](src/components/Directory.js)

- Before:

```jsx

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
        </div>
      </div>
    );
  }

```

- After:

```jsx
    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <CampsiteInfo campsite={this.state.selectedCampsite} />
        </div>
      </div>
    );
  }
```

#### Task 2

- Add the `renderCampsite()` method to [CampsiteInfo.js](src/components/CampsiteInfo.js)

#### Task 3

## Week 3

### Exercise: Presentational and Container Components

- Add [Main.js](src/components/Main.js)
- Update [App.js](src/components/App.js)
- Update [Directory.js](src/components/Directory.js)

### Exercise: Functional Components

- Update [Directory.js](src/components/Directory.js)

### Code Challenge: React Components and Object Destructuring

- [code challenge](learn/codeChallenges/03week/01reactCompObjDest/index.js)

### Code Challenge: Lifting State Up & Functional ComponentsForum

- [code challenge](learn/codeChallenges/03week/02liftingStateFunComps/index.js)

### Exercise: Header and Footer

- add font-awesome and bootstrap-social

```bash
$ npm i font-awesome@4.7.0 bootstrap-social@5.1.1
```

- Add import statements to [index.js](src/index.js)
- Create [Header.js](src/components/Header.js)
- Create [Footer.js](src/components/Footer.js)
- Integrate the header and footer into the [Main.js](src/components/Main.js) component.
- Update [App.css](src/App.css)

### Exercise: React Router

- install react-router-dom

```bash
$ npm i react-router-dom@5.2.0
```

- Update the [App.js](src/App.js) component.
- Add the [Home.js](src/components/Home.js)
- Update the [Main.js](src/components/Main.js) component.
- Update the [Header.js](src/components/Header.js) component.
- Update the [Footer.js](src/components/Footer.js) component.
- Update the [Directory.js](src/components/Directory.js) component.

### Exercise: Adding to the Single Page App

- Add:
  - [campsites.js](src/shared/campsites.js)
  - [comments.js](src/shared/comments.js)
  - [partners.js](src/shared/partners.js)
  - [promotions.js](src/shared/promotions.js)
- Add [Contact.js](src/components/Contact.js)
- Update [Main.js](src/components/Main.js)
- Update [Home.js](src/components/Home.js)

### Exercise: React Router Parameters

- Update the [Directory.js](src/components/Directory.js)
- Update [Main.js](src/components/Main.js)
- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

### Exercise: Breadcrumbs

- Update the [Directory.js](src/components/Directory.js)
- Update [Contact.js](src/components/Contact.js)
- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

### Code Challenge: React Router Params

- [code challenge](learn/codeChallenges/03week/03reactRouterParams/index.js)

### Workshop

#### Task 1

- Add [About.js](src/components/About.js)
- Update [Main.js](src/components/Main.js)

#### Task 2

- Update [About.js](src/components/About.js)

#### Task 3

- Update [About.js](src/components/About.js)

## Week 4:

### Code Challenge

### Code Challenge

### Exercise: Controlled Forms

- Update [Contact.js](src/components/Contact.js)

### Exercise: Controlled Form Validation

- Update [Contact.js](src/components/Contact.js)

### Exercise: Uncontrolled Forms

- Update [Header.js](src/components/Header.js)

### Code Challenge

### Exercise: Introduction to Redux

- Install:

```bash
$ npm i redux@4.0.5 react-redux@7.2.0
```

- Create [reducer.js](src/redux/reducer.js)
- Create [configureStore.js](src/redux/configureStore.js)
- Update [App.js](src/App.js)
- Update [Main.js](src/components/Main.js)

### Exercise: React Redux Form

- Install:

```
$ npm i react-redux-form@1.16.14
```

- Update [Contact.js](src/components/Contact.js)

### Exercise: React Redux Form Validation

- Update [Contact.js](src/components/Contact.js)

### Workshop

#### Task 1

- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

#### Task 2

- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

#### Task 3

- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

### Exercise: Splitting and Combining Reducers

- Create [campsites.js](src/redux/campsites.js)
- Create [comments.js](src/redux/comments.js)
- Create [partners.js](src/redux/partners.js)
- Create [promotions.js](src/redux/promotions.js)
- Update [configureStore.js](src/redux/configureStore.js)
- Delete [reducers.js](src/redux/reducer.js)

### Exercise: Redux Actions

- Create [ActionTypes.js](src/redux/ActionTypes.js)
- Create [ActionCreators.js](src/redux/ActionCreators.js)
- Update [comments.js](src/redux/comments.js)
- Update [Main.js](src/components/Main.js)
- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)

### Exercise: Redux Thunk

- Install:

```bash
$ npm i redux-thunk@2.3.0 redux-logger@3.0.6
```

- Update [configureStore.js](src/redux/configureStore.js)
- Update [ActionTypes.js](src/redux/ActionTypes.js)
- Update [ActionCreators.js](src/redux/ActionCreators.js)
- Update [campsites.js](src/redux/campsites.js)
- Create [LoadingComponent.js](src/components/LoadingComponent.js)
- Update [Main.js](src/components/Main.js)
- Update [CampsiteInfo.js](src/components/CampsiteInfo.js)
- Update [Home.js](src/components/Home.js)
- Update [Directory.js](src/components/Directory.js)

### Exercise: React-Redux-Form Revisited

- Create [forms.js](src/redux/forms.js)
- Update [configureStore.js](src/redux/configureStore.js)
- Update [Main.js](src/components/Main.js)
- Update [Contact.js](src/components/Contact.js)

### Exercise: Json-Server

- Install json-server globally:

```bash
$ npm i json-server -g
```

- Create [json-server](../json-server/db.json)
- Create [public](../json-server/public/keep.txt) folder

- Add images to the [public](../json-server/public/keep.txt) folder

### Exercise: Fetch from Server

- start server and app
- Create [baseUrl](src/shared/baseUrl.js)
- Update [ActionTypes.js](src/redux/ActionTypes.js)
- Update [ActionCreators.js](src/redux/ActionCreators.js)
- Update [promotions.js](src/redux/promotions.js)
- Update [comments.js](src/redux/comments.js)
- Update [Main.js](src/components/Main.js)
- Update [Directory.js](src/components/Directory.js)
- Update [Home.js](src/components/Home.js)

# Workshop Live