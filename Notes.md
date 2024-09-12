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

7. STATIC FILES  = Static files in a backend context are files that are served directly to the client without requiring any server-side processing or dynamic generation. These files typically include:

- HTML files: The building blocks of web pages, defining the structure and content.
- CSS files: Style sheets that define the appearance and layout of web pages.
- JavaScript files: Scripts that add interactivity and functionality to web pages.
- Images: Graphics and other visual content.
- Other static assets: Fonts, videos, audio files, etc.


--Why serve static files from the backend?
- Efficiency: Serving static files directly from the server can improve performance, as the server doesn't need to process or generate the content.
- Separation of concerns: Separating static files from dynamic content can make your application's structure more organized and maintainable.
-Caching: Static files can be cached by the browser, reducing the load on the server and improving user experience.

How to serve static files in Node.js with Express.js:
Express.js provides a convenient way to serve static files using the express.static() middleware. Here's an example: 

const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// ... other routes and middleware
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

In this example, the express.static() middleware is used to serve files from the public directory. This means that any requests for files with extensions like .html, .css, .js, or .jpg will be automatically served from the public directory.


8. Query Parameters = In a backend context, query parameters are additional pieces of information that are appended to a URL after a question mark (?). They are used to pass data to the server and customize the response.

Syntax:
http://example.com/api/resource?param1=value1&param2=value2

In this example, param1 and param2 are query parameters, and value1 and value2 are their corresponding values.

-- Purpose:
- Filtering data: Query parameters can be used to filter data based on specific criteria. For example, you might use a query parameter to filter a list of products by category or price.
- Pagination: Query parameters can be used to implement pagination, allowing you to fetch data in smaller chunks to improve performance and user experience.
- Sorting: Query parameters can be used to sort data based on different criteria, such as alphabetical order or numerical value.
- Customization: Query parameters can be used to customize the response, such as specifying the number of items to return or the format of the data.

-- Best Practices:
- Validation: Validate query parameters to ensure they are of the expected type and format.
- Sanitization: Sanitize query parameters to prevent security vulnerabilities like SQL injection.
- Documentation: Provide clear documentation for the query parameters supported by your API.

Accessing Query Parameters in Express.js:
In Express.js, you can access query parameters using the req.query object. For example:
app.get('/products', (req, res) => {
  const category = req.query.category;
  const page = req.query.page;

  // Use the category and page parameters to filter and paginate the data
});


9. PARAM =  In web development, a "param" or "parameter" refers to a piece of data that is passed to a function or method. It's a way to provide additional information or context that can be used to customize the behavior of the function or method.

--- Common uses of parameters:
- Functions: Parameters are used to pass arguments to functions, allowing them to perform different actions based on the input values.
- URL query strings: Query parameters are appended to URLs to specify additional information or filter results.
- API requests: Parameters are used to send data to APIs, such as filtering criteria or search terms.
- Template engines: Parameters are used to dynamically populate templates with data.

E.G. 
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

In this example, name is a parameter that is passed to the greet function. The function uses the value of name to create a personalized greeting.



10. ROUTER PARAMETERS =  Router parameters  in a backend context are placeholders within a URL path that can be replaced with dynamic values at runtime. They provide a way to create more flexible and modular routes, allowing you to handle different requests based on specific parameters.

-- Syntax:
http://example.com/api/resource/:id


--- Purpose:
- Dynamic Routing: Router parameters allow you to create dynamic routes that can handle different requests based on the values in the URL.
- Data Access: Router parameters can be used to access specific data based on the provided values.
- RESTful APIs: They are commonly used in RESTful APIs to represent resources and perform CRUD (Create, Read, Update, Delete) operations.


--- Best Practices:
- Validation: Validate router parameters to ensure they are of the expected type and format.
- Security: Sanitize router parameters to prevent security vulnerabilities like SQL injection.
- Naming Conventions: Use meaningful names for router parameters to improve code readability.


Accessing Router Parameters in Express.js:
In Express.js, you can access router parameters using the req.params object. For example:
JavaScript
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // Use the userId to retrieve user data from a database
});


