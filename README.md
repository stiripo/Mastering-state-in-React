# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### About

This single page application gives access to the users’ reviews of a program and provides a way to subscribe to the program.

The app is built from independent components.
The app communicates with a mock-up Mirage JS server to fetch data for display in two components (BigCommunity and Card), and also to implement the subscription feature in the Join-Us-Section component.

The app has several views, or pages, - Home page, Community page, individual users' pages and Not Found page. The routing is set up with the React-router-dom library. The app sets up dynamic routing for navigation from the Community section to individual user profiles, with each link pointing to a different user profile page whose url includes the user’s unique id. Then, by extracting the URL parameter using the useParams hook, the app fetches relevant data and dynamically renders the content related to the requested user. In case of a non-existent user id, the app is redirected to the Not Found page.

The app state is implemented through Redux.
The Redux store holds the app state which controls the following features:
- Hide / show the review section with a button click.
- Asynchronous rendering of user profiles.
Thunk middleware is used for updating the state based on the data fetch results. A thunk function is dispatched from the useEffect hook inside the PeopleProfiles component to update the UI only once when the component loads for the first time.
- Subscribing to the program on submitting the form.
Submitting the form will send the field input (email address) to the server.
- Disabling the subscribe button on submitting the form to ensure that the subscription event happens only once.

The following Redux  patterns are utilized in the app:
- Creating action objects using createAction utility function;
- Creating reducer functions and combining them into a single root reducer by using  the combineReducers function;
- Using thunk middleware for async requests;
- Dispatching actions from components to the the Redux store using the useDispatch hook;
- Accessing current state from components via useSelector hook;
