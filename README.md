# React Rocket List App

This repository contains a simple React application for managing a list of rockets. It allows users to add new rocket names and delete existing ones.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/akorovai/SimpleReactApp.git
   ```

2. Change into the project directory:

   ```bash
   cd react-rocket-list-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- `public`: Contains the HTML template and static assets.
- `src`: Contains the React application source code.
  - `components`: Reusable React components.
  - `styles`: Styled-components styling for components.
  - `App.js`: Main React component.
  - `TextFieldValidator.js`: Input field component with validation.
  - `ListItem.js`: Component for rendering a single rocket item.
  - `InputContainer.js`: Component for input and add button.
  - `GlobalStyles.js`: Global styles for the application.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Styled-components](https://styled-components.com/): Styling library for React.
- [React-dom](https://reactjs.org/docs/react-dom.html): Entry point to the DOM and server renderers for React.
- [React-scripts](https://create-react-app.dev/docs/getting-started/): Scripts and configuration used by Create React App.

## Usage

1. Open the application in your web browser at [http://localhost:3000](http://localhost:3000).
2. Enter a rocket name in the input field.
3. Click the "Add" button to add the rocket to the list.
4. Rockets are displayed in a list format with a "Delete" button.
5. Click the "Delete" button to remove a rocket from the list.