11. ROUTE = in a backend context, a route refers to a specific URL path that maps to a corresponding handler function. This handler function is responsible for processing incoming requests to that particular URL and generating a response.

--- Key points about routes:
- URL Patterns: Routes define the patterns that URLs must match to trigger a specific handler.
- HTTP Methods: Routes can be associated with different HTTP methods (GET, POST, PUT, DELETE, etc.) to handle different types of requests.
- Handlers: The handler function associated with a route is responsible for processing the request and generating a response.
- Middleware: Middleware functions can be applied to routes to modify requests or responses before or after the handler is executed.


Example: JavaScript - 
const express = require('express');
const app = express();
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // Retrieve user data based on the userId
  // ...
  res.send(userData);
});

In this example:
/users/:userId is a route that matches URLs like /users/123 or /users/john.
The :userId part is a router parameter that captures the value in the URL path.
The route handler retrieves user data based on the userId and sends it as the response.

By defining routes and associating them with appropriate handlers, you can structure your backend application and handle different requests effectively.


12. Query Parameters vs. Router Parameters = While both query parameters and router parameters are used to pass data to a backend application, they serve different purposes and are accessed in different ways.

--- Query Parameters:
- Purpose: Used to filter, sort, or paginate data.
- Syntax: Appended to the URL after a question mark (?).
- Access: Accessed using the req.query object in Express.js.
- Example: /products?category=electronics&page=2

--- Router Parameters:
- Purpose: Used to represent dynamic parts of a URL path.
- Syntax: Placed within a URL path using colons (:).
- Access: Accessed using the req.params object in Express.js.
- Example: /users/:userId

In summary:
- Query parameters are used to provide additional information to the server, such as filtering criteria or pagination options.
- Router parameters are used to create dynamic URLs and access specific data based on the values in the URL path.

key Differences:
Feature       	                                Query Parameters	                                       Router Parameters
Purpose	                                     Filtering, sorting, pagination                              	Dynamic URL paths
Syntax	                                      Appended after a question mark	                         Placed within the URL path
Access	                                          req.query object	                                    req.params object


13. APP.USE() =  app.use() in Express.js is a powerful method used to register middleware functions with your application. Middleware functions are functions that have access to the request (req) object, response (res) object, and the next middleware function in the application's request handling cycle. 

Purpose:
- Modify Requests: Middleware can modify the request object before it reaches the route handler. For example, you can parse request bodies, extract authentication information, or add custom headers.
- Modify Responses: Middleware can modify the response object before it's sent to the client. For example, you can set headers, compress the response, or add custom content.
- Handle Errors: Middleware can be used to handle errors that occur during request processing.
- Authentication and Authorization: Middleware can be used to implement authentication and authorization mechanisms.
- Logging and Monitoring: Middleware can be used to log information about requests and responses, or to monitor performance metrics.

---  Where:
- app is the Express.js application instance.
- middlewareFunction is the function to be registered as middleware.

---- Key Points:
- Middleware functions are executed in the order they are registered using app.use().
- Middleware can be applied globally to all routes or to specific routes.
- Middleware can be used to create reusable logic and improve the modularity of your application.

E.G. 
const express = require('express');
const app = express();
// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Route handler
app.get('/users', (req, res) => {
  // ...
});
In this example, the middleware function logs the HTTP method and URL of each incoming request to the console. It then calls next() to pass control to the next middleware or route handler.


14. MONGODB = MongoDB is a popular NoSQL database that stores data in flexible JSON-like documents. Unlike traditional relational databases that use tables and rows, MongoDB offers a more dynamic and schema-less approach to data storage.

--- Key features of MongoDB:
- Document-oriented: Data is stored as documents, which can contain nested structures and arrays.
- Schema-less: You don't need to define a rigid schema upfront. Documents can have different structures.
- Scalability: MongoDB is designed to scale horizontally, making it suitable for handling large datasets and high traffic.
- Flexibility: Offers flexibility in data modeling and querying.
Indexing: Supports indexing for efficient data retrieval.
- Aggregation: Provides powerful aggregation pipelines for data analysis and transformation.

