- [CurrencyConvert - Exchange Rate Conversion Project](#currencyconvert---exchange-rate-conversion-project)
  - [Backend](#backend)
    - [Directory Structure](#directory-structure)
    - [Features Overview](#features-overview)
    - [Running the Code](#running-the-code)
  - [Frontend](#frontend)
    - [Features Overview](#features-overview-1)
    - [Running the Code](#running-the-code-1)
  - [Usage Instructions](#usage-instructions)
  - [Version Update Summary](#version-update-summary)

## CurrencyConvert - Exchange Rate Conversion Project

CurrencyConvert is an exchange rate conversion project developed using a frontend-backend separation approach. It is developed using Koa2+ReactJS18+MySQL5.7, and the exchange rate information is sourced from [Yahoo Finance](https://finance.yahoo.com/currency-converter).

### Backend

#### Directory Structure
```
|-- back-end
| |-- node_modules                  # Node.js dependencies
| |-- package-lock.json             # Dependency locking file
| |-- package.json                  # Node.js project configuration file
| |-- src                           # Backend source code
| `-- .env                          # Environment variable configuration file
```

The structure of the `src` folder is as follows:
```
src                                  # Backend source code root directory
|-- app                              # Application-related code directory
|   |-- errHandler.js                # Error handler
|   `-- index.js                     # Application entry file 
|-- config                           # Configuration file directory 
|   `-- config.default.js            # Default configuration file
|-- constant                         # Constant definition directory
|   `-- err.type.js                  # Error type definition file 
|-- controller                       # Controller directory 
|   |-- currency.controller.js       # Currency controller 
|   `-- user.controller.js           # User controller
|-- db                               # Database-related files directory
|   `-- seq.js                       # Database connection file 
|-- main.js                          # Main program entry file 
|-- middleware                       # Middleware directory 
|   |-- auth.middleware.js           # Authentication middleware 
|   `-- user.middleware.js           # User-related middleware
|-- model                            # Data model directory
|   |-- currency.model.js            # Currency data model
|   `-- user.model.js                # User data model 
|-- router                           # Router file directory 
|   |-- currency.route.js            # Currency router 
|   `-- users.route.js               # User router
`-- service                          # Service layer directory 
    |-- currency.service.js          # Currency service 
    `-- user.service.js              # User service
```

#### Features Overview
1. Utilizes a layered architecture of middleware, controller, and service layers to enhance code maintainability and scalability.
   + Middleware layer: Primarily used for request and response handling, as well as executing common logic such as authentication, format checking, etc. Includes authentication middleware `auth.middleware.js` and user-related middleware `user.middleware.js`.
   
   + Controller layer: Responsible for routing and dispatching business logic, delegating requests to respective services for processing. Uses Koa router library `koa-router` for routing and sends requests to different controllers, including currency logic controller `currency.controller.js` and user logic controller `user.controller.js`.
   
   + Service layer: Contains specific business logic, responsible for database interaction, data processing, etc. Encapsulates business logic within services, including currency service `currency.service.js` and user service `user.service.js`.
   
2. Utilizes Sequelize library as an ORM framework, providing convenient model definition and database query functionalities, making interaction with the database more convenient and improving development efficiency.
3. Unified error handling mechanism. Defines error types and categorizes them, then handles them in a unified error handler `errHandler.js`, while adhering to RESTful style to define HTTP error response status codes, enhancing API readability and usability.
4. Uses hashing algorithms to encrypt and store user passwords.
5. Uses JsonWebToken (JWT) for user authentication, allowing only authenticated users to access respective APIs.
6. Integrates third-party APIs:
   + Flag API: https://flagcdn.com
   + Exchange rate information API: https://finance.yahoo.com/currency-converter
7. Utilizes `dotenv` for centralized management of environment variables.

#### Running the Code

1. Ensure Node.js environment and MySQL database are installed.
2. Run the following command in the `back-end` directory to install dependencies:
    ```
    npm install
    ```
3. Modify the configuration file:
    ```
    # Application running port
    APP_PORT = 8000

    # MySQL database host
    MYSQL_HOST = localhost
    
    # MySQL database port
    MYSQL_PORT = 3306

    # MySQL database username
    MYSQL_USER = root

    # MySQL database password
    MYSQL_PWD = root

    # MySQL database name
    MYSQL_DB = cw6003

    # JWT secret
    JWT_SECRET = this_is_a_sercet
    ```
4. Start the backend service:

   ```
   npm run dev
   ```


### Frontend

Directory Structure

```
|-- front-end                      # Frontend root directory
|   |-- README.md                  # Frontend project description
|   |-- node_modules               # Frontend dependencies
|   |-- package-lock.json          # Dependency locking file
|   |-- package.json               # Frontend project configuration file
|   |-- public                     # Public resource directory
|   `-- src                        # Frontend source code
```
The structure of the `src` folder is as follows:
```
.
|-- App.js               # Main application component
|-- actions              # Actions directory
|   -- actions.js        # Action definition file 
|-- index.css            # Main style file
|-- index.js             # Entry file
|-- reducers             # Reducers directory 
|   -- reducers.js       # Reducer definition file
|-- views                # Views directory 
|   |-- Change           # Change view 
|   |-- Layout           # Layout view 
|   `-- Login            # Login view
```


#### Features Overview
1. Frontend developed using React.js.
2. Utilizes Redux for state management.
3. Developed using Ant Design UI.

#### Running the Code

1. Ensure Node.js environment is installed.
2. Run the following command in the `front-end` directory to install dependencies:
    ```
    npm install
    ```
3. Start the frontend service:
   ```
   npm start
   ```



### Usage Instructions

1. The backend service runs by default on [http://localhost:8000](http://localhost:8000).
2. The frontend development server runs by default on [http://localhost:3000](http://localhost:3000).
3. Access the frontend page to start using the exchange rate conversion functionality.

### Version Update Summary
- v1.0.0: Initial version release, implementing basic exchange rate conversion functionality.


