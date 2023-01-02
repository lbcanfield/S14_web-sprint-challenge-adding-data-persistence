const tasks = [
     { task_description: 'Welcome to BloomTech from CEO, Austen Allred', project_id: 1 },
     { task_description: 'BloomTech\'s Approach to Learning', project_id: 1 },
     { task_description: 'Remember Your Why!', project_id: 1 },
     { task_description: 'Join Our Community', project_id: 1 },
     { task_description: 'Meet Your Coach', project_id: 1 },
     { task_description: 'Your Future as a Software Engineer', project_id: 1 },
     { task_description: 'Be a Software Engineer: Let\'s Build a Game!', project_id: 1 },
     { task_description: 'Build Your First Web Page! - Join a Live Coding Experience', project_id: 1 },
     { task_description: 'How Do We Think Like A Software Engineer?', project_id: 1 },
     { task_description: 'What is Web Development?', project_id: 1 },
     { task_description: 'How Do We Build a Web Page?', project_id: 1 },
     { task_description: 'What Makes a Web Page Look Good?', project_id: 1 },
     { task_description: 'How Do We Make Web Pages Interactive?', project_id: 1 },
     { task_description: 'Let\'s Prepare to Work as a Software Engineer', project_id: 1 },
     { task_description: 'MAC Users: How to Set Up Your Environment', project_id: 1 },
     { task_description: 'Windows/PC Users: How to Set Up Your Environment', project_id: 1 },
     { task_description: 'Check In with Your Enrollment Coach', project_id: 1 },

     { task_description: 'Intro to Git: Introduction/Initial Set Up', project_id: 2 },
     { task_description: 'Intro to Git: Configuring Your System', project_id: 2 },
     { task_description: 'Intro to Git: Navigating Git', project_id: 2 },
     { task_description: 'Intro to Git: Workflow', project_id: 2 },
     { task_description: 'Use the BloomTech git Workflow in the Command-Line to Submit an Assignment', project_id: 2 },
     { task_description: 'Understand What Javascript is and Explain its Use in Web Development', project_id: 2 },
     { task_description: 'Explain Global Object in JavaScript and be Able to Use the Math Object', project_id: 2 },
     { task_description: 'Write Control Flow Using if Else Statements', project_id: 2 },
     { task_description: 'Write a Basic for Loop and While Loop', project_id: 2 },
     { task_description: 'Understand JavaScript Functions, Why We Use Them and Be Able to Write Correct Function Syntax', project_id: 2 },
     { task_description: 'Write and Call Functions Using Arguments, Parameters, and the Return Statement', project_id: 2 },
     { task_description: 'Use Arrays to Store and Access Data', project_id: 2 },
     { task_description: 'Use Array Properties and Array Methods', project_id: 2 },
     { task_description: 'Use Objects to Store and Access Data', project_id: 2 },
     { task_description: 'Learn to Create Methods on Objects, and Utilize the \'this\' Keyword', project_id: 2 },

     { task_description: 'Explain Function Scope', project_id: 3 },
     { task_description: 'Describe What Closure is, How Closure is Created in a Program, and Why it is Important to Understand Closures in JavaScript', project_id: 3 },
     { task_description: 'Demonstrate the Proper Use of a Callback Function by Passing a Function to Another Function as a Parameter', project_id: 3 },
     { task_description: 'Demonstrate Ability to Use .map .reduce .filter and Describe Their Use Cases', project_id: 3 },
     { task_description: 'Explain the Four Principles of the \'This\' Keyword and Demonstrate Each Explanation with an Example of Their Uses', project_id: 3 },
     { task_description: 'Describe and Use Prototypes, Constructor Functions the New Keyword, and Pseudo-Classical Inheritance', project_id: 3 },
     { task_description: 'Describe and Demonstrate How Class Syntax Works', project_id: 3 },
     { task_description: 'Convert a Pseudo Classically Instantiated Program into Class Syntax', project_id: 3 },

     { task_description: 'Learn What HTML is and What it is Used for in Web Development', project_id: 4 },
     { task_description: 'Learn to Utilize Common HTML Tags and Attributes to Mark Up a Basic Page of Content', project_id: 4 },
     { task_description: 'Understand the Main Concepts of CSS (Selectors and Style Rules), and Be Able to Apply Them to an HTML Page', project_id: 4 },
     { task_description: 'Learn About the Box Model and be Able to Explain its Properties', project_id: 4 },
     { task_description: 'Demonstrate CSS Specificity and Inheritance to Create and Update Styles', project_id: 4 },
     { task_description: 'Implement a CSS Reset and Understand Why it’s Important for Cross-Browser Development', project_id: 4 },
     { task_description: 'Describe Scalable Units of Measurement and Understand Their Importance for Responsive Design and Accessibility', project_id: 4 },
     { task_description: 'Describe and Understand that FlexBox is a Module', project_id: 4 },
     { task_description: 'Demonstrate Understanding of Flex Container and Flex Item Properties in FlexBox', project_id: 4 },
     { task_description: 'Describe the Differences in Fixed, Fluid, Adaptive, and Responsive Layouts', project_id: 4 },
     { task_description: 'demonstrate knowledge of media queries by correctly implementing them in a project', project_id: 4 },
     { task_description: 'Describe How Using Scalable Units for Font Sizes Impacts Accessibility and Why Designing Accessible Web Pages is Important', project_id: 4 },

     { task_description: 'Understand how to review a task in CodeSignal, debug and submit it', project_id: 5 },
     { task_description: 'Review of basic coding knowledge (functions, variables and math)', project_id: 5 },
     { task_description: 'Differentiate data types and how to convert between them', project_id: 5 },
     { task_description: 'Utilize Boolean programming logic and if-statements', project_id: 5 },
     { task_description: 'Identify the benefits of job search and networking prior to graduation', project_id: 5 },
     { task_description: 'Write an effective warm outreach message', project_id: 5 },
     { task_description: 'Write an effective cold outreach message', project_id: 5 },

     { task_description: 'Explain What the DOM is and How it Relates to an HTML Page', project_id: 6 },
     { task_description: 'Use DOM Selectors, and Describe the Differences in the Behavior of Each', project_id: 6 },
     { task_description: 'Use Different Properties and Methods to Manipulate a Selected Element', project_id: 6 },
     { task_description: 'Create a New Element, Manipulate it, and Add it to the DOM', project_id: 6 },
     { task_description: 'Explain What Events Are in the Browser Window and How Event Listeners Can Listen for Those Events.', project_id: 6 },
     { task_description: 'Add Event Listeners and Event Handlers to Elements', project_id: 6 },
     { task_description: 'Recognize Event Propagation and the Method Used to Prevent It', project_id: 6 },
     { task_description: 'Describe What a Component is and Identify Different Parts of a Component', project_id: 6 },
     { task_description: 'Write a Function that Utilizes createElement and Returns a New DOM', project_id: 6 },
     { task_description: 'Iterate Over a List of Data Creating a New Component for Each Item and Attaching that Component to the DOM', project_id: 6 },
     { task_description: 'Understand and Utilize Asynchronous Javascript and Promises', project_id: 6 },
     { task_description: 'Understand HTTP Requests and Get Data From a Server Using Axios', project_id: 6 },
     { task_description: 'Iterate Over a List of Data Received From a Server, Creating a Set of Components and Adding Them to the DOM', project_id: 6 },

     { task_description: 'Describe ReactJS and the Problems that it Tries to Solve', project_id: 7 },
     { task_description: 'Explain What Components are and How They Work in React', project_id: 7 },
     { task_description: 'Explain What State is in Web Applications and Demonstrate How to Make a React Component Stateful', project_id: 7 },
     { task_description: 'Change the State of the Component With a Click Listener', project_id: 7 },
     { task_description: 'Use JavaScript modules to export and import components', project_id: 7 },
     { task_description: 'Describe Props and How Data Flows in a React Application', project_id: 7 },
     { task_description: 'Demonstrate the Ability to Compose React Components to Build Out a UI', project_id: 7 },
     { task_description: 'Pass Props as Dynamic Data to a React Component', project_id: 7 },
     { task_description: 'Explain What Side Effects are in React Components', project_id: 7 },
     { task_description: 'Demonstrate How to Sync Side Effects With State and Props Using the Effect', project_id: 7 },
     { task_description: 'Fetch Data From an API Using the Effect Hook', project_id: 7 },
     { task_description: 'Demonstrate How to Clean Up Side Effects in the Effect Hook', project_id: 7 },
     { task_description: 'bootstrap a React application with Create React App', project_id: 7 },
     { task_description: 'Understand How to Style React Components Using Reactstrap', project_id: 7 },
     { task_description: 'Use Styled-Components to Add Functional Styles to Their React Components', project_id: 7 },

     { task_description: 'Explain the Difference Between Client-Side Routing and Server-Side Routing', project_id: 8 },
     { task_description: 'Set Up Routes Within a React Application Using the Router, Route, and Link Components', project_id: 8 },
     { task_description: 'Use Router\'s useParam Hook to Add Dynamic Routes to an Application', project_id: 8 },
     { task_description: 'Use Router\'s useRouteMatch Hook to Add Nested Routes to an Application', project_id: 8 },
     { task_description: 'Use Router\'s use History Hook to Programmatically Navigate to Other Routes', project_id: 8 },
     { task_description: 'Demonstrate How to Build a Form With the Basic HTML Form Elements', project_id: 8 },
     { task_description: 'Use the onChange Handler to Capture Input Values', project_id: 8 },
     { task_description: 'Utilize a Form\'s Submit Event to Work With Form Data', project_id: 8 },
     { task_description: 'Demonstrate the Ability to Handle Multiple Inputs in a Form', project_id: 8 },
     { task_description: 'Use Controlled Inputs to Manage Form Data', project_id: 8 },
     { task_description: 'control forms and form inputs (checkbox, dropdown) in custom forms', project_id: 8 },
     { task_description: 'validate user input in forms', project_id: 8 },
     { task_description: 'make POST requests to pass data collected from a form to a database', project_id: 8 },
     { task_description: 'Define & Explain the Importance of End-to-End Testing', project_id: 8 },
     { task_description: 'Use the Cypress GUI to Write Tests and Interact With Elements', project_id: 8 },
     { task_description: 'Use Cypress to Test Controlled Input', project_id: 8 },
     { task_description: 'Run All Tests Without Any UI', project_id: 8 },

     { task_description: 'Understand the problem-solving framework', project_id: 9 },
     { task_description: 'Solve a problem based on if a string is determined to be a palindrome', project_id: 9 },
     { task_description: 'Define 2D arrays and how to access elements within them', project_id: 9 },
     { task_description: 'Apply moving window techniques to arrays', project_id: 9 },

     { task_description: 'Explain Class Components, and Use a Class Component to Render Some State Data to the DOM', project_id: 10 },
     { task_description: 'Share Data Between Components Using State and Props', project_id: 10 },
     { task_description: 'Respond to Events Triggered by User Interaction and Handle User Input via Forms in React', project_id: 10 },
     { task_description: 'Describe the Three Phases of the React Component Lifecycle', project_id: 10 },
     { task_description: 'Properly Explain What the Constructor and Render Methods Do and What Their Place is in the React Component Lifecycle', project_id: 10 },
     { task_description: 'Use the componentDidMount Function to Set a Component\'s State Post Render', project_id: 10 },
     { task_description: 'define stateful logic', project_id: 10 },
     { task_description: 'Apply Non-Visual Behavior (Stateful Logic) With Custom Hooks', project_id: 10 },
     { task_description: 'Compose Hooks in a Custom Hook to Extend Multiple Pieces of Stateful Logic', project_id: 10 },
     { task_description: 'Use React-Testing Library for Testing React Components', project_id: 10 },
     { task_description: 'Use the React-Testing Library to Test User Interactions With fireEvent', project_id: 10 },

     { task_description: 'Explain What Immutability is in Programming and Demonstrate its Benefits', project_id: 11 },
     { task_description: 'Describe Reducer Functions', project_id: 11 },
     { task_description: 'employ the useReducer hook to manage state in a component', project_id: 11 },
     { task_description: 'Explain What Redux is and the Problem it Solves', project_id: 11 },
     { task_description: 'Create a Redux Store and Connect it to a React Application', project_id: 11 },
     { task_description: 'use the connect function to connect React components to the Redux store', project_id: 11 },
     { task_description: 'Write Actions and Action Creators to Describe State Changes', project_id: 11 },
     { task_description: 'Write Reducers to Respond to Actions and Update State', project_id: 11 },
     { task_description: 'Describe the Finite State Machine Pattern and Its Relationship to Building Redux Applications', project_id: 11 },
     { task_description: 'Implement Redux Middleware Libraries Into a Redux Store Using ApplyMiddleware', project_id: 11 },
     { task_description: 'Effectively Use Redux-Thunk and Asynchronous Action Creators to Consume Data From External API\'s', project_id: 11 },
     { task_description: 'Describe What the Context API is and the Problem it Solves', project_id: 11 },
     { task_description: 'Provide Data to the Component Tree With a Context Provider', project_id: 11 },
     { task_description: 'consume data from a context object in nested components', project_id: 11 },

     { task_description: 'Test React Components as the Props Change', project_id: 12 },
     { task_description: 'Use Mocks in Web Application Tests', project_id: 12 },
     { task_description: 'Test Asynchronous API Calls That Are Made in a Component', project_id: 12 },
     { task_description: 'Handle Authentication With Tokens in a React App', project_id: 12 },
     { task_description: 'Implement Protected Routes Using an Authentication Token and Redirect', project_id: 12 },
     { task_description: 'Make PUT Requests to an External API Using Axios', project_id: 12 },
     { task_description: 'Make DELETE Requests to an External API Using Axios', project_id: 12 },
     { task_description: 'Explain How the World Wide Web Works', project_id: 12 },
     { task_description: 'Explain What it Means to Deploy a Static Website', project_id: 12 },
     { task_description: 'Demonstrate the Ability to Deploy and Maintain a React App Using Vercel', project_id: 12 },

     { task_description: 'Solve problems utilizing objects and letter counts', project_id: 13 },
     { task_description: 'Utilize objects to cache results', project_id: 13 },
     { task_description: 'What is Big O Notation?', project_id: 13 },
     { task_description: 'Utilize Linked Lists with Objects', project_id: 13 },
     { task_description: 'Build your resume using the BloomTech template', project_id: 13 },
     { task_description: 'Update the Technical Skills and Projects sections of your resume', project_id: 13 },
     { task_description: 'Update the Experience and Education sections of your resume', project_id: 13 },

     { task_description: 'Explain What Node.js Is and Its Core Features', project_id: 14 },
     { task_description: 'Explain What Express Is and Its Core Features', project_id: 14 },
     { task_description: 'Create an API That Can Respond to GET Requests', project_id: 14 },
     { task_description: 'Use Postman to Manually Test Web APIs', project_id: 14 },
     { task_description: 'Explain How Routing Works In an Express Application', project_id: 14 },
     { task_description: 'Read Data From the Query String, Request Body, and Route Parameters', project_id: 14 },
     { task_description: 'Explain the Basics of the REST Architectural Style', project_id: 14 },
     { task_description: 'Use Express Routers to Organize Web API Code', project_id: 14 },
     { task_description: 'Explain What Middleware Is and the Different Types', project_id: 14 },
     { task_description: 'Write Custom Middleware', project_id: 14 },
     { task_description: 'Write Error Handling Middleware', project_id: 14 },
     { task_description: 'Extract Configuration Into Environment Variables', project_id: 14 },
     { task_description: 'Deploy a Web-API to Heroku', project_id: 14 },

     { task_description: 'Explain What a Relational Database Is and Its Core Components', project_id: 15 },
     { task_description: 'Explain What SQL is and Its Advantages', project_id: 15 },
     { task_description: 'Query, Insert, and Modify Data in SQL', project_id: 15 },
     { task_description: 'Write Database Queries Using knex.js', project_id: 15 },
     { task_description: 'Use SQLite Studio on an Existing Database', project_id: 15 },
     { task_description: 'Explain What is a Database Schema', project_id: 15 },
     { task_description: 'Create and Use Knex Migrations', project_id: 15 },
     { task_description: 'Create and Use Knex Seeds', project_id: 15 },
     { task_description: 'Explain the Role of a Foreign Key', project_id: 15 },
     { task_description: 'Query Data From Multiple Tables', project_id: 15 },
     { task_description: 'Write Database Access Methods', project_id: 15 },
     { task_description: 'Explain Data Normalization', project_id: 15 },
     { task_description: 'Explain Different Table Relationships', project_id: 15 },
     { task_description: 'Create Table Relationships Using Knex', project_id: 15 },
]

exports.seed = async function (knex) {
     await knex('tasks').insert(tasks)
}