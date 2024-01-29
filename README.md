## Github Pages Link
https://gethol.github.io/react-portfolio/

## Homework 2.4

###1.What is NPM?
NPM is a package manager for Node.js, a JavaScript runtime. It is used to manage and distribute third-party packages or libraries for Node.js.

###2.What is SPA?
An SPA, Single Page Application, is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This leads to a smoother and more responsive user experience, as only the necessary content is loaded or updated.


###3.What is the event loop?
The event loop is a crucial part of JavaScript's concurrency model. It continuously checks the message queue for new events or tasks to execute. It handles asynchronous operations by placing callbacks in the queue when an asynchronous task completes. The event loop allows programs to continue executing other tasks while waiting for other I/O operations to complete, rather than being blocked until the operation finshes.


###4.What is the difference between export x and export default x? How do you import them differently?
export x: This syntax is used to export a named variable,function, or class. When you use export x, you need to import it using the same name in the import statement.

export default x: This syntax is used to export a default value from a module. You can only have one default export per module. When you use export default x, you can import it with any name in the import statement.




###5.Why do you use className as a property in React and not class?

In React, the attribute for specifying CSS class is className, not class. This is because class is a reserved keyword in JavaScript, and using it directly as an attribute name could lead to conflicts.


###6.Why should you not write the following? What will happen?

```<button onClick={setCounter(counter + 1)}> +1 </button>```

The setCounter(counter + 1) will be executed immediately when the component renders, not when the button is clicked. The site crashes due to the number of renders resulting in an infinite loop.

###7.What is object deconstruction and how is it connected to React components (example)?

Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a concise and readable way.

In the context of React components, object destructuring is commonly used to extract and use properties from the props object, which is an object that holds the properties passed to a React component.

```jsx
const WithoutDestructuring = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// Component with object destructuring
const WithDestructuring = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
```



###8.How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

In React, the ability to use HTML and JavaScript together within a component is facilitated by JSX (JavaScript XML). JSX is a syntax extension for JavaScript that allows you to write XML/HTML-like code within your JavaScript files. Babel is a tool used to transpile JSX into Javascript so that it can be understood by browsers.

###9.What is async/await? Bring an example
The async/await keywords are used when dealing with asynchronous functions. The async keyword is used to define a function that returns a promise, and the await keyword is used to pause the execution of the function until the promise is resolved.




```jsx

async function fetchData() {
  try {
    const response = await fetch(“https://api.chucknorris.io/jokes/random”);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

```


###10.What is a Promise? Bring an example
 Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

```
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve('Data fetched successfully');
    } else {
      reject('Error fetching data');
    }
  }, 1000);
});

```





<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
