# Frontend Social Network

This is a Frontend application of a social network project used in my Youtube
videos.

https://www.youtube.com/playlist?list=PLab_if3UBk9-O8mjF8JyuK6_4j8G2UxUq

## Chapter 1

In this first video, I've created the React application with yarn and described
the folder structure and how the React components work.

Then I've run the React application and saw the different parts of the rendered
webpage. I've also explain the hot reload used by yarn to refresh the webpage
upon changes done in the code.

And finally, I've explained how React mixes the HTML and the Javascript thanks
to JSX.

https://www.youtube.com/watch?v=hbhOKw8cZrQ&list=PLab_if3UBk9-O8mjF8JyuK6_4j8G2UxUq&index=3&t=0s


## Chapter 2

In the second video of the playlist, I've created the folders to have a structured
project: all the components grouped in a separated folder. From there, I've created
a React component to handle the login form. It will be composed by a JS file and a
CSS file.

The index.js contains a main div which will be the parent of all the application. This
main div contains the main CSS definitions which all the children will inherit.

The login form is composed by two tabs: one to handle the sign in of existing users;
and one to handle the sign up for new users. Both tabs are located in the same div.
Click on each other will show and hide the corresponding form with the corresponding
input fields that must be send to the backend.

At the end, the forms data will be sent to the backend using axios. Axios will allow
us to handle the correct response to redirect to another page of the site, and handle
the errors to print a message error to the user.

https://www.youtube.com/watch?v=zAL_4j-Z-B8&list=PLab_if3UBk9-O8mjF8JyuK6_4j8G2UxUq&index=4&t=0s


## Chapter 3

In this third video, I've added a React Router to manage the different pages of the website
with different URLs. I needed to create a custom route to manage proctected URLs. This protected
route will check the presence of an auth token in the local storage to allow render
requested page.

Having separated the protected pages of the public pages, I created two different layouts:
one for the public pages without header, and one for the protected pages with a header where
are located different tabs to switch between the available pages.

https://www.youtube.com/watch?v=1IOX_B7sWXY&list=PLab_if3UBk9-O8mjF8JyuK6_4j8G2UxUq&index=5&t=0s


## Chapter 4

In this fourth video, I've created the messages page where all the messages of the community are
displayed. The list is displayed in a page of 10 elements, and a button at the end will allow
to load more elements. This button will append the incoming elements ot the existing list. This
way, React won't reload the page, only the DOM will be modified and no refresh/reload will be
perceived by the user.

The message page will also have a input form to post a new message. As with load more button,
posting a new message will append the new message at the top of the list without any refresh/reload
of the page.

https://www.youtube.com/watch?v=5gdYY8gjVTg&list=PLab_if3UBk9-O8mjF8JyuK6_4j8G2UxUq&index=6&t=0s


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
