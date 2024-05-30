# Todo Digital Solution test

this repository has three project the root, auth, and the todo project, every project has been built with [single-spa framework](https://single-spa.js.org/), please read the whole documentation.

## account

| field    | value |
| -------- | :---: |
| username | admin |
| password | 12345 |

## 💻 Run in localhost

If you want to runt these application on the localhost you must follow next steps:

### prerequisites

| Lib  | version |
| ---- | :-----: |
| node |  >= 16  |

### How to run the root project

1. go to root project and executing this command for installing dependencies

```
npm install
```

2. run this command for staring the root project, and going to the [browser](http://localhost:9000/) **you can see the whole project here (root, auth, todo, etc)**

```
npm run start
```

### How to run the auth project

1. Go to 'projects/auth' directory and executing the follow commands

```
npm install
```

2. Run this command for running the auth project, and going to the [browser](http://localhost:8080/), and you should be able to see it

```
npm run start:standalone
```

### How to run the todo project

1. Go to 'projects/todo' directory, and executing the follow commands

```
npm install
```

2. Run project with this command and you should be able to see it on the [browser](https://localhost:8081)

```
npm run start:standalone
```

### alert

it's very important to config **index.ejs** file on the root project with the specific ports where the apps are running on the local environment, in this project
you have to start auth project in **8080** port and todo project in **8081** port

```
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/index.min.js",
        "@rreyes/auth": "//localhost:8080/rreyes-auth.js",
        "@rreyes/todo": "//localhost:8081/rreyes-todo.js",
        "@rreyes/root-config": "//localhost:9000/rreyes-root-config.js"
      }
    }
```