--- Common use cases for MongoDB:
- Web applications: Storing user data, session data, and application settings.
- Content management systems: Managing content like blog posts, articles, and images.
- Real-time applications: Handling real-time data updates and notifications.
- IoT (Internet of Things): Storing sensor data and other time-series data.
- Analytics and reporting: Analyzing and reporting on large datasets.

In summary, MongoDB is a versatile and scalable NoSQL database that offers a flexible approach to data storage and retrieval. It's widely used in various web and mobile applications.


15. BSON  =  BSON (Binary JSON) is a binary-encoded serialization format used by MongoDB. It's a more efficient way to store and transfer data compared to plain JSON.

--- Key differences between JSON and BSON:
- Binary Encoding: BSON uses a binary encoding scheme, which is generally more compact and efficient than JSON's text-based encoding.
- Extended Data Types: BSON supports additional data types beyond those found in JSON, such as binary data, timestamps, regular expressions, and more.
- Performance: BSON can offer performance improvements, especially when dealing with large datasets or complex data structures.

--- When to use BSON:
- Storing binary data: If your application needs to store binary data (e.g., images, audio files), BSON is a good choice.
- Improving performance: For applications that require high performance and efficiency, BSON can be beneficial.
- Interacting with MongoDB: MongoDB natively uses BSON for data storage and transmission.



16. ENTITY = In the context of databases and software development, an entity often represents a real-world object or concept that you want to store and manage data about.
For example, in a customer relationship management (CRM) system, entities might include customers, products, orders, and contacts.   

Key characteristics of entities:
- Identity: Each entity has a unique identity, such as a primary key in a database.
- Attributes: Entities have attributes or properties that describe their characteristics. For example, a customer entity might have attributes like name, email, address, and phone number.   
- Relationships: Entities can have relationships with other entities. For example, a customer might have many orders, and an order might belong to a customer.


17. SCHEMA  = Schema refers to the structure or organization of data. It defines the fields, data types, and relationships between different entities in a database or data model.

-- Key aspects of schema:
- Fields: The individual pieces of data that make up an entity. For example, a "customer" entity might have fields like "name," "email," and "address."
- Data types: The type of data that each field can hold (e.g., text, numbers, dates).
- Relationships: How entities are connected to each other. For example, a "customer" entity might have a one-to-many relationship with an "order" entity.

--- Schema can be used in various contexts, including:
- Database design: Defining the structure of tables and columns in a relational database.
- Data modeling: Creating a visual representation of the relationships between entities.
- Schema validation: Ensuring that data conforms to the defined structure.



18. MODEL  =  In the context of software development, a model is a representation of a real-world object or concept. It defines the structure, properties, and behavior of an entity.
 
-- Key aspects of models:
- Data structure: Models define the data that an entity will hold. For example, a "Customer" model might have fields like "name," "email," and "address."
- Relationships: Models can define relationships between different entities. For example, a "Order" model might have a relationship with a "Customer" model.
- Behavior: Models can define the behavior of an entity, such as methods or functions that can be called on the model.

---  Models are often used in:
- Object-oriented programming: To represent objects and their interactions.
- Data modeling: To define the structure of data in databases.
- Web development: To represent data that is passed between the frontend and backend.



19. PUT & PATCH =  PUT and PATCH are HTTP methods used to modify existing resources on a server. While they both serve a similar purpose, there are some key differences:

-- PUT:
- Replaces the entire resource: When you use PUT, you're essentially replacing the entire resource with a new version. The entire resource should be sent in the request body.
- Idempotent: A PUT request can be repeated multiple times without changing the result. This means that if you send the same PUT request twice, the outcome will be the same.

-- PATCH:
- Updates specific parts of the resource: When you use PATCH, you're only updating specific parts of the existing resource. You send the changes to the server in the request body.
- Not idempotent: Multiple PATCH requests may produce different results if they modify different parts of the resource or if the resource has been updated between requests.

-- Choosing the Right Method:
- Use PUT when: You want to replace the entire resource with a new version. For example, if you're updating a user's profile and want to replace all their information.
- Use PATCH when: You only want to update specific parts of the resource. For example, if you're updating a user's email address without changing their other information.

