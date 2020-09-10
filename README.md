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
