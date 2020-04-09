## [feeds-rest (click to see demo)](https://feeds-react.herokuapp.com/)

REST backend - NodeJS application created to serve together with the [frontend React application](https://github.com/KulovacNedim/feeds-react)

[NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL) | Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/)

## DEMO
[Click to see application in action](https://feeds-react.herokuapp.com/)

Application is deployed to Heroku using it's free hosting plan and Heroku will put it to sleep after some period of inactivity. So it is possible that first load of application will be slow (Heroku has to deploy it again). 

Also that is the reason why this repository contains certain images and why `util/heroku-db-normalizer.js` file is used (to prevent fetching image urls from database without images on server).

## Clone

Clone this repo to your local machine using `https://github.com/KulovacNedim/feeds-rest.git`
and run `npm init` to install all dependencies

## Available Scripts

In the project directory, you can run:

#### `npm start` - to start the app in production mode
#### `npm run start:dev` - to start the app in development mode ([port: 3000](http://localhost:3000))
#### `npm run test` - to ran tests using mocha, chai and sinon

<br>

## REST endpoints


#### Authentication endpoints:

1. >method: `PUT`, url: `{base_url}/auth/signup`

   used to register new user. Expects body with the JSON object with properties: email, name and password
   
2. >method: `POST`, url: `{base_url}/auth/login`

   used to login user. Expects body with the JSON object with properties: email and password

3. >method: `GET`, url: `{base_url}/auth/status`

  used to fetch user status
  
4. >method: `PATCH`, url: `{base_url}/auth/login`

 used to update user status. Expects body with the JSON object with property: status
 
<br>

#### CRUD operations on `Post` model/object endpoints:

1. >method: `GET`, url: `{base_url}/feed/posts`

   used to get all posts. Query parameter `page` can be send too to implement pagination
   
2. >method: `POST`, url: `{base_url}/feed/post`

   used to create new post. Expects body with the multipart data with properties: title, content and image

3. >method: `GET`, url: `{base_url}/feed/post/:postId`

  used to fetch specific post
  
4. >method: `PUT`, url: `{base_url}/feed/post/:postId`

 used to update specific post. Expects body with the multipart data with properties: title, content and image

5. >method: `DELETE`, url: `{base_url}/feed/post/:postId`

 used to delete specific post