In summary:
- PUT is used to replace entire resources.
- PATCH is used to update specific parts of resources.


20. MVC (Model-View-Controller)   = MVC is a design pattern that separates a web application into three distinct components:

1.Model: Represents the data and business logic of the application. It handles data access, validation, and manipulation.

2.View: Responsible for rendering the user interface based on the data provided by the model.

3.Controller: Acts as an intermediary between the model and the view, handling requests, processing data, and updating the model as needed.

--- Benefits of MVC:
- Separation of Concerns: Clearly separates concerns, making the code more organized and maintainable.
- Reusability: Encourages code reusability by separating logic from presentation.
- Scalability: Makes it easier to scale applications as they grow in complexity.
Testability: Improves testability by isolating different parts of the application.


--- MVC in Backend Development
In backend development, MVC is often implemented using a framework or library. For example, in Node.js, popular frameworks like Express.js and Koa adopt the MVC pattern.

--- Key Considerations:
The specific implementation of MVC can vary depending on the framework or library used.
Some frameworks may have built-in MVC features, while others may require you to implement it manually.
It's important to choose a suitable MVC architecture that aligns with your project's requirements and development style.


E.G. 
const express = require('express');
const app = express();
// Model
const User = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com'
};
// Controller
app.get('/users', (req, res) => {
  res.send(User);
});
// View (assuming a template engine like EJS)
// index.ejs:
<h1>User Profile</h1>
<p>Name: <%= user.name %></p>
<p>Email: <%= user.email %></p>
   
In this example:

The User object represents the model, containing the user data.
The route handler in the controller fetches the User object and sends it to the view.
The view (template) renders the user data using placeholders.


21. PRE & POST hooks  = 
a. PRE HOOK = Pre-hooks are functions or methods that are executed before a specific operation or event occurs in a backend system. They provide a mechanism to intercept and modify requests, data, or behavior before the main processing logic takes place. 

--- Use Cases:
- Input validation: Validating incoming data to ensure it meets specific criteria and prevent errors or security vulnerabilities.
- Authentication and authorization: Checking user credentials and permissions before allowing access to resources.
- Logging: Recording information about requests, responses, and errors for debugging and analysis.
- Data transformation: Transforming or modifying data before it's processed further.
- Rate limiting: Limiting the number of requests that can be made within a certain time period.

b. POST HOOK  =  Post-hooks are functions or methods that are executed after a specific operation or event has completed. They provide a mechanism to perform actions after the main processing logic has finished.

--- Use Cases:
- Data modification: Modifying data after it has been processed.
- Caching: Caching results of expensive operations to improve performance.
- Logging: Recording information about the results of operations.
- Notifications: Sending notifications or emails after certain events occur.
- Cleanup: Performing cleanup tasks after an operation is complete.

--- Differences:
- Timing: Pre-hooks are executed before the main operation, while post-hooks are executed after.
- Purpose: Pre-hooks are typically used for validation, authentication, and data transformation, while post-hooks are used for data modification, caching, logging, and notifications.
- Impact on Flow: Pre-hooks can prevent the main operation from proceeding if certain conditions are not met, while post-hooks are executed regardless of the outcome of the main operation.

--  Implementing Pre-Hooks and Post-Hooks:
The specific implementation of pre-hooks and post-hooks will vary depending on the programming language, framework, and use case. However, they often involve defining functions or using built-in mechanisms provided by the framework or language.

--- Examples:
- Express.js middleware: Middleware functions in Express.js can be used as pre-hooks and post-hooks.
-- Database hooks: Many database systems provide hooks for events like beforeInsert, afterInsert, beforeUpdate, and afterUpdate.
-- Custom hooks: You can create custom hooks in your application to implement pre-hook and post-hook logic.




22.  difference between import and require 
a. import is ES6 syntax                             &   require is commonJS syntax
b. import can't be conditional                      &   require can be conditional
c. import happen at the beginning of the file       &   require can be used anywhere in the file
d. import can't be conditionally loaded             &   require can be conditionally loaded 







