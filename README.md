# Installation & Setup

1. Install dependencies using `npm install`.
2. Start app server using `npm start`.
# Used Technologies

1. Used ReactJS for frontend implementation.
2. Used material ui (https://mui.com/) library for creating interactive UI.
3. Used typescript for type checking (https://www.typescriptlang.org/docs/handbook/utility-types.html).
# Steps of implementation an app

1. Created routing pages '/home', '/create', '/details/${id}'.
2. Created header by making it as fixed position & added "create item" button on the header.
3. Displays the list of items by fetching the data from an api in the '/home' page.
4. Added pagination to show the list in the pages format. As, it will be hard to read the item on the single page.
5. On create item redirects to another page '/create' containing form.
6. Create form contains 2 input fields i.e title, description. On "save" it will save data using an api and redirects to '/home' page on success.
7. When click on any item it will redirect to that item detail page '/details/${id}'.
8. Default, fields will be disabled containing the data of the item.
9. On click of 'edit' field will be active and on "save" it will save the changed data using an api and redirects to '/home' page on success.
10. Added dialog box for remove item confirmation popup.
11. On click of "delete", confirmation pop up will display and if continue, item will be removed using an api and redirects to '/home' page on success.
12. Added loader in apis when the api is in pending state.
13. Added snackbar to show any sucess and error messages after api execution.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
