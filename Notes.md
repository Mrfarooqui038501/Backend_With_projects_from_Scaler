const fs = require("fs"); // common js  -- older way to import environment 
// import fs from 'fs'; // new way to import the evvironment 

1. NODEJS = It's a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. This means you can use JavaScript to build server-side applications, APIs, and more (server side js runtime environment.)

Key features and benefits of Node.js 
- JavaScript Consistency: Uses the same language (JavaScript) for both frontend and backend development, promoting code reuse and reducing learning curve.
- Asynchronous Programming: Employs a non-blocking, event-driven architecture, making it efficient for handling concurrent requests.
- Scalability: Can handle a large number of concurrent connections, making it suitable for high-traffic applications.
- Community and Ecosystem: Benefits from a vast community and ecosystem with numerous libraries and frameworks available.
- Performance: Known for its speed and efficiency, especially for I/O-bound tasks.



2. EXPRESS = is a popular Node.js web application framework that provides a robust set of features for building web applications and APIs. It's known for its minimalism, flexibility, and performance.  (web  framework for node js).

-- Key Features:
- Routing: Handles HTTP requests and routes them to appropriate handlers.
- Middleware: Provides a mechanism for customizing request and response handling.
- Templating: Supports various templating engines for rendering dynamic content.
- Static File Serving: Serves static files like HTML, CSS, and JavaScript.
HTTP Methods: Supports all HTTP methods (GET, POST, PUT, DELETE, etc.).
- Error Handling: Provides built-in mechanisms for handling errors and exceptions.


-- Benefits of using Express.js:
- Simplicity: Easy to learn and use, even for beginners.
- Flexibility: Highly customizable to fit various project requirements.
- Performance: Known for its efficiency and scalability.
- Large Community: Benefits from a strong community and extensive ecosystem of third-party modules.

E.G. 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
In this example, an Express.js application is created, and a GET request handler is defined for the root path (/). When a GET request is made to the root path, the server responds with the message "Hello, World!".   



3.express.json() =  is a built-in middleware in Express.js that parses JSON-encoded request bodies. It automatically converts the request body into a JavaScript object, making it easier to access and work with the data.

--- Key Features:
- JSON Parsing: Automatically parses JSON-encoded request bodies into JavaScript objects.
- Middleware: A function that modifies the request and response objects before they are passed to the route handler.
- Configuration: Can be configured with options to control the parsing behavior.

-- Usage:
- To use express.json(), you typically place it before your route handlers in your Express.js application:


--- Benefits of using express.json():
- Simplified data handling: Automatically converts JSON data into JavaScript objects, making it easier to work with.
- Improved readability: Makes your code more readable and maintainable.
Reduced boilerplate: Eliminates the need for manual JSON parsing.

-- Additional Notes:
- You can configure express.json() with options to customize its behavior, such as specifying the maximum request body size.
- If you're dealing with other content types (e.g., URL-encoded data), you might also need to use express.urlencoded().
- Always ensure that your API endpoints are protected from malicious requests and input validation is performed to prevent security vulnerabilities.

E.g. 
const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.post('/data', (req, res) => {
  const data = req.body; // Access the parsed JSON data
  // ... process the data
  res.json({ message: 'Data received successfully' });
});
In this example:
xpress.json() is used as middleware to parse JSON-encoded request bodies.
The app.post('/data', ...) route handler receives the parsed data in the req.body object.



4.4.Middleware Functions  =  Middleware functions in Express.js are functions that have access to the request (req) object, response (res) object, and the next middleware function in the application's request handling cycle. They can modify the request or response, or terminate the request-response cycle.


---- req and res Objects
- req object: Represents the incoming HTTP request. It contains information about the request, such as the URL, HTTP method, headers, and query parameters.
- res object: Represents the outgoing HTTP response. It provides methods for sending the response to the client, including setting headers, status codes, and the response body.

-- Parsing
- Express.js provides built-in middleware for parsing different types of request bodies:
- express.json(): Parses JSON-encoded request bodies.
express.urlencoded(): Parses URL-encoded request bodies (typically used for form data).

-- Authentication
Authentication middleware verifies the identity of the user making the request. Common authentication strategies include:
- Session-based authentication: Stores user information in a session cookie.
- Token-based authentication: Issues JWT (JSON Web Tokens) to authenticate users.
- Basic authentication: Requires the user to provide a username and password in the request headers.

