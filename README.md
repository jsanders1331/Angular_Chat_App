# My-Chat-App
##Installation: 
npm installl bootstrap jquery socket.io-client socket.io @types/socket.io-client express cors body-parser mongodb


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Nodemon

Nodemon is required for this project to run the server and monitor the file changes at backend. For more information visit [Nodemon homepage](https://nodemon.io).
To install
`npm install -g nodemon`

## Back-end server

## MongoDB

This application uses mongoDB. run npm install mongodb. Run the addUser.js script to initialise the data.

Run `nodemon server/servser.js` from the project root directory. The back-end server starts at `http://localhost:3000/`. 

#Angular and Node Architecture 
## Node Server side – Rest API 
The express application is used as a backend application in the program. It is used for logic that shouldn’t be shown as source code in the program. Authentication is done through the server with express.js.  (Frontend -> Backend -> Database) Since there is no database, user data is stored in JSON format within the server.js file. This user file would then be sent back to the front end whenever the /api/auth route was hit through a fetch request. This request would return an array of objects. The program would use this data for anything it needed within the application.

## Angular Frontend
### Components
Each section of the project was placed into components each representing a portion of the view. There is a component for the user to login, and a component for the entire chatroom which consists of: user list, chat box and profile components. 
### Routes
Three routes were used in phase 1 of the project. There is initially a route for the /login component. When the user submits their information, the login component will check if the data stored on the server matches the request. It will then route to the ChatBox component (/chatbox). The user also has an option to go to the profile component (/profile route), where they can modify their data. 
localStorage and sessionStorage
sessionStorage was used to store user data, it acted like a database for phase 1 of the program. This was done so that every time something was modified, sessionStorage.setItem(key, value) would be called to change the data.
ngIf and ngFor Directives
Directives were used to display the user list and information about the user.
### Data Binding
To bind variables to the html, the ng-model directive was used.
Services
While services were not explicitly used, I created a users.ts file for the Users classes. Components were able to import this file and use it’s functionalities through the program.

### Responsibilities and interactions
The responsibility of the express backend was used mainly for authentication only. It would match the request sent from the front end and check it with the user information stored within the server. If the password and username matched, the response would send the user information, which on the frontend side would be stored in the sessionStorage



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
