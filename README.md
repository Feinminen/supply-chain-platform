# Supply chain platform

Simple UI to suppliers vendors and quotes

## Notes

- App is not fully responsive.
- There is no routing
- For full typesafety, it's necessary to add a few typeguards
- Requests data are not cached because I was not sure if the same data is returned from a request with the same parameters.
- I've tried to avoid premature optimization and generalization (requests to the API could be separated into a separate service)

## Project requirements:

- Implement authentication UI. You may use POST /api/v1/users/ endpoint to create new users and POST /api-token-auth/ to get the authentication token.
- Build a UI that allows seeing the list of available suppliers.
- Build a UI where we can see details of the specific supplier.
- Build a UI where we can see the created quotes.
- Upload your code to github/gitlub/bitbucket. Please make the repository public or provide access to the private repository to ogurtsov (same on all platforms).
- Deploy your code somewhere so that it is possible to review how it works.

## Getting Started:

### Cloning repository

Cloning is performed by the ```git clone``` command with a link to the remote project repository.

### Install dependencies

Before starting the project, dependencies that are specified in the package.json must be installed via ```yarn install ``` command.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn deploy`

To deploy project on gh-pages


## References:

Project is bootstrapped with create-react-app;

