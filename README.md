# React To-Do List Application

A modern, high-end to-do list web application built with React and Material-UI (MUI). This app features a sleek user interface, dark mode support, persistent data storage, and interactive sound effects upon task completion.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **High-End UI Design**: Polished and responsive design using Material-UI components.
- **Dark Mode Support**: Toggle between light and dark themes with preferences saved across sessions.
- **Persistent Data**: Tasks are saved in the browser's local storage to maintain state between sessions.
- **Interactive Sound Effects**: Audio feedback when marking tasks as completed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Task Management**: Add, complete, and delete tasks seamlessly.
- **Animations**: Smooth transitions and animations using Framer Motion.

## Demo

Live Demo

## Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

## Installation

Follow these steps to set up the project locally:
### Clone the Repository

  ```
  git clone https://github.com/Zhuoang2/Todo-List-Web.git
  cd Todo-List-Web
  ```
### Install Dependencies
Using npm: `npm install` Or using yarn: `yarn install`

### Start the Development Server
Using npm: `npm start` Or using yarn: `yarn start`

### Open the Application
Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Adding a Task
- Enter a new task in the input field at the top.
- Click the Add button or press Enter to add the task to your list.
### Completing a Task
- Click the checkbox next to a task to mark it as completed.
- An audio sound will play to confirm completion.
### Deleting a Task
- Click the Delete icon next to a task to remove it.
- A confirmation dialog will appear to prevent accidental deletions.
### Dark Mode Toggle
- Use the dark mode toggle switch in the header to switch between light and dark themes.
- Your preference is saved and will persist on subsequent visits.

## Project Structure

```
src/
├── assets/             # Sound files and other assets
│   └── success.mp3
├── components/         # React components
│   ├── Header.js
│   ├── TodoInput.js
│   ├── TodoItem.js
│   └── TodoList.js
├── hooks/              # Custom hooks
│   └── usePrevious.js
├── App.js              # Main application component
├── index.js            # Entry point
└── App.css             # Global styles
```

## Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
