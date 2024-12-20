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

## Contributing
Contributions are welcome! Please follow these steps:

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```
git clone https://github.com/yourusername/your-forked-repo.git
cd your-forked-repo
```

### 3. Create a New Branch

```
git checkout -b feature/your-feature-name
```
### 4. Make Your Changes

Implement your feature or bug fix.

### 5. Commit Your Changes

```
git commit -m "Add your message here"
```

### 6. Push to Your Fork

```
git push origin feature/your-feature-name
```

### 7. Submit a Pull Request

Go to the original repository and open a pull request with a clear description of your changes.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **Framer Motion**: A production-ready motion library for React.
- **use-sound**: A React hook for playing sound effects.
- **localStorage**: Web API for persistent data storage in the browser.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Zhuoang2/Todo-List-Web/blob/main/LICENSE) file for details.