--- Logging
Logging middleware can be used to record information about requests and responses, such as:
- Request and response details (URL, HTTP method, status code, headers, etc.)
- Error messages
- Performance metrics

-- Error Handling
- Error handling middleware can be used to catch and handle errors that occur during request processing. This can help prevent unexpected errors from crashing your application.

-- app.use()
The app.use() method is used to register middleware functions with your Express.js application. It takes the middleware function as an argument and adds it to the application's middleware stack.

e.g.
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Authentication middleware
app.use(authenticateUser);

// Logging middleware
app.use((req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
});

// Route handler
app.get('/users', (req, res) => {
  // ...
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

In this example:

express.json() is used to parse JSON request bodies.
authenticateUser is a hypothetical authentication middleware.
The logging middleware logs request and response details.
The route handler handles GET requests to the /users endpoint.
The error handling middleware catches and handles any errors that occur.


5. Node js System file modules 
a. fs (File System)  module =  The fs module provides an API for interacting with the file system in Node.js. It allows you to perform various operations on files and directories, such as reading, writing, creating, deleting, and renaming them.

-- Use Cases:
- Reading and writing files for data storage and retrieval.
- Creating and deleting files and directories.
- Renaming files and directories.
- Checking file and directory information (e.g., size, modification time).

e.g.
const fs = require('fs');
// Read a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFile('newfile.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});


b. writeFile = The fs.writeFile method asynchronously writes data to a file. If the file doesn't exist, it will be created.

e.g. 
fs.writeFile('data.json', JSON.stringify({ message: 'Hello' }), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});

c. readFile =The fs.readFile method asynchronously reads data from a file.
e.g.
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});


d. rename = The fs.rename method asynchronously renames a file or directory.
e.g. 
fs.rename('oldfile.txt', 'newfile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully');
});

e. stat = The fs.stat method asynchronously retrieves information about a file or directory.
e.g. 
 fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log('File size:', stats.size);
  console.log('Is directory:', stats.isDirectory());
});

f. dirname = The path.dirname method returns the directory name of a path.
e.g.
const filePath = '/path/to/file.txt';
const directoryName = path.dirname(filePath);
console.log(directoryName); // Output: '/path/to'

g. rmdir = The fs.rmdir method asynchronously removes a directory.
e.g. 
fs.rmdir('myDirectory', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Directory removed successfully');
});




6. Path Module  = The path module in Node.js provides functions for working with file and directory paths. It offers various methods to manipulate, join, parse, and resolve paths, making it essential for file system operations.

---- Key Functions and Their Descriptions:

a. path.join(...paths): = Joins multiple path segments into a single path.
Handles platform-specific path separators (e.g., / on Unix-like systems, \ on Windows).

Example:
const joinedPath = path.join('path', 'to', 'file.txt');
console.log(joinedPath); // Output: '/path/to/file.txt'


b. path.resolve(...paths): = - Resolves a path to its absolute form, taking into account the current working directory.
- Handles relative paths and resolves any parent directories (..).
e.g.
const absolutePath = path.resolve('relative/path/to/file.txt');
console.log(absolutePath); // Output: '/path/to/file.txt' // (assuming the current working directory is '/path')


c. path.dirname(path):=  Returns the directory name of a path.
e.g.  
const directoryName = path.dirname('/path/to/file.txt');
console.log(directoryName); // Output: '/path/to'


d. path.basename(path, [ext]): =  -Returns the last portion of a path (the filename).
- Optionally, you can specify an extension to remove from the filename.
E.g. 
const fileName = path.basename('/path/to/file.txt');
console.log(fileName); // Output: 'file.txt'

e. path.extname(path): = Returns the file extension of a path.
e.g.
const extension = path.extname('/path/to/file.txt');
console.log(extension); // Output: '.txt'

f. path.isAbsolute(path): = Checks if a path is absolute or relative.
e.g.  
const isAbsolute = path.isAbsolute('/path/to/file.txt');
console.log(isAbsolute); // Output: true

g. path.normalize(path): = Normalizes a path, removing redundant slashes and resolving relative paths.
e.g.
const normalizedPath = path.normalize('path/to/../file.txt');
console.log(normalizedPath); // Output: 'path/file.txt'

h. path.parse(path): =  Parses a path into its components (root, dir, base, name, ext).
e.g. 
const parsedPath = path.parse('/path/to/file.txt');
console.log(parsedPath); // Output: { root: '/', dir: '/path/to', base: 'file.txt', name: 'file', ext: '.txt' }




