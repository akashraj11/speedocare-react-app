# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all required dependencies for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
### Advanced Configuration
Add Environment Variables:
In your Netlify site settings, navigate to "Build & Deploy" > "Environment" and create two new environment variables:

`NETLIFY_SITE_ID`: Set this to your Netlify site's unique ID.
`NETLIFY_AUTH_TOKEN`: Generate a personal access token from Netlify and set it as the value for this variable. This token will be used to authenticate the deployment.
Configure React Project:
Make sure your React project is set up with a valid package.json file and the necessary scripts for building and testing your app. Typically, this includes a "build" script to create a production build and a "test" script to run your tests.


### Deployment

The Pipeline created using Github Actions Workflow does this. Make sure inside your project's repository, create a new directory called .github/workflows. Inside this directory, create a YAML file (e.g., `netlify-deploy.yml`) to define your GitHub Actions workflow.

[https://docs.netlify.com/cli/get-started/](https://docs.netlify.com/cli/get-started/)
[https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm](https://dev.to/dancrtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm)

Any push done to master branch run the build pipeline and deploy the application at [https://speedocare.netlify.app/](https://speedocare.netlify.app/)