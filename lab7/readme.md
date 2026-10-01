
# Frontend - Backend
1. create project folder (lab7)
2. create frontend, backend folder with in project folder
3. open terminal and split it
4. open frontend in to left side terminal
5. open backend into righy 
6. in backend
   a. initialise backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and 
   script {
    "start": "node app.js",
    "dev": "nodemon app.js"

   }
   d. create app.js
7. in frontent
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. se;ect variant as javascript from arrow key
   e. select esList for linting from arrow key 
   f. select install and start the frontend

## Component
1. simple js function return html directly
2. It must starts with capital letter
3. It should be treated as html tag
4. It must be closed.
## Object-distucture
1.  const{rating,bname,price,quantity,picUrl}=props.book;
2. Does not depends on order, if property is not available,then it initialises with null.
3. const{price,picUrl} = props.book; // only price and picUrl will get
4. const{price,...rest}=props.book; 
5. return rest.//everything accept price.
6. Any components include styles 
 1. external css = create class in index.css and use in component.
 2.Internal css = create property as object.
 
  function Book(props){
  const{rating,bname,price,quantity,picUrl}=props.book;
  const qtyStyle={
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
    } 
   };

 
 then apply with style attribute and pass the object.
 3. inline css= in this method we use 2 curly bracket with style attribute, all the css property must be single word, for e.g. text-align will become=textAlign (camelcase).

 rafce -> arrow function
 rfce-> function shortcut on es7