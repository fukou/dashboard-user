# Dashboard User

## Requirements
- [Node.js](https://nodejs.org/en/)
- Visual Studio Code
- Browser

## Installation guide
```
git clone https://github.com/fukou/dashboard-user.git
cd dashboard-user
npm install
```

## How to run this project
After installing the dependencies, you need to run this command to start the JSON Server so we can access the REST API
```
json-server db.json
```

It will shows this if you succeed

```
\{^_^}/ hi!
Loading db.json
 Done
Resources
 http://localhost:3000/users
Home
 http://localhost:3000
Type s + enter at any time to create a snapshot of the database
```

Open new Node.js command prompt to start the development by using this command:
``` 
npm run serve 
```

And you're done! Open the local URL to access the development.
```
DONE Compiled successfully in 526ms
App running at:
 — Local: http://localhost:8080/ 
 — Network: http://10.100.99.97:8080/
 
```

## Components
- Vuetify
- Vue.js
- Vue Chart
