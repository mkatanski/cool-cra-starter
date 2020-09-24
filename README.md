This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> please use Yarn instead of npm. if you don't have yarn, please install it `npm i -g yarn`

The application should be running on your [https://localhost:3000](https://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Run all tests without coverage checking.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:watch`

Launches the test runner in interactive mode. It will watch for changes in files and relaunch tests on each change.

### `yarn test:cover`

Run all tests with coverage raport generated to `/coverage/` folder.
You can run

```bash
open coverage/lcov-report/index.html
```

to see coverage in default browser.

### `yarn test:watch:cover`

It launches the test runner in interactive mode and with coverage reporting.

Run all tests with coverage raport generated to `/coverage/` folder.
You can run

```bash
open coverage/lcov-report/index.html
```

to see coverage in default browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn reinstall`

Remove all node modules from project folder and reinstall them. It will also preserve modules versions and will not modify _yarn.lock_ file.

### `yarn reinstall:cache`

Same as `yarn reinstall` but it also cleans yarn cache.

### `yarn pretty`

It will run prettier on all project files. Please note that prettier will be run before each commit. Prettier will unstage all files that has been formatted and stop commiting so You can check what changes was applied before commit.

### `yarn lint`

Project use [eslint](https://eslint.org/) to check code style consistency and/or fix problems with TypeScript code. You can run `yarn lint` to manually perform linting, however it is recommended to use code editor like [VSCode](https://code.visualstudio.com/) to lint all files in real time.
