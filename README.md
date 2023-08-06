# Technical Documentation - Code Overview

## Project: Online Code Editor

### Description
The "Online Code Editor" project is a web application that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time. It provides a user-friendly interface with three separate code editors for HTML, CSS, and JS, and a live preview pane to view the output.


## Use the live Project: https://himanshu4776.github.io/Web-IDE/


### Technologies Used
- React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- HTML, CSS, and JavaScript: The project utilizes these three fundamental web technologies to enable code editing and rendering.
- LocalStorage: The project uses LocalStorage to store the user's code so that it is preserved across sessions.
- useEffect Hook: React's useEffect hook is used to manage side effects, such as updating the preview pane when the code changes.
- Iframe: An iframe element is used to display the live preview of the rendered HTML, CSS, and JavaScript code.

### Project Structure
The project consists of the following main files and directories:

1. `App.js`: This file contains the main component of the application, `App()`. It manages the state of the HTML, CSS, and JS code using React hooks (`useState`, `useEffect`) and coordinates the rendering of the code editors and the preview pane.

2. `App.css`: This file contains the CSS styles used for the layout and appearance of the application.

3. `components/Editor.js`: This directory contains the `Editor` component, which represents an individual code editor. It receives props for the language (HTML, CSS, or JS), the display name, the initial code value, and a callback function to update the code when changes occur.

4. `hooks/useLocalStorage.js`: This directory contains the `useLocalStorage` custom hook. It provides a convenient way to store and retrieve data from the browser's LocalStorage.

5. `constants.js`: This file defines the initial starter code for HTML and CSS editors, which are used when the application starts.

### How It Works
1. On application startup, the `App()` component uses the `useLocalStorage` hook to retrieve the previously saved HTML and CSS code from LocalStorage. If no code is found, it initializes the HTML and CSS code using the constants defined in `constants.js`.

2. The three code editors (`Editor` components) for HTML, CSS, and JS are displayed side by side in the top pane of the application. Users can edit the code in each editor, and the changes are immediately reflected in the live preview pane.

3. Whenever the user modifies the code in any of the editors, the `onChange` callback passed to the `Editor` component is triggered. The callback updates the state of the corresponding code (HTML, CSS, or JS) in the `App()` component.

4. To provide a seamless preview experience, the `App()` component uses the `useEffect` hook to update the `srcDoc` state variable whenever there are changes to the HTML, CSS, or JS code. The `srcDoc` contains the rendered code, which is then displayed in the iframe.

5. The iframe is sandboxed with the `sandbox="allow-scripts"` attribute to prevent any malicious scripts from being executed. It provides a secure environment to preview the code.

### Installation and Usage
1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. The application will open in your default web browser, allowing you to use the online code editor.

### Future Improvements
1. User Authentication: Implement user authentication to allow users to save and share their code snippets.
2. Theme Customization: Add the ability for users to customize the editor's theme and appearance.
3. Additional Language Support: Extend the editor to support other programming languages and frameworks.

### Conclusion
The "Online Code Editor" project is a simple yet powerful tool for developers to experiment, test, and visualize their code in real-time. It provides a seamless editing experience and an instant preview of the code output. With its extensible architecture, the project serves as a foundation for adding more features and functionalities in the future.
