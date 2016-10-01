# AngularMVC with Node cluster server 

#### Angular MVC with Node cluster server with mapmyindia api integration.
  -- This is Angular MVC startup project with node cluster server integrated in it. 

## Steps to run this demo application
* clone this repository
* add a folder in app folder with name config
* add config.js file in config folder
* goto http://www.mapmyindia.com/api/
* Signup there and you will get the licence key from there 
* once you get the licence key write 
* var licenceKey = "your_licence_key" in config.js
* include in index.html, ignore if already added.

## Now open terminal
* path/to/your/project
* run the below commands
* $  export NODE_ENV='development'
* $ node server.js

Now open browser and browse localhost:5000
As we set port number 5000 in our server.js file so it will run on that port. See file server.js

Thanks 
