# NPM Project

1. Create project folder
2. right click on the project folder and select open integrated terminal
3. type in terminal `npm init-y` press enter
4. open package.json file from project folder
5. update type as `type:module` in package.json (by default it is type:common.js)
6. type in terminal `npm i nodemon -D` to install nodemon, which restarts server while file changes. -D flag indicates install as dev dependency
7. It creates node_modules folders and package-lock.json
8. Update .gitignore file and write project-folder/node_modules
9. Update package.json to rin the project, update script property as below

    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },
10. now you can start the server by typing `npm run dev` in the terminal of the project folder
11. push app.js and teams.js in lab 4    